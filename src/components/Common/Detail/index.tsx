import { useParams } from "react-router-dom";
import CompanyDetailList from "./CompanyDetail";

const CompanyDetail = () => {
  const { id } = useParams();

  return <CompanyDetailList id={id!!} />;
};

export default CompanyDetail;
