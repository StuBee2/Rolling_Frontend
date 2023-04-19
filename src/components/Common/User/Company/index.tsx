import React from "react";
import { Lists } from "../style";
import * as S from "./style";

function CompanyList() {
  return (
    <Lists isReview={false}>
      <S.InfoContainer isRow={true}>
        <S.AbleContainer>
          <S.Profile src="https://mblogthumb-phinf.pstatic.net/MjAxODA1MTdfMjEy/MDAxNTI2NTQ3NTYzMDI0.bbA7IVTT_T9sN7-TO-UCiJ9ZRJtlpdEwP-0sjvdqmkwg.rxZ3WIycXzknUNEHwwh4h6riykM6I6KT1IZItaDePrEg.PNG.heekyun93/04c66e50b1888117.png?type=w800" />
          <S.CompanyName>당근마켓</S.CompanyName>
        </S.AbleContainer>
        <div>5일전</div>
      </S.InfoContainer>

      <S.InfoContainer isRow={false}>
        <S.CompanyDescription>
          지역 기반 모바일 중고거래 애플리케이션
        </S.CompanyDescription>
        <S.CompanyAddress>
          서울특별시 서초구 서초대로30길 28, 609호
        </S.CompanyAddress>
      </S.InfoContainer>
    </Lists>
  );
}

export default React.memo(CompanyList);
