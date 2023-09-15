import { ReviewListType } from "@src/types/Review/review.type";
import edit from "@src/assets/User/edit.svg";
import del from "@src/assets/User/del.svg";
import * as S from "./style";
import { useState } from "react";
import { DelAndEditContainer } from "../style";
import { changeRankStatusToArrayObject } from "@src/utils/Rank/changeRankStatusToArrayObject";
import { getDateText, stringEllipsis } from "@stubee2/stubee2-rolling-util";
import { StarRating } from "@stubee2/stubee2-rolling-ui";
import { CompanyStarRaingProps } from "@src/types/Company/company.type";

interface Props {
  review?: ReviewListType;
}

export default function ReviewItem({ review }: Props) {
  const [mouseEvent, setMouseEvent] = useState("");
  const rankStatus = changeRankStatusToArrayObject(review!!);

  return (
    <>
      <S.ReviewItemContainer
        onMouseEnter={() => setMouseEvent(review?.reviewId!!)}
        onMouseLeave={() => setMouseEvent("")}
      >
        <S.ReviewItemWrapper>
          <S.ReviewItem>
            <S.ReviewCompanyInfoContainer>
              <S.ReviewRegisteredDate>
                {getDateText(new Date(review?.reviewCreatedAt!!))} 등록
              </S.ReviewRegisteredDate>
              <S.ReviewCompanyContainer>
                <img
                  src={
                    review?.companyImgUrl!! ||
                    "https://cdn.dynews.co.kr/news/photo/201804/403722_64988_08.jpg"
                  }
                  alt="이미지 없음"
                />
                <S.ReviewCompanyContentContainer>
                  <S.ReviewCompanyName>
                    {review?.companyName!!}
                  </S.ReviewCompanyName>
                  <ul>
                    <li>
                      <span>포지션</span> · {review?.reviewPosition!!}
                    </li>
                    <li>
                      <span>입사경로</span> ·{" "}
                      {stringEllipsis(review?.reviewCareerPath!!, 20)}
                    </li>
                  </ul>
                  <S.ReviewCompanyContent>
                    {stringEllipsis(review?.reviewContent!!, 80)}
                  </S.ReviewCompanyContent>
                </S.ReviewCompanyContentContainer>
              </S.ReviewCompanyContainer>
            </S.ReviewCompanyInfoContainer>

            <CompanyStarRating rankStatus={rankStatus} />
          </S.ReviewItem>
        </S.ReviewItemWrapper>

        {mouseEvent === review?.reviewId && (
          <DelAndEditContainer>
            <img src={edit} alt="이미지 없음" />
            <img src={del} alt="이미지 없음" />
          </DelAndEditContainer>
        )}
      </S.ReviewItemContainer>
    </>
  );
}

function CompanyStarRating({ rankStatus }: CompanyStarRaingProps) {
  return (
    <S.ReviewCompanyCultureContainer>
      {rankStatus.map((item) => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>
            <StarRating starRatingCount={item.star} width={15} height={15} />
          </p>
        </div>
      ))}
    </S.ReviewCompanyCultureContainer>
  );
}
