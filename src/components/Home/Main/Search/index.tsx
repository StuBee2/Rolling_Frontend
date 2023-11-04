import * as S from "../style";
import readingGlasses from "@src/assets/icons/Search/readingGlasses.png";
import React, { Suspense } from "react";
import ErrorBoundary from "@src/components/Common/ErrorBoundary";
import SearchItem from "./SearchItem";
import MainSkeleton from "@src/components/Common/Skeleton/Home/Main";

interface Props {
  company: string;
}

function Search({ company }: Props) {
  return (
    <S.MainContainer>
      <S.MainWrapper rowGap="1.5rem">
        <S.MainTitle>
          <img src={readingGlasses} alt="이미지 없음" />
          <p>내가 검색한 기업 · {company}</p>
        </S.MainTitle>

        <ErrorBoundary fallback={<>검색한 회사를 갖고오지 못했습니다.</>}>
          <Suspense fallback={<MainSkeleton />}>
            <SearchItem company={company} />
          </Suspense>
        </ErrorBoundary>
      </S.MainWrapper>
    </S.MainContainer>
  );
}

export default React.memo(Search);
