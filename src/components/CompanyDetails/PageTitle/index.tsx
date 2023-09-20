import React from "react";
import * as S from "./style";

export default function PageTitle() {
  return (
    <>
      <S.PageTitles>
        <S.PageTitleText>That's 기업 정보</S.PageTitleText>
        <S.PageTitleComment>
          해당 기업의 세세한 정보를 빠르고 쉽게 알아볼 수 있어요.
        </S.PageTitleComment>
      </S.PageTitles>
    </>
  );
}
