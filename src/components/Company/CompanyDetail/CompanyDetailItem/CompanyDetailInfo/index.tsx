import { CompanyInfoType } from "@src/types/Company/company.type";
import Content from "./Content";
import UserProfile from "./UserProfile";
import * as S from "./style";
import review from "@src/assets/images/Review/review.svg";
import Review from "./Review";
import Token from "@src/libs/Token/Token";
import { ACCESS_TOKEN_KEY } from "@src/constants/Auth/auth.constant";
import ErrorBoundary from "@src/components/Common/ErrorBoundary";
import React, { Suspense } from "react";
import { useSetRecoilState } from "recoil";
import { CompanyReviewRegistModalAtom } from "@src/stores/company/company.store";
import ReviewSkeleton from "@src/components/Common/Skeleton/CompanyDetail/Review";
import { turnOnModal } from "@src/utils/Modal/turnOnOffModal";

interface Props {
  companyInfo: CompanyInfoType;
}

function CompanyDetailInfo({ companyInfo }: Props) {
  const setCompanyReviewRegisterModal = useSetRecoilState(
    CompanyReviewRegistModalAtom
  );

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>That's 기업정보</S.Title>
        <S.SubTitle>
          해당기업의 세세한 정보를 빠르고 쉽게 알아볼 수 있어요.
        </S.SubTitle>
      </S.TitleContainer>

      <S.ContentContainer>
        <div>
          <S.ContentWrapper>
            <UserProfile {...companyInfo} />
            <Content companyInfo={companyInfo} />
          </S.ContentWrapper>

          {Token.getToken(ACCESS_TOKEN_KEY) && (
            <S.CompanyReviewButtonCotainer>
              <S.CompanyReviewButton
                onClick={() => turnOnModal(setCompanyReviewRegisterModal)}
              >
                <p>스토리 남기기</p>
                <img src={review} alt="이미지 없음" />
              </S.CompanyReviewButton>
            </S.CompanyReviewButtonCotainer>
          )}
        </div>

        <ErrorBoundary fallback={<>해당 회사 리뷰를 가지고 오지 못했습니다.</>}>
          <Suspense fallback={<ReviewSkeleton />}>
            <Review companyId={companyInfo.companyId} />
          </Suspense>
        </ErrorBoundary>
      </S.ContentContainer>
    </S.Container>
  );
}

export default React.memo(CompanyDetailInfo);
