import * as S from "./style";
import recommand from "@src/assets/images/Home/recommand.svg";
import RecommandItem from "./RecommandItem";
import ErrorBoundary from "@src/components/Common/ErrorBoundary";
import { Suspense } from "react";

export default function Recommand() {
  return (
    <S.RecommandContainer>
      <S.SeniorRecommand>
        <img src={recommand} alt="이미지 없음" />
        <p>선배들이 추천해요!</p>
      </S.SeniorRecommand>
      <S.RecommandWrapper>
        <S.ArrowContainer>
          <S.ArrowLeft />
        </S.ArrowContainer>

        <S.HomeItemContainer>
          <ErrorBoundary fallback={<>회사 정보를 가지고 오지 못했습니다.</>}>
            <Suspense fallback={<>로딩중...</>}>
              <RecommandItem />
            </Suspense>
          </ErrorBoundary>
        </S.HomeItemContainer>

        <S.ArrowContainer>
          <S.ArrowRight />
        </S.ArrowContainer>
      </S.RecommandWrapper>
    </S.RecommandContainer>
  );
}
