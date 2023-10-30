import * as S from "./style";
import graph from "@src/assets/icons/Home/graph.png";
import { Suspense, useState } from "react";
import ErrorBoundary from "@src/components/Common/ErrorBoundary";
import RankItem from "./RankItem";
import { COMPANY_RANK_ITMES } from "@src/constants/Company/company.constant";
import MainSkeleton from "@src/components/Common/Skeleton/Home/Main";
import { MainContainer, MainTitle, MainWrapper } from "../style";
import { ViewAll } from "../../style";
import { useNavigate } from "react-router-dom";

export default function Rank() {
  const [rankCategorySelect, setRankCategorySelect] = useState("total");
  const navigate = useNavigate();

  return (
    <MainContainer>
      <MainWrapper rowGap="1rem">
        <S.RankCategoriesContainer>
          <S.TitleContainer>
            <MainTitle>
              <img src={graph} alt="이미지 없음" />
              <p>
                <span>BEST</span> 기업 랭킹
              </p>
            </MainTitle>

            <ViewAll onClick={() => navigate("/ranking")}>전체보기</ViewAll>
          </S.TitleContainer>

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
          <Suspense fallback={<MainSkeleton />}>
            <RankItem rankCategory={rankCategorySelect} />
          </Suspense>
        </ErrorBoundary>
      </MainWrapper>
    </MainContainer>
  );
}
