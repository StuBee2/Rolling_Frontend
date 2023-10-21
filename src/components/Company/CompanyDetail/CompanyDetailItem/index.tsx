import { useGetCompanyInfoIdQuery } from "@src/queries/Company/company.query";
import { StoryCompanyInfoType } from "@src/types/Story/story.type";
import { tieStarGradeToObject } from "@src/utils/StarGrade/tieStarGradeToObject";
import { Dispatch, SetStateAction, useEffect } from "react";
import CompanyDetailInfo from "./CompanyDetailInfo";
import CompanyStarGrades from "./CompanyStarGrades";

interface Props {
  id: string;
  setStoryCompanyInfo: Dispatch<SetStateAction<StoryCompanyInfoType>>;
}

export default function CompanyDetailItem({ id, setStoryCompanyInfo }: Props) {
  const { data: companyInfo } = useGetCompanyInfoIdQuery(
    { id },
    { suspense: true }
  );

  useEffect(() => {
    setStoryCompanyInfo({
      companyId: companyInfo?.companyId!!,
      companyName: companyInfo?.companyName!!,
      companyLogo: companyInfo?.companyImgUrl!!,
    });
  }, [setStoryCompanyInfo]);

  return (
    <>
      <CompanyStarGrades starGradeInfo={tieStarGradeToObject(companyInfo!!)} />
      <CompanyDetailInfo companyInfo={companyInfo!!} />
    </>
  );
}
