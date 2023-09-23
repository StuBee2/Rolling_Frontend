import { useGetCompanyInfoIdQuery } from "@src/queries/Company/company.query";
import { ReviewCompanyInfoType } from "@src/types/Review/review.type";
import { tieStarRatingToObject } from "@src/utils/StarRating/tieStarRatingToObject";
import { Dispatch, SetStateAction, useEffect } from "react";
import CompanyDetailInfo from "./CompanyDetailInfo";
import CompanyStarRating from "./CompanyStarGrades";

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
    companyInfo?.companyName,
    companyInfo?.companyImgUrl,
    companyInfo?.companyId,
  ]);

  return (
    <>
      <CompanyStarRating
        starGradeInfo={tieStarRatingToObject(companyInfo!!)}
      />
      <CompanyDetailInfo companyInfo={companyInfo!!} />
    </>
  );
}
