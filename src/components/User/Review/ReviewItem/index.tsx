import { ReviewListType } from "@src/types/Review/review.type";
import * as S from "./style";
import { changeReviewStarGradesToArrayObject } from "@src/utils/Review/changeReviewStarGradesToArrayObject";
import { getDateText, stringEllipsis } from "@stubee2/stubee2-rolling-util";
import { useNavigate } from "react-router-dom";
import Logo from "@src/assets/images/Common/Logo.svg";
import Star from "@src/components/Common/Star";
import ReviewSetUp from "@src/components/Common/ReviewSetUp";

interface Props {
  review: ReviewListType;
}

export default function ReviewItem({ review }: Props) {
  const rankStatus = changeReviewStarGradesToArrayObject(review);
  const navigate = useNavigate();
  return (
    <S.ReviewItemContainer>
      <S.ReviewItemWrapper>
        <S.ReviewItemContent>
          <S.ReviewCompanyInfoContainer>
            <S.ReviewRegisteredAtAndDelEditContainer>
              <S.ReviewRegisteredDate>
                {getDateText(new Date(review?.reviewModifiedAt))} 등록
              </S.ReviewRegisteredDate>
              <S.DelAndEditContainer>
                <ReviewSetUp
                  reviewId={review?.reviewId}
                  companyId={review?.companyId}
                />
              </S.DelAndEditContainer>
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
                    {stringEllipsis(review?.reviewCareerPath, 35)}
                  </li>
                </ul>
                <S.ReviewCompanyContent>
                  {stringEllipsis(review?.reviewContent, 90)}
                </S.ReviewCompanyContent>
              </S.ReviewCompanyContentContainer>
            </S.ReviewCompanyContainer>
          </S.ReviewCompanyInfoContainer>

          <Star
            rankStatus={rankStatus}
            width={20}
            height={20}
            fontSize={"15px"}
          />
        </S.ReviewItemContent>
      </S.ReviewItemWrapper>
    </S.ReviewItemContainer>
  );
}
