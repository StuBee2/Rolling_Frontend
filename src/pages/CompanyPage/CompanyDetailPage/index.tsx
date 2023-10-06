import { useParams } from "react-router-dom";
import CompanyDetail from "@src/components/Company/CompanyDetail";

const CompanyDetailPage = () => {
  const { id } = useParams();

  return <CompanyDetail id={id!!} />;
};

export default CompanyDetailPage;
