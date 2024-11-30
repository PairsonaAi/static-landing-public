import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "./App.css";

import MainPage from "./components/MainPage/MainPage";
import { PrivacyPolicy } from "./components/Policy/Policy";
// import Login from "./components/Login/Login";
// import { AdminRoute } from "./components/AdminRoute/AdminRoute";
// import Admin from "./components/Admin/Admin";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" index element={<MainPage />} />
                <Route path="/privacy_policy" element={<PrivacyPolicy />} />
                <Route path="/terms_of_use" index element={<MainPage />} />
                <Route path="/cookies_policy" element={<MainPage />} />
                {/* <Route path="/admin" element={<AdminRoute><Admin /></AdminRoute>} /> */}
                {/* <Route path="/admin/login" element={<Login />} /> */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}