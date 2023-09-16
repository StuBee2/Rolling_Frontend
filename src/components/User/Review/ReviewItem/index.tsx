import { ReviewListType } from "@src/types/Review/review.type";
import * as S from "./style";
import { useState } from "react";
import { DelAndEditContainer } from "../style";
import { changeRankStatusToArrayObject } from "@src/utils/Rank/changeRankStatusToArrayObject";
import { getDateText, stringEllipsis } from "@stubee2/stubee2-rolling-util";
import { StarRating } from "@stubee2/stubee2-rolling-ui";
import { CompanyStarRaingProps } from "@src/types/Company/company.type";
import { BiDotsVerticalRounded } from "@react-icons/all-files/bi/BiDotsVerticalRounded";
import { USER_REVIEW_SETUP_ITEMS } from "@src/constants/User/user.constants";
import { useSetUpReview } from "@src/hooks/Reivew/useSetUpReview";

interface Props {
  review: ReviewListType;
}

export default function ReviewItem({ review }: Props) {
  const [reviewId, setRevieId] = useState("");
  const rankStatus = changeRankStatusToArrayObject(review);
  const { isClickDots, setIsClickDots, hanldeSetUpClick } = useSetUpReview();
  return (
    <S.ReviewItemContainer>
      <S.ReviewItemWrapper>
        <S.ReviewItem>
          <S.ReviewCompanyInfoContainer>
            <S.ReviewRegisteredAtAndDelEditContainer>
              <S.ReviewRegisteredDate>
                {getDateText(new Date(review?.reviewCreatedAt))} 등록
              </S.ReviewRegisteredDate>
              {isClickDots && reviewId === review?.reviewId ? (
                <DelAndEditContainer>
                  {USER_REVIEW_SETUP_ITEMS.map((item) => (
                    <img
                      key={item.id}
                      src={item.image}
                      onClick={() => hanldeSetUpClick(item.id, reviewId)}
                      alt="이미지 없음"
                    />
                  ))}
                </DelAndEditContainer>
              ) : (
                <BiDotsVerticalRounded
                  size={25}
                  cursor="pointer"
                  onClick={() => {
                    setIsClickDots(true);
                    setRevieId(review?.reviewId);
                  }}
                />
              )}
            </S.ReviewRegisteredAtAndDelEditContainer>
            <S.ReviewCompanyContainer>
              <img
                src={
                  review?.companyImgUrl ||
                  "https://cdn.dynews.co.kr/news/photo/201804/403722_64988_08.jpg"
                }
                alt="이미지 없음"
              />
              <S.ReviewCompanyContentContainer>
                <S.ReviewCompanyName>{review?.companyName}</S.ReviewCompanyName>
                <ul>
                  <li>
                    <span>포지션</span> · {review?.reviewPosition}
                  </li>
                  <li>
                    <span>입사경로</span> ·{" "}
                    {stringEllipsis(review?.reviewCareerPath, 50)}
                  </li>
                </ul>
                <S.ReviewCompanyContent>
                  {stringEllipsis(review?.reviewContent, 100)}
                </S.ReviewCompanyContent>
              </S.ReviewCompanyContentContainer>
            </S.ReviewCompanyContainer>
          </S.ReviewCompanyInfoContainer>

          <CompanyStarRating rankStatus={rankStatus} />
        </S.ReviewItem>
      </S.ReviewItemWrapper>
    </S.ReviewItemContainer>
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
