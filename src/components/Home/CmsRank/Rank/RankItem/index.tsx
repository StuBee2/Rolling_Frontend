import { useGetCompanyRankSelectQuery } from "@src/queries/Company/company.query";
import * as S from "./style";
import { getCompanyRankIntroduce } from "@src/utils/Rank/getCompanyRankIntroduce";
import smile from "@src/assets/User/smile.svg";
import React from "react";
import { stringEllipsis } from "@stubee2/stubee2-rolling-util";

interface Props {
  rankCategory: string;
}

function RankItem({ rankCategory }: Props) {
  const { data: rankInfo } = useGetCompanyRankSelectQuery(rankCategory, {
    suspense: true,
  });

  return (
    <S.RankItemContainer>
      <S.RankCategoryIntroduce>
        <img src={smile} alt="이미지 없음" />
        <p>{getCompanyRankIntroduce(rankCategory)}</p>
      </S.RankCategoryIntroduce>
      <S.RankItemListContainer>
        <S.RankItemWrapper>
          {rankInfo?.map((item, idx) => (
            <S.RankItemBox key={item.companyId.id}>
              <S.RankingNumber>{idx + 1}</S.RankingNumber>
              <S.RankingContentContainer>
                <img src={item.companyDetails.imgUrl || ""} alt="이미지 없음" />
                <div>
                  <S.RankingCompanyName>
                    {item.companyDetails.name}
                  </S.RankingCompanyName>
                  <S.RankingCompanyDescription>
                    {stringEllipsis(item.companyDetails.description, 18)}
                  </S.RankingCompanyDescription>
                </div>
              </S.RankingContentContainer>
            </S.RankItemBox>
          ))}
        </S.RankItemWrapper>
      </S.RankItemListContainer>
    </S.RankItemContainer>
  );
}

export default React.memo(RankItem);
