import * as S from "./style";
import developer from "@src/assets/icons/Home/developer.png";
import RecommandItem from "./RecommandItem";
import ErrorBoundary from "@src/components/Common/ErrorBoundary";
import { Suspense } from "react";
import RecommandSkeleton from "@src/components/Common/Skeleton/Home/Recommand";

export default function Recommand() {
  return (
    <S.RecommandContainer>
      <S.SeniorRecommand>
        <img src={developer} alt="이미지 없음" />
        <p>졸업생들이 추천해요!</p>
      </S.SeniorRecommand>

      <S.RecommandWrapper>
        <ErrorBoundary fallback={<>회사 정보를 가지고 오지 못했습니다.</>}>
          <Suspense fallback={<RecommandSkeleton />}>
            <RecommandItem />
          </Suspense>
        </ErrorBoundary>
      </S.RecommandWrapper>
    </S.RecommandContainer>
  );
}
