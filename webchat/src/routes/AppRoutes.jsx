import { Routes, Route, Navigate } from "react-router-dom";

function LoginPage() {
    return <h1>Login Page</h1>;
}

function RegisterPage() {
    return <h1>Register Page</h1>;
}

function ChatPage() {
    return <h1>WebChat Application</h1>;
}

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />

            <Route path="/login" element={<LoginPage />} />

            <Route path="/register" element={<RegisterPage />} />

            <Route path="/chat" element={<ChatPage />} />
        </Routes>
    );
}

export default AppRoutes;