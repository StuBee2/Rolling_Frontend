import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AuthLoadingPage from "../pages/Auth/AuthLoadingPage";
import LoginPage from "../pages/Auth/Login";
import UserPage from "../pages/UserPage";
import NotFound from "../components/Common/NotFound";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/callback" element={<AuthLoadingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/mypage" element={<UserPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
