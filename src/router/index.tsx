import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AuthLoadingPage from "@src/pages/AuthPage/AuthLoadingPage";
import UserPage from "../pages/UserPage";
import NotFound from "../components/Common/NotFound";
import { ROUTE_ITEMS } from "../constants/Router/router.constant";
import CompanyDetailPage from "@src/pages/CompanyPage/CompanyDetailPage";
import CompanyModifyPage from "@src/pages/StoryPage/ModifyPage/Company";
import CertifiedPage from "@src/pages/AlumniPage/CertifyPage";
import StoryPage from "@src/pages/StoryPage";
import AllPage from "@src/pages/AllPage";
import RankingPage from "@src/pages/RankPage";

const Router = () => {
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
      <Route path="/modify" element={<CompanyModifyPage />} />
      <Route path="/alumni/certify" element={<CertifiedPage />} />
      <Route path="/story" element={<StoryPage />} />
      <Route path="/all" element={<AllPage />} />
      <Route path="/ranking" element={<RankingPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
