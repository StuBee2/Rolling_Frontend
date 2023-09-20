import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AuthLoadingPage from "../pages/Auth/AuthLoadingPage";
import SignInPage from "../pages/Auth/SignInPage";
import UserPage from "../pages/UserPage";
import NotFound from "../components/Common/NotFound";
import { ROUTE_ITEMS } from "../constants/Router/router.constant";
import CompanyDetailPage from "../pages/CompanyDetailPage/index";

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
      <Route path="/companyDetails/:id" element={<CompanyDetailPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
