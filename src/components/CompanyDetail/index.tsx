import { useCustomHeader } from "@src/hooks/Common/useCustomHeader";
import { CompanyReviewRegisterModalAtom } from "@src/stores/company/company.store";
import { ReviewCompanyInfoType } from "@src/types/Review/review.type";
import { Suspense, useState } from "react";
import { useRecoilState } from "recoil";
import ErrorBoundary from "../Common/ErrorBoundary";
import Portal from "../Common/Portal";
import CompanyDetailSkeleton from "../Common/Skeleton/CompanyDetail";
import CompanyDetailItem from "./CompanyDetailItem";
import CompanyReviewModal from "./CompanyReviewModal";
import * as S from "./style";

interface Props {
  id: string;
}

export default function CompanyDetail({ id }: Props) {
  const [reviewCompanyInfo, setReviewCompanyInfo] =
    useState<ReviewCompanyInfoType>({
      companyId: "",
      companyName: "",
      companyLogo: "",
    });
  const [companyReviewRegisterModal, setCompanyReviewRegisterModal] =
    useRecoilState(CompanyReviewRegisterModalAtom);

  useCustomHeader(S.CustomHeader);
  return (
    <>
      <S.CompanyDetailContainer>
        <S.CompanyDetailWrapper>
          <ErrorBoundary fallback={<>회사정보를 갖고오지 못했습니다.</>}>
            <Suspense fallback={<CompanyDetailSkeleton />}>
              <CompanyDetailItem
                id={id}
                setReviewCompanyInfo={setReviewCompanyInfo}
              />
            </Suspense>
          </ErrorBoundary>
        </S.CompanyDetailWrapper>
      </S.CompanyDetailContainer>
      {companyReviewRegisterModal && (
        <Portal>
          <CompanyReviewModal
            setReviewModal={setCompanyReviewRegisterModal}
            reviewCompanyInfo={reviewCompanyInfo}
          />
        </Portal>
      )}
    </>
  );
}
