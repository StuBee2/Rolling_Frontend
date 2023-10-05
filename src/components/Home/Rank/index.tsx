import * as S from "./style";
import rank from "@src/assets/images/Home/rank.svg";
import { Suspense, useState } from "react";
import ErrorBoundary from "@src/components/Common/ErrorBoundary";
import RankItem from "./RankItem";
import RankSkeleton from "@src/components/Common/Skeleton/Rank";
import { COMPANY_RANK_ITMES } from "@src/constants/Company/company.constant";

export default function Rank() {
  const [rankCategorySelect, setRankCategorySelect] = useState("total");
  return (
    <S.RankContainer>
      <S.RankWrapper>
        <S.RankCategoriesContainer>
          <S.RankTitle>
            <img src={rank} alt="이미지 없음" />
            <p>
              <span>BEST</span> 기업 랭킹
            </p>
          </S.RankTitle>
          <S.RankCategoriesUl>
            {COMPANY_RANK_ITMES.map((item) => (
              <S.RankCategoryLi
                key={item.id}
                onClick={() => setRankCategorySelect(item.categoryName!!)}
                isSelect={rankCategorySelect === item.categoryName}
              >
                {item.name}
              </S.RankCategoryLi>
            ))}
          </S.RankCategoriesUl>
        </S.RankCategoriesContainer>

        <ErrorBoundary fallback={<>회사 랭킹을 갖고오지 못했습니다.</>}>
          <Suspense fallback={<RankSkeleton />}>
            <RankItem rankCategory={rankCategorySelect} />
          </Suspense>
        </ErrorBoundary>
      </S.RankWrapper>
    </S.RankContainer>
  );
}
