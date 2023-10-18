import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AuthLoadingPage from "@src/pages/AuthPage/AuthLoadingPage";
import SignInPage from "@src/pages/AuthPage/SignInPage";
import UserPage from "../pages/UserPage";
import NotFound from "../components/Common/NotFound";
import { ROUTE_ITEMS } from "../constants/Router/router.constant";
import CompanyDetailPage from "@src/pages/CompanyPage/CompanyDetailPage";
import RegisterPage from "@src/pages/CompanyPage/CompanyRegisterPage";
import Certification from "@src/components/Graduate/Certified";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/callback" element={<AuthLoadingPage />} />
      <Route path="/signin" element={<SignInPage />} />
      {ROUTE_ITEMS.map((item) => (
        <Route
          key={item.path}
          path={item.path}
          element={<UserPage page={item.page} />}
        />
      ))}
      <Route path="/company/:id" element={<CompanyDetailPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/graduate/certification" element={<Certification />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
