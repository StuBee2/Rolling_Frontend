import { useState } from "react";
import { getDateText } from "@src/util/Date/getDateCounter";
import { ReviewListType } from "@src/types/Review/review.type";
import * as S from "../../style";
import { stringEllipsis } from "@src/util/Common/stringEllipsis";
import edit from "@src/assets/User/edit.svg";
import del from "@src/assets/User/del.svg";

interface Props {
  review: ReviewListType;
}

export default function ReviewItem({ review }: Props) {
  const [mouseEnterEvent, setMouseEnterEvent] = useState("");
  return (
    <S.ListItem
      key={review.reviewId}
      onMouseEnter={() => setMouseEnterEvent(review.reviewId)}
      onMouseLeave={() => setMouseEnterEvent("")}
    >
      <S.ListContainer>
        <S.ListRegistDate>
          {getDateText(new Date(review.reviewCreatedAt))} 등록
        </S.ListRegistDate>
        <S.CompanyContainer>
          <S.CompanyImg src={review.companyImgUrl} />
          <S.CompanyAbleContainer>
            <S.CompanyName>{review.companyName}</S.CompanyName>
            <S.CompanyPostitionCareerPathContainer>
              <div>
                <S.CompanyPostitionCareerPath>
                  포지션
                </S.CompanyPostitionCareerPath>{" "}
                · {review.reviewPosition}
              </div>
              <div>
                <S.CompanyPostitionCareerPath>
                  입사경로
                </S.CompanyPostitionCareerPath>{" "}
                · {stringEllipsis(review.reviewCareerPath, 15)}
              </div>
            </S.CompanyPostitionCareerPathContainer>
          </S.CompanyAbleContainer>
        </S.CompanyContainer>
        <p>{stringEllipsis(review.reviewContent, 20)}</p>
      </S.ListContainer>
      {mouseEnterEvent === review.reviewId && (
        <div style={{ cursor: "pointer" }}>
          <img src={edit} alt="" />
          <img src={del} alt="" />
        </div>
      )}
    </S.ListItem>
  );
}
