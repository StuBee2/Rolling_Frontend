import * as S from "../style";
import ErrorBoundary from "../../Common/ErrorBoundary";
import { Suspense } from "react";
import AllList from "./AllList";
import { useAuthTopScroll } from "@stubee2/stubee2-rolling-util";
import Footer from "../../Common/Footer";
import AllSkeleton from "../../Common/Skeleton/ViewAll/All";

export default function All() {
  useAuthTopScroll();
  return (
    <S.ViewAllContainer rowGap="8rem">
      <S.ViewAllWrapper>
        <S.TitleContianer>
          <S.Title>That's 모든 기업</S.Title>
          <S.SubTitle>
            졸업생들이 후배들을 위해 <span>롤링</span>한 기업들을 모두 보여줘요!
          </S.SubTitle>
        </S.TitleContianer>

        <ErrorBoundary
          fallback={<>졸업생 추천 회사들을 가지고 오지 못했습니다.</>}
        >
          <Suspense fallback={<AllSkeleton />}>
            <AllList />
          </Suspense>
        </ErrorBoundary>
      </S.ViewAllWrapper>
      <Footer />
    </S.ViewAllContainer>
  );
}
