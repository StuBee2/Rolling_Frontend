import { useGetReviewInfoIdQuery } from "../../../../queries/Review/review.query";
import { useGetCompanyInfoIdQuery } from "../../../../queries/Company/company.query";
import { CommonIdParam } from "../../../../repositories/common.param";

interface Props {
  id: string;
}

const CompanyDetailList = ({ id }: Props) => {
  //디자인을 아직 하고있어서 대충 데이터만 해놓은거니 만지지 마시오
  const { data: getCompanyInfo } = useGetCompanyInfoIdQuery({ id });
  return (
    <div>
      <div>회사 디테일 페이지</div>
      <div>
        <img
          src={getCompanyInfo?.memberImageUrl}
          style={{ width: "150px", borderRadius: "100px" }}
        />
        <div>{getCompanyInfo?.memberNickName}</div>
        <div>{getCompanyInfo?.memberSocialId}</div>
      </div>

      <div>
        <img src={getCompanyInfo?.companyImgUrl} style={{ width: "200px" }} />
        <br />
        {getCompanyInfo?.companyName}
        <br />
        {getCompanyInfo?.companyAddress}
        <br />
        {getCompanyInfo?.companyDescription}
      </div>
    </div>
  );
};

export default CompanyDetailList;
