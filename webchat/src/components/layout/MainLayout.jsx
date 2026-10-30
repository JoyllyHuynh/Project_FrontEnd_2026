import { useRef, useState } from "react";
import Sidebar from "./Sidebar";
import ConversationList from "../../features/chat/components/ConversationList";
import ChatWindow from "../../features/chat/components/ChatWindow";
import {getReplyDelay,createIncomingMessage,generateAutoReply,generateIncomingContent} from "../../features/chat/services/chatMockService";
import {currentUser,conversations as initialConversations,initialMessages,} from "../../services/mock/chatData";

function MainLayout() {
    // Danh sách hội thoại
    const [conversations, setConversations] = useState(
        initialConversations
    );

    // Hội thoại đang được chọn
    const [activeId, setActiveId] = useState(null);

    const activeIdRef = useRef(activeId);

    // Danh sách tin nhắn của từng hội thoại
    const [messages, setMessages] = useState(initialMessages);

    // Lấy thông tin hội thoại hiện tại
    const activeConversation = conversations.find(
        (item) => item.id === activeId
    );

    // Lấy tin nhắn của hội thoại hiện tại
    const activeMessages = messages[activeId] || [];

    // Chọn hội thoại
    const handleSelectConversation = (id) => {
        activeIdRef.current = id;
        setActiveId(id);

        // Đánh dấu hội thoại đã đọc
        setConversations((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, unread: 0 }
                    : item
            )
        );
    };

    // Gửi tin nhắn
    const handleSendMessage = (content) => {
        const trimmedContent = content.trim();

        if (!trimmedContent) return;

        // Tạo thời điểm gửi tin nhắn
        const now = Date.now();

        const newMessage = {
            id: now,
            senderId: currentUser.id,
            content: trimmedContent,
            time: new Date(now).toLocaleTimeString("vi-VN", {
                hour: "2-digit",
                minute: "2-digit",
            }),
            sentAt: now,
        };

        // Thêm tin nhắn vào hội thoại hiện tại
        setMessages((prev) => ({
            ...prev,
            [activeId]: [
                ...(prev[activeId] || []),
                newMessage,
            ],
        }));

        // Cập nhật thông tin và sắp xếp hội thoại
        setConversations((prev) => {
            const updated = prev.map((item) =>
                item.id === activeId
                    ? {
                        ...item,
                        lastMessage: `You: ${trimmedContent}`,
                        time: newMessage.time,
                        timestamp: now,
                    }
                    : item
            );

            // Sắp xếp theo timestamp giảm dần
            return updated.sort(
                (a, b) => b.timestamp - a.timestamp
            );
        });

        handleAutoReply(activeId, trimmedContent);
    };

    // Mô phỏng người đối thoại tự động trả lời
    const handleAutoReply = (conversationId, userMessage) => {
        const conversation = conversations.find(
            (item) => item.id === conversationId
        );

        if (!conversation) return;

        const delay = getReplyDelay();

        setTimeout(() => {
            const reply = generateAutoReply({
                conversation,
                lastUserMessage: userMessage,
            });

            const incomingMessage = createIncomingMessage(reply);

            setMessages((prev) => ({
                ...prev,
                [conversationId]: [
                    ...(prev[conversationId] || []),
                    incomingMessage,
                ],
            }));

            setConversations((prev) => {
                const updated = prev.map((item) =>
                    item.id === conversationId
                        ? {
                            ...item,
                            lastMessage: `${conversation.name}: ${reply.content}`,
                            time: incomingMessage.time,
                            timestamp: incomingMessage.sentAt,
                            unread:
                                activeIdRef.current === conversationId
                                    ? 0
                                    : item.unread + 1,
                        }
                        : item
                );

                return updated.sort(
                    (a, b) => b.timestamp - a.timestamp
                );
            });
        }, delay);
    };

    // Chủ động mô phỏng tin nhắn đến
    // Chủ động mô phỏng tin nhắn đến từ hội thoại được chọn
    const handleSimulateIncoming = (conversationId) => {
        const targetConversation = conversations.find(
            (item) => item.id === conversationId
        );

        if (!targetConversation) return;

        // Xác định người gửi
        const senderId =
            conversationId === 1 ? 2 : conversationId + 1;

        // Tạo tin nhắn mới
        const incomingMessage = createIncomingMessage({
            senderId,
            content: generateIncomingContent(),
        });

        // Thêm tin nhắn vào đúng hội thoại
        setMessages((prev) => ({
            ...prev,
            [conversationId]: [
                ...(prev[conversationId] || []),
                incomingMessage,
            ],
        }));

        // Cập nhật danh sách hội thoại
        setConversations((prev) => {
            const updated = prev.map((item) =>
                item.id === conversationId
                    ? {
                        ...item,
                        lastMessage: `${targetConversation.name}: ${incomingMessage.content}`,
                        time: incomingMessage.time,
                        timestamp: incomingMessage.sentAt,
                        unread:
                            activeIdRef.current === conversationId
                                ? 0
                                : item.unread + 1,
                    }
                    : item
            );

            return updated.sort(
                (a, b) => b.timestamp - a.timestamp
            );
        });
    };

    return (
        <div className="app-container">

            {/* Sidebar */}
            <Sidebar />

            {/* Danh sách hội thoại */}
            <ConversationList
                conversations={conversations}
                activeId={activeId}
                onSelect={handleSelectConversation}
            />

            {/* Cửa sổ chat */}
            <ChatWindow
                conversation={activeConversation}
                messages={activeMessages}
                currentUser={currentUser}
                onSendMessage={handleSendMessage}
                onSimulateIncoming={handleSimulateIncoming}
                conversations={conversations}
            />

        </div>
    );
}

export default MainLayout;
