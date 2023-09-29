import ErrorBoundary from "@src/components/Common/ErrorBoundary";
import * as S from "./style";
import recommand from "@src/assets/Home/recommand.svg";
import { Suspense } from "react";
import HomeSkeleton from "@src/components/Common/Skeleton/Home";
import HomeItems from "./HomeItems";

export default function HomeList() {
  return (
    <S.HomeListContainer>
      <S.HomeListWrapper>
        <S.SeniorRecommand>
          <img src={recommand} alt="이미지 없음" />
          <p>선배들이 추천해요!</p>
        </S.SeniorRecommand>
        <S.HomeItemContainer>
          <ErrorBoundary fallback={<>등록된 회사를 갖고오지 못했습니다.</>}>
            <Suspense fallback={<HomeSkeleton />}>
              <HomeItems />
            </Suspense>
          </ErrorBoundary>
        </S.HomeItemContainer>
      </S.HomeListWrapper>
    </S.HomeListContainer>
  );
}
