import { CustomResponsiveHeaderAtom } from "@src/stores/common/common.store";
import { CompanyReviewRegisterModalAtom } from "@src/stores/company/company.store";
import { ReviewCompanyInfoType } from "@src/types/Review/review.type";
import { Suspense, useEffect, useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { CSSObject } from "styled-components";
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
  const setCustomResponsiveHeader = useSetRecoilState<CSSObject | null>(
    CustomResponsiveHeaderAtom
  );

  //커스텀 헤더
  useEffect(() => {
    setCustomResponsiveHeader(S.CustomHeader);
    return () => setCustomResponsiveHeader(null);
  }, [setCustomResponsiveHeader]);

  return (
    <>
      <S.CompanyDetailContainer>
        <S.CompanyDetailWrapper>
          <ErrorBoundary fallback={<>에러가 발생했습니다.</>}>
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
