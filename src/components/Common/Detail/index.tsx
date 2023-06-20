import { useParams } from "react-router-dom";
import CompanyDetailList from "./CompanyDetail";
import { CommonIdParam } from "../../../repositories/common.param";

const CompanyDetail = () => {
  const { id } = useParams();

  return (
    <>
      <CompanyDetailList id={id!!} />
    </>
  );
};

export default CompanyDetail;
