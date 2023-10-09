import * as S from "./style";
import searchIcon from "@src/assets/images/Search/searchIcon.svg";
import React, { Suspense } from "react";
import ErrorBoundary from "@src/components/Common/ErrorBoundary";
import SearchItem from "./SearchItem";

interface Props {
  company: string;
}

function Search({ company }: Props) {
  return (
    <S.SearchContainer>
      <S.SearchWrapper>
        <S.SearchTitle>
          <img src={searchIcon} alt="이미지 없음" />
          <p>
            내가 <span>검색</span>한 회사
          </p>
        </S.SearchTitle>

        <ErrorBoundary fallback={<>검색한 회사를 갖고오지 못했습니다.</>}>
          <Suspense fallback={<>로딩중...</>}>
            <SearchItem company={company} />
          </Suspense>
        </ErrorBoundary>
      </S.SearchWrapper>
    </S.SearchContainer>
  );
}

export default React.memo(Search);
