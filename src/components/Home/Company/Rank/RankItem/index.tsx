import { useGetCompanyRankSelectQuery } from "../../../../../queries/Company/company.query";
import * as S from "./style";

interface Props {
  rankCategory: string;
}

export default function RankItem({ rankCategory }: Props) {
  const { data: rankInfo } = useGetCompanyRankSelectQuery(rankCategory, {
    suspense: true,
  });
  return (
    <>
      {rankInfo?.map((data, idx) => (
        <S.RankItem key={data.companyId.id}>
          <S.CompanyRanking>{idx + 1}</S.CompanyRanking>
          <S.CompanyContent>
            <S.CompanyLogo src={data.companyDetails.imgUrl} alt="이미지 없음" />
            <div>
              <S.CompanyName>{data.companyDetails.name}</S.CompanyName>
              <S.CompanyFeatures>
                {data.companyDetails.description}
              </S.CompanyFeatures>
            </div>
          </S.CompanyContent>
        </S.RankItem>
      ))}
    </>
  );
}
