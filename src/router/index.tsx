import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AuthLoadingPage from "@src/pages/AuthPage/AuthLoadingPage";
import UserPage from "../pages/UserPage";
import NotFound from "../components/Common/NotFound";
import { ROUTE_ITEMS } from "../constants/Router/router.constant";
import CompanyDetailPage from "@src/pages/CompanyPage/CompanyDetailPage";
import RegisterPage from "@src/pages/CompanyPage/CompanyRegisterPage";
import CertifiedPage from "@src/pages/Graduate";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/callback" element={<AuthLoadingPage />} />
      {ROUTE_ITEMS.map((item) => (
        <Route
          key={item.path}
          path={item.path}
          element={<UserPage page={item.page} />}
        />
      ))}
      <Route path="/company/:id" element={<CompanyDetailPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/graduate/certification" element={<CertifiedPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
