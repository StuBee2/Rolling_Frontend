import { useParams } from "react-router-dom";
import CompanyDetail from "../../components/CompanyDetail/index";

const CompanyDetailPage = () => {
  const { id } = useParams();

  return <CompanyDetail id={id!!} />;
};

export default CompanyDetailPage;
