import { useParams } from "react-router-dom";
import CompanyDetails from "../../components/CompanyDetails/index";

const CompanyDetailPage = () => {
  const { id } = useParams();

  return <CompanyDetails id={id!!} />;
};

export default CompanyDetailPage;
