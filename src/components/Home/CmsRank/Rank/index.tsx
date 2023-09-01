import * as S from "./style";
import rank from "@src/assets/Home/rank.svg";
import { HOME_COMPANY_RANK_ITMES } from "../../../../constants/Home/Home.constants";
import { Suspense, useState } from "react";
import ErrorBoundary from "@src/components/Common/ErrorBoundary";
import RankItem from "./RankItem";
import RankSkeleton from "@src/components/Common/Skeleton/Rank";

export default function Rank() {
  const [rankCategorySelect, setRankCategorySelect] = useState("total");
  return (
    <S.RankContainer>
      <S.RankTitle>
        <img src={rank} alt="이미지 없음" />
        <p>
          <span>BEST</span> 기업 랭킹
        </p>
      </S.RankTitle>
      <S.RankCategoriesUl>
        {HOME_COMPANY_RANK_ITMES.map((item) => (
          <S.RankCategoryLi
            key={item.id}
            onClick={() => setRankCategorySelect(item.categoryName!!)}
            isSelect={rankCategorySelect === item.categoryName}
          >
            {item.name}
          </S.RankCategoryLi>
        ))}
      </S.RankCategoriesUl>
      <ErrorBoundary fallback={<>Error :)</>}>
        <Suspense fallback={<RankSkeleton />}>
          <RankItem rankCategory={rankCategorySelect} />
        </Suspense>
      </ErrorBoundary>
    </S.RankContainer>
  );
}
