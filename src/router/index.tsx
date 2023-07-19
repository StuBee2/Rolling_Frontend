import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AuthLoadingPage from "../pages/Auth/AuthLoadingPage";
import LoginPage from "../pages/Auth/Login";
import UserPage from "../pages/UserPage";
import NotFound from "../components/Common/NotFound";
import RegisterPage from "../pages/RegisterPage";
import ReviewPage from "../pages/ReviewPage";
import { ROUTE_ITEMS } from "../constants/Router/router.constant";
import CompanyDetailList from "../components/Common/Detail/CompanyDetail";
import CompanyDetail from "../components/Common/Detail";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/callback" element={<AuthLoadingPage />} />
      <Route path="/login" element={<LoginPage />} />
      {ROUTE_ITEMS.map((item) => (
        <Route
          key={item.path}
          path={item.path}
          element={<UserPage page={item.page} />}
        />
      ))}
      <Route path="/register" element={<RegisterPage />} />
      {/* <Route path="/review" element={<ReviewPage />} /> */}
      <Route path="*" element={<NotFound />} />
      <Route path="/registe/:id" element={<CompanyDetail />} />
    </Routes>
  );
}
