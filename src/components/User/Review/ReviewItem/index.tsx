import { ReviewListType } from "@src/types/Review/review.type";
import * as S from "./style";
import { useState } from "react";
import { changeReviewStatusToArrayObject } from "@src/utils/Review/changeRankStatusToArrayObject";
import { getDateText, stringEllipsis } from "@stubee2/stubee2-rolling-util";
import { BiDotsVerticalRounded } from "@react-icons/all-files/bi/BiDotsVerticalRounded";
import { USER_REVIEW_SETUP_ITEMS } from "@src/constants/User/user.constants";
import { useSetUpReview } from "@src/hooks/Reivew/useSetUpReview";
import { useNavigate } from "react-router-dom";
import Logo from "@src/assets/Common/Logo.svg";
import CompanyStarRating from "@src/components/Common/Star";

interface Props {
  review: ReviewListType;
}

export default function ReviewItem({ review }: Props) {
  const [reviewId, setReviewId] = useState("");
  const rankStatus = changeReviewStatusToArrayObject(review);
  const { isClickDots, setIsClickDots, hanldeReviewSetUpClick } =
    useSetUpReview();
  const navigate = useNavigate();
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
                <S.DelAndEditContainer>
                  {USER_REVIEW_SETUP_ITEMS.map((item) => (
                    <img
                      key={item.id}
                      src={item.image}
                      onClick={() => hanldeReviewSetUpClick(item.id, reviewId)}
                      alt="이미지 없음"
                    />
                  ))}
                </S.DelAndEditContainer>
              ) : (
                <S.SetUpIconContainer>
                  <BiDotsVerticalRounded
                    size={25}
                    cursor="pointer"
                    onClick={() => {
                      setIsClickDots(true);
                      setReviewId(review?.reviewId);
                    }}
                  />
                </S.SetUpIconContainer>
              )}
            </S.ReviewRegisteredAtAndDelEditContainer>
            <S.ReviewCompanyContainer
              onClick={() => navigate(`/company/${review?.companyId}`)}
            >
              <S.ReviewCompanyImgContainer>
                <img src={review?.companyImgUrl || Logo} alt="이미지 없음" />
              </S.ReviewCompanyImgContainer>
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

          <CompanyStarRating
            rankStatus={rankStatus}
            width={15}
            height={15}
            fontSize={"13px"}
          />
        </S.ReviewItem>
      </S.ReviewItemWrapper>
    </S.ReviewItemContainer>
  );
}
