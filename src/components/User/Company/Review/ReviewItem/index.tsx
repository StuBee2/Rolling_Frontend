import { ReviewListType } from "@src/types/Review/review.type";
import edit from "@src/assets/User/edit.svg";
import del from "@src/assets/User/del.svg";
import * as S from "./style";
import Star from "@src/components/Common/Star/Star";
import { useState } from "react";
import { stringEllipsis } from "@src/utils/Common/stringEllipsis";
import { getDateText } from "@src/utils/Date/getDateCounter";
import { DelAndEditContainer } from "../../style";
import { changeRankStatusToArrayObject } from "@src/utils/Rank/changeRankStatusToArrayObject";

interface Props {
  review: ReviewListType;
}

export default function ReviewItem({ review }: Props) {
  const [mouseEvent, setMouseEvent] = useState("");
  const rankStatus = changeRankStatusToArrayObject(review);

  return (
    <S.ReviewItemContainer onMouseLeave={() => setMouseEvent(review.reviewId)}>
      <S.ReviewItemWrapper onMouseEnter={() => setMouseEvent("")}>
        <S.ReviewItem>
          <S.ReviewCompanyInfoContainer>
            <S.ReviewRegisteredDate>
              {getDateText(new Date(review.reviewCreatedAt))} 등록
            </S.ReviewRegisteredDate>
            <S.ReviewCompanyContainer>
              <img src={review.companyImgUrl || ""} alt="이미지 없음" />
              <S.ReviewCompanyContentContainer>
                <S.ReviewCompanyName>{review.companyName}</S.ReviewCompanyName>
                <ul>
                  <li>
                    <span>포지션</span> · {review.reviewPosition}
                  </li>
                  <li>
                    <span>입사경로</span>·{" "}
                    {stringEllipsis(review.reviewCareerPath, 10)}
                  </li>
                </ul>
                <S.ReviewCompanyContent>
                  {stringEllipsis(review.reviewContent, 30)}
                </S.ReviewCompanyContent>
              </S.ReviewCompanyContentContainer>
            </S.ReviewCompanyContainer>
          </S.ReviewCompanyInfoContainer>

          <S.ReviewCompanyCultureContainer>
            {rankStatus.map((item) => (
              <div key={item.id}>
                <p>{item.title}</p>
                <Star starCount={item.star!!} />
              </div>
            ))}
          </S.ReviewCompanyCultureContainer>
        </S.ReviewItem>
      </S.ReviewItemWrapper>

      {mouseEvent === review.reviewId && (
        <DelAndEditContainer>
          <img src={edit} alt="이미지 없음" />
          <img src={del} alt="이미지 없음" />
        </DelAndEditContainer>
      )}
    </S.ReviewItemContainer>
  );
}
