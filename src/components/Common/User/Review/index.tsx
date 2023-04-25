import React from "react";
import { Lists } from "../style";
import * as S from "./style";

function ReviewList() {
  return (
    <Lists isReview={true}>
      <S.AbleContainer>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <S.CompanyName>무신사</S.CompanyName>
          <div>5일전</div>
        </div>

        <div>
          {Array.from({ length: 5 }).map((idx) => (
            <S.StarIcon size={30} />
          ))}
        </div>
      </S.AbleContainer>
      <S.InfoContainer>
        <div>
          무신사는 고객에게 최상의 쇼핑을 제공하고 입점 브랜드의 성장을 지원하는
          것을 경영 목표로 하고 있습니다.
        </div>
        <div>포지션 : Front-End 개발자</div>
        <div>경력 : 3년</div>
        <div>입사경로 : 면접을 잘보았더니 회사에 들어갔습니다.</div>
      </S.InfoContainer>
    </Lists>
  );
}
export default React.memo(ReviewList);
