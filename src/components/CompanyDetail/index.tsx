import { CustomResponsive } from "@src/stores/common/common.store";
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

  const [isCompanyReviewRegisterModal, setIsCompanyReviewRegisterModal] =
    useRecoilState(CompanyReviewRegisterModalAtom);
  const setCustomResponsive = useSetRecoilState<CSSObject | null>(
    CustomResponsive
  );

  //커스텀 헤더
  useEffect(() => {
    setCustomResponsive(S.CustomHeader);
    return () => setCustomResponsive(null);
  }, [setCustomResponsive]);

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
      {isCompanyReviewRegisterModal && (
        <Portal>
          <CompanyReviewModal
            setReviewModal={setIsCompanyReviewRegisterModal}
            reviewCompanyInfo={reviewCompanyInfo}
          />
        </Portal>
      )}
    </>
  );
}
