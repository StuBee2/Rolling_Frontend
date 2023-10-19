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
    <S.Container>
      <S.Wrapper>
        <S.Content>
          <S.CompanyInfoContainer>
            <S.RegisteredAtAndDelEditContainer>
              <S.RegisteredDate>
                {getDateText(new Date(review?.reviewModifiedAt))} 등록
              </S.RegisteredDate>
              <S.DelAndEditContainer>
                <ReviewSetUp
                  reviewId={review?.reviewId}
                  companyId={review?.companyId}
                />
              </S.DelAndEditContainer>
            </S.RegisteredAtAndDelEditContainer>

            <S.CompanyContainer
              onClick={() => navigate(`/company/${review?.companyId}`)}
            >
              <S.CompanyImgContainer>
                <img src={review?.companyImgUrl || Logo} alt="이미지 없음" />
              </S.CompanyImgContainer>

              <S.CompanyContentContainer>
                <S.CompanyName>{review?.companyName}</S.CompanyName>
                <ul>
                  <li>
                    <span>포지션</span> · {review?.reviewPosition}
                  </li>
                  <li>
                    <span>입사경로</span> ·{" "}
                    {stringEllipsis(review?.reviewCareerPath, 35)}
                  </li>
                </ul>
                <S.CompanyContent>
                  {stringEllipsis(review?.reviewContent, 90)}
                </S.CompanyContent>
              </S.CompanyContentContainer>
            </S.CompanyContainer>
          </S.CompanyInfoContainer>

          <Star
            rankStatus={rankStatus}
            width={20}
            height={20}
            fontSize={"15px"}
          />
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
}
