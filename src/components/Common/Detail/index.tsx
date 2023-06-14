import { useParams } from "react-router-dom";
import CompanyDetailList from "./CompanyDetail";
import { CommonIdParam } from "../../../repositories/common.param";

const CompanyDetail = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <CompanyDetailList id={id!!} />
    </>
  );
};

export default CompanyDetail;
