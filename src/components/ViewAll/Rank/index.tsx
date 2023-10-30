import { COMPANY_RANK_ITMES } from "@src/constants/Company/company.constant";
import { Suspense } from "react";
import ErrorBoundary from "../../Common/ErrorBoundary";
import Footer from "../../Common/Footer";
import RankingSkeleton from "../../Common/Skeleton/ViewAll/Rank";
import RankList from "./RankList";
import * as S from "../style";

export default function Rank() {
  return (
    <S.ViewAllContainer rowGap={"12rem"}>
      <S.ViewAllWrapper>
        <S.TitleContianer>
          <S.Title>
            That's 기업 랭킹
            <span>매일 오전 3:00시 업데이트</span>
          </S.Title>
          <S.SubTitle>
            졸업생들이 직접 매긴 <span>회사만족도</span>를 기반으로 카테고리별{" "}
            <span>TOP 10</span> 기업을 보여줘요!
          </S.SubTitle>
        </S.TitleContianer>

        <ErrorBoundary fallback={<>데이터를 가지고 오지 못했습니다.</>}>
          <Suspense fallback={<RankingSkeleton />}>
            {COMPANY_RANK_ITMES.map((item) => (
              <RankList
                key={item.id}
                category={item.categoryName}
                title={item.name}
              />
            ))}
          </Suspense>
        </ErrorBoundary>
      </S.ViewAllWrapper>
      <Footer />
    </S.ViewAllContainer>
  );
}
