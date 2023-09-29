import { useGetCompanyInfoIdQuery } from "@src/queries/Company/company.query";
import { ReviewCompanyInfoType } from "@src/types/Review/review.type";
import { tieStarGradeToObject } from "@src/utils/StarGrade/tieStarGradeToObject";
import { Dispatch, SetStateAction, useEffect } from "react";
import CompanyDetailInfo from "./CompanyDetailInfo";
import CompanyStarGrades from "./CompanyStarGrades";

interface Props {
  id: string;
  setReviewCompanyInfo: Dispatch<SetStateAction<ReviewCompanyInfoType>>;
}

export default function CompanyDetailItem({ id, setReviewCompanyInfo }: Props) {
  const { data: companyInfo } = useGetCompanyInfoIdQuery(
    { id },
    { suspense: true }
  );

  useEffect(() => {
    setReviewCompanyInfo({
      companyId: companyInfo?.companyId!!,
      companyName: companyInfo?.companyName!!,
      companyLogo: companyInfo?.companyImgUrl!!,
    });
  }, [
    setReviewCompanyInfo,
    companyInfo?.companyName,
    companyInfo?.companyImgUrl,
    companyInfo?.companyId,
  ]);

  return (
    <>
      <CompanyStarGrades starGradeInfo={tieStarGradeToObject(companyInfo!!)} />
      <CompanyDetailInfo companyInfo={companyInfo!!} />
    </>
  );
}
