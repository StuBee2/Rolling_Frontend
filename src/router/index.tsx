import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AuthLoadingPage from "../pages/AuthLoadingPage";
import RegisterPage from "../pages/RegisterPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/callback" element={<AuthLoadingPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}
