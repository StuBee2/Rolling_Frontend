import { CompanyInfoType } from "@src/types/Company/company.type";
import CompanyDetailContent from "./CompanyDetailContent";
import CompanyDetailUserProfile from "./CompanyDetailUserProfile";
import * as S from "./style";
import review from "@src/assets/images/Review/review.svg";
import CompanyDetailReview from "./CompanyDetailReview";
import Token from "@src/libs/Token/Token";
import { ACCESS_TOKEN_KEY } from "@src/constants/Auth/auth.constant";
import ErrorBoundary from "@src/components/Common/ErrorBoundary";
import React, { Suspense } from "react";
import { useSetRecoilState } from "recoil";
import { CompanyReviewRegisterModalAtom } from "@src/stores/company/company.store";
import ReviewSkeleton from "@src/components/Common/Skeleton/Review";
import { turnOnModal } from "@src/utils/Modal/turnOnModal";

interface Props {
  companyInfo: CompanyInfoType;
}

function CompanyDetailInfo({ companyInfo }: Props) {
  const setCompanyReviewRegisterModal = useSetRecoilState(
    CompanyReviewRegisterModalAtom
  );

  return (
    <S.CompanyDetailInfoContainer>
      <S.CompanyDetailInfoTitleContainer>
        <S.CompanyDetailInfoTitle>That's 기업정보</S.CompanyDetailInfoTitle>
        <S.CompanyDetailInfoSubTitle>
          해당기업의 세세한 정보를 빠르고 쉽게 알아볼 수 있어요
        </S.CompanyDetailInfoSubTitle>
      </S.CompanyDetailInfoTitleContainer>

      <S.CompanyDetailInfoContentContainer>
        <div>
          <S.CompanyDetailInfoContentWrapper>
            <CompanyDetailUserProfile {...companyInfo} />
            <CompanyDetailContent companyInfo={companyInfo} />
          </S.CompanyDetailInfoContentWrapper>

          {Token.getToken(ACCESS_TOKEN_KEY) && (
            <S.CompanyReviewButtonCotainer>
              <S.CompanyReviewButton
                onClick={() => turnOnModal(setCompanyReviewRegisterModal)}
              >
                <p>나의 리뷰</p>
                <img src={review} alt="이미지 없음" />
              </S.CompanyReviewButton>
            </S.CompanyReviewButtonCotainer>
          )}
        </div>

        <ErrorBoundary fallback={<>해당 회사 리뷰를 가지고 오지 못했습니다.</>}>
          <Suspense fallback={<ReviewSkeleton />}>
            <CompanyDetailReview companyId={companyInfo.companyId} />
          </Suspense>
        </ErrorBoundary>
      </S.CompanyDetailInfoContentContainer>
    </S.CompanyDetailInfoContainer>
  );
}

export default React.memo(CompanyDetailInfo);
