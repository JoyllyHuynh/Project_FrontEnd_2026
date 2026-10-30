
const MOCK_REPLY_DELAY_MIN = 1000;
const MOCK_REPLY_DELAY_MAX = 3000;

// Tạo thời gian chờ phản hồi ngẫu nhiên
export function getReplyDelay() {
    return Math.floor(
        Math.random() *
        (MOCK_REPLY_DELAY_MAX - MOCK_REPLY_DELAY_MIN + 1)
    ) + MOCK_REPLY_DELAY_MIN;
}

// Tạo tin nhắn nhận từ người khác
export function createIncomingMessage({
    senderId,
    content,
}) {
    const now = Date.now();

    return {
        id: now,
        senderId,
        content,
        time: new Date(now).toLocaleTimeString("vi-VN", {
            hour: "2-digit",
            minute: "2-digit",
        }),
        sentAt: now,
    };
}

// Tạo phản hồi giả lập dựa trên tin nhắn người dùng
export function generateAutoReply({
    conversation,
    lastUserMessage,
}) {
    const message = lastUserMessage.trim().toLowerCase();

    let content;

    if (message.includes("hello") || message.includes("hi")) {
        content = "Hey! How are you doing?";
    } else if (
        message.includes("thank") ||
        message.includes("thanks")
    ) {
        content = "You're welcome! Happy to help.";
    } else if (
        message.includes("how are you")
    ) {
        content = "I'm doing great! How about you?";
    } else if (
        message.includes("project")
    ) {
        content = "That sounds interesting! How is your project going?";
    } else {
        const defaultReplies = [
            "That sounds great!",
            "Really? Tell me more!",
            "I see! What do you think about it?",
            "That's interesting!",
            "Absolutely! I agree with you.",
        ];

        const randomIndex = Math.floor(
            Math.random() * defaultReplies.length
        );

        content = defaultReplies[randomIndex];
    }

    return {
        senderId: conversation.id === 1 ? 2 : 2,
        content,
    };
}

const incomingMessages = [
    "Hey! How is your day going?",
    "I just wanted to check in with you.",
    "That sounds really interesting!",
    "Are you available to talk?",
    "Thanks for sharing that with me!",
    "Let's discuss this a little more.",
    "I have some updates for you!",
];

// Tạo nội dung tin nhắn đến ngẫu nhiên
export function generateIncomingContent() {
    const randomIndex = Math.floor(
        Math.random() * incomingMessages.length
    );

    return incomingMessages[randomIndex];
}

// Tạo tin nhắn giả lập từ hội thoại được chọn
export function generateManualIncomingMessage(conversation) {
    return {
        senderId: conversation.id === 1
            ? 2
            : conversation.id + 1,

        content: generateIncomingContent(),
    };
}

