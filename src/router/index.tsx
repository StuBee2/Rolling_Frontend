import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AuthLoadingPage from "../pages/Auth/AuthLoadingPage";
import LoginPage from "../pages/Auth/Login";
import UserPage from "../pages/UserPage";
import NotFound from "../components/Common/NotFound";
import RegisterPage from "../pages/RegisterPage";
import ReviewPage from "../pages/ReviewPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/callback" element={<AuthLoadingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/mypage" element={<UserPage page={0} />} />
      <Route path="/myregist" element={<UserPage page={1} />} />
      <Route path="/myreview" element={<UserPage page={2} />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/review" element={<ReviewPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
