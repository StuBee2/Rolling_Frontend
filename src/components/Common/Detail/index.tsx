import { useParams } from "react-router-dom";
import CompanyDetailList from "./CompanyDetail";
import { CommonIdParam } from "@src/repositories/common.param";
import * as R from "./CompanyDetail/style";

const CompanyDetail = () => {
  const { id } = useParams();

  return <CompanyDetailList id={id!!} />;
};

export default CompanyDetail;
