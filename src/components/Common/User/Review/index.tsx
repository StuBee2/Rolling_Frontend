import React from "react";
import { Lists } from "../style";
import * as S from "./style";
import { ReviewResType } from "../../../../types/review.type";
import { getDateText } from "../../../../libs/Date/getDateCounter";

interface Props {
  data: ReviewResType[];
}

function ReviewList({ data }: Props) {
  return (
    <>
      {data?.map((review) => (
        <Lists isReview={true} key={review.companyId}>
          <S.AbleContainer>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <S.CompanyName>{review.id}</S.CompanyName>
              <div>{getDateText(new Date(review.createdAt))}</div>
            </div>

            <div>
              {Array.from({ length: 5 }).map((idx) => (
                <S.StarIcon size={30} />
              ))}
            </div>
          </S.AbleContainer>
          <S.InfoContainer>
            <div>{review.content}</div>
            <div>포지션 : {review.position} 개발자</div>
            <div>경력 : {review.grade}년</div>
            <div>입사경로 : {review.careerPath}</div>
          </S.InfoContainer>
        </Lists>
      ))}
    </>
  );
}
export default React.memo(ReviewList);
