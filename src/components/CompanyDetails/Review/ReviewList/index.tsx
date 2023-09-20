import React, { useState, useEffect } from "react";
import { useGetReviewListCompanyIdQuery } from "@src/queries/Review/review.query";
import { ReviewInfoIdType } from "@src/types/Review/review.type";
import * as S from "./style";

const ReviewList = ({ companyId }: { companyId: string }) => {
  const { data: getReviewListCompanyId } = useGetReviewListCompanyIdQuery({
    id: companyId,
  });

  const [reviewListCompanyIdData, setReviewListCompanyIdData] =
    useState<ReviewInfoIdType>({
      reviewId: "",
      reviewContent: "",
      reviewPosition: "",
      reviewCareerPath: "",
      totalGrade: 0,
      salaryAndBenefits: 0,
      workLifeBalance: 0,
      organizationalCulture: 0,
      careerAdvancement: 0,
      reviewCreatedAt: "",
      reviewModifiedAt: "",
      writerId: "",
      memberNickName: "",
      memberSocialId: "",
      memberImageUrl: "",
    });

  useEffect(() => {
    if (getReviewListCompanyId) {
      setReviewListCompanyIdData({
        reviewId: "",
        reviewContent: "",
        reviewPosition: "",
        reviewCareerPath: "",
        totalGrade: 0,
        salaryAndBenefits: 0,
        workLifeBalance: 0,
        organizationalCulture: 0,
        careerAdvancement: 0,
        reviewCreatedAt: "",
        reviewModifiedAt: "",
        writerId: "",
        memberNickName: "",
        memberSocialId: "",
        memberImageUrl: "",
      });
    }
  }, [getReviewListCompanyId]);

  return (
    <S.CompanyReviewListContainer>
      {/* {getReviewListCompanyId.?.map((review) => (
        <div key={review.reviewId}>
          <img src={review.memberImageUrl} alt={review.memberNickName} />
          <p>{review.memberNickName}</p>
          <p>{review.reviewContent}</p>
          <button>Button</button>
        </div>
      ))}
      {getReviewListCompanyId?.hasNextPage && (
        <button
          onClick={() => {
            // Implement the logic to fetch next page here
          }}
          disabled={getReviewListCompanyId.isFetchingNextPage}
        >
          {getReviewListCompanyId.isFetchingNextPage
            ? "Loading..."
            : "Load More"}
        </button>
      )} */}
      <S.CompanyReviewListTitleBox>
        <S.CompanyReviewListTitle>기업 리뷰</S.CompanyReviewListTitle>
        <S.CompanyReviewListCount>2</S.CompanyReviewListCount>
      </S.CompanyReviewListTitleBox>
      <S.CompanyRevieBox>
        <div style={{ display: "flex" }}>
          <S.RevieMemberProfileImage src="" />
          <S.ReviewMemberName>최아영</S.ReviewMemberName>
          <S.MemberCompanyReviewContent>
            대기업 답게 연봉도 높았고 사내 복지, 문화 모든게 완벽했습니다.
            <br />그 밖에도 이 기업에서 개발을 하면서 참 많은 것을 배워 세상을
            <br />
            넓게 또 다르게 보는 시선을 가지게 된 것 같아
            <br /> 네이버 개발팀의 크루로 일한 모든 시간들을 소중히 간직할 것
            같습니다. 역시 네이버 👍🏻
          </S.MemberCompanyReviewContent>
        </div>
        <S.MemberCompanyContentBox>
          <div style={{ display: "flex" }}>
            <S.MemberCompanyContentTitle>포지션 · </S.MemberCompanyContentTitle>
            <S.MemberCompanyContentDetail>
              Backend Engineer
            </S.MemberCompanyContentDetail>
          </div>
          <div style={{ display: "flex" }}>
            <S.MemberCompanyContentTitle>
              입사경로 ·{" "}
            </S.MemberCompanyContentTitle>
            <S.MemberCompanyContentDetail>
              공식 채용
            </S.MemberCompanyContentDetail>
          </div>
        </S.MemberCompanyContentBox>
      </S.CompanyRevieBox>
    </S.CompanyReviewListContainer>
  );
};

export default ReviewList;
