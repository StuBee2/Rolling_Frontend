import { tieStarGradeToObject } from "@src/utils/StarRating/tieStarGradeToObject";
import CompanyDetailInfo from "./CompanyDetailInfo";
import CompanyStarGrades from "./CompanyStarGrades";
import { useGetCompanyInfoIdQuery } from "@src/services/Company/queries";

interface Props {
  id: string;
}

export default function CompanyDetailItem({ id }: Props) {
  const { data: companyInfo } = useGetCompanyInfoIdQuery(
    { id },
    { suspense: true }
  );

  return (
    <>
      <CompanyStarGrades starGradeInfo={tieStarGradeToObject(companyInfo!!)} />
      <CompanyDetailInfo companyInfo={companyInfo!!} />
    </>
  );
}
