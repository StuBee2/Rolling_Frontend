import React from "react";
import { Lists } from "../style";
import * as S from "./style";
import { ReviewListType } from "../../../../types/review.type";
import { getDateText } from "../../../../libs/Date/getDateCounter";

interface Props {
  data: ReviewListType[];
}

function ReviewList({ data }: Props) {
  return (
    <>
      {data?.map((review) => (
        <Lists isReview={true}>
          <S.AbleContainer>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <S.CompanyInfoContainer>
                <S.CompanyLogo src="" alt="" />
                <S.CompanyName>{review.content}</S.CompanyName>
              </S.CompanyInfoContainer>
              <div>{getDateText(new Date(review.createdAt))}</div>
            </div>

            <div>
              {Array.from({ length: review.grade }).map((idx) => (
                <S.StarIcon size={30} />
              ))}
            </div>
          </S.AbleContainer>
          <S.InfoContainer>
            <div>리뷰어 : </div>
            <div>포지션 : {review.position}</div>
            <div>입사경로 : {review.careerPath}</div>
          </S.InfoContainer>
        </Lists>
      ))}
    </>
  );
}
export default React.memo(ReviewList);
