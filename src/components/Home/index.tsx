import * as S from "./style";
import recommand from "../../assets/Home/recommand.svg";
import Nav from "./Nav";
import Cms from "./Company/Cms";
import Rank from "./Company/Rank";
import HomeItem from "./HomeItem";
import ErrorBoundary from "../Common/ErrorBoundary";
import { Suspense } from "react";
import NavTop from "./Nav/NavTop";
import HomeSkeleton from "../Common/Skeleton/Home";

export default function Home() {
  return (
    <S.HomeContainer>
      <NavTop />
      <S.HomeWrapper>
        <S.NavAndHomeItemContainer>
          <Nav />

          <S.HomeItemContainer>
            <S.HomeItemWrapper>
              <S.HomeItemBox>
                <S.Title>
                  <img src={recommand} alt="이미지 없음" />
                  <p>선배들이 추천해요!</p>
                </S.Title>
                <ErrorBoundary fallback={<>Error</>}>
                  <Suspense fallback={<HomeSkeleton />}>
                    <HomeItem />
                  </Suspense>
                </ErrorBoundary>
              </S.HomeItemBox>
            </S.HomeItemWrapper>
          </S.HomeItemContainer>
        </S.NavAndHomeItemContainer>

        <S.CmsContainer>
          <Cms />
          <Rank />
        </S.CmsContainer>
      </S.HomeWrapper>
    </S.HomeContainer>
  );
}
