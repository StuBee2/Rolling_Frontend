import { useGetMyReviewQuery } from "../../../../queries/review/review.query";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import stringEllipsis from "../../../../libs/Common/stringEllipsis";
import write from "../../../../assets/write.svg";
import { getDateText } from "../../../../libs/Date/getDateCounter";
import { Container, Explain, Title } from "../../Profile/style";
import edit from "../../../../assets/edit.svg";
import del from "../../../../assets/del.svg";
import { getTimeAgo } from "../../../../libs/Date/getTimeAgo";
import * as S from "../style";

export default function Review() {
  const { data: reviewList, fetchNextPage } = useGetMyReviewQuery({
    suspense: true,
  });
  const [ref, inView] = useInView();
  const [mouseEnterEvent, setMouseEnterEvent] = useState("");

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <Container>
      <Title>
        <div style={{ fontSize: "30px" }}>내 기업 History</div>
        <Explain>
          기본 정보와 서비스에서 이용되는 프로필을 설정할 수 있어요
        </Explain>
      </Title>
      <div style={{ width: "90%" }}>
        <S.CompanyStatus>
          <img src={write} alt="" />
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div style={{ fontSize: "20px", fontWeight: "bold" }}>Write</div>
            <div style={{ fontSize: "11px" }}>
              {reviewList?.pages[0].data[0]
                ? getTimeAgo(
                    new Date(reviewList?.pages[0].data[0].reviewCreatedAt!!)
                  )
                : "0"}{" "}
              업데이트 · 갯수 2
            </div>
          </div>
        </S.CompanyStatus>
      </div>

      <S.ListWrap>
        {reviewList?.pages.map((data) =>
          data.data.map((review) => (
            <div
              style={{ display: "flex", width: "100%", gap: "20px" }}
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
                <div>{stringEllipsis(review.reviewContent, 20)}</div>
              </S.ListContainer>
              {mouseEnterEvent === review.reviewId && (
                <div style={{ cursor: "pointer" }}>
                  <img src={edit} alt="" />
                  <img src={del} alt="" />
                </div>
              )}
            </div>
          ))
        )}
      </S.ListWrap>
      <div ref={ref} />
    </Container>
  );
}
