import { useState } from "react";

import Sidebar from "./Sidebar";
import ConversationList from "../../features/chat/components/ConversationList";
import ChatWindow from "../../features/chat/components/ChatWindow";

import {
    conversations as initialConversations,
    initialMessages,
    currentUser,
} from "../../services/mock/chatData";

function MainLayout() {

    const [conversations, setConversations] = useState(
        initialConversations
    );

    const [activeId, setActiveId] = useState(1);

    const [messages, setMessages] = useState(initialMessages);

    const activeConversation = conversations.find(
        (item) => item.id === activeId
    );

    const activeMessages = messages[activeId] || [];

    const handleSelectConversation = (id) => {
        setActiveId(id);

        setConversations((prev) =>
            prev.map((item) =>
                item.id === id
                    ? { ...item, unread: 0 }
                    : item
            )
        );
    };

    const handleSendMessage = (content) => {

        const newMessage = {
            id: Date.now(),
            senderId: currentUser.id,
            content,
            time: new Date().toLocaleTimeString("vi-VN", {
                hour: "2-digit",
                minute: "2-digit",
            }),
        };

        setMessages((prev) => ({
            ...prev,
            [activeId]: [
                ...(prev[activeId] || []),
                newMessage,
            ],
        }));

        setConversations((prev) =>
            prev.map((item) =>
                item.id === activeId
                    ? {
                        ...item,
                        lastMessage: `You: ${content}`,
                        time: newMessage.time,
                    }
                    : item
            )
        );
    };

    return (
        <div className="app-container">

            <Sidebar />

            <ConversationList
                conversations={conversations}
                activeId={activeId}
                onSelect={handleSelectConversation}
            />

            <ChatWindow
                conversation={activeConversation}
                messages={activeMessages}
                currentUser={currentUser}
                onSendMessage={handleSendMessage}
            />

        </div>
    );
}

export default MainLayout;