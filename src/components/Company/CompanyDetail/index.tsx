import { useAuthTopScroll } from "@stubee2/stubee2-rolling-util";
import { Suspense } from "react";
import ErrorBoundary from "../../Common/ErrorBoundary";
import CompanyDetailSkeleton from "../../Common/Skeleton/CompanyDetail";
import CompanyDetailItem from "./CompanyDetailItem";
import * as S from "./style";

interface Props {
  id: string;
}

const CompanyDetail = ({ id }: Props) => {
  useAuthTopScroll();
  return (
    <S.Container>
      <S.Wrapper>
        <ErrorBoundary fallback={<>회사정보를 갖고오지 못했습니다.</>}>
          <Suspense fallback={<CompanyDetailSkeleton />}>
            <CompanyDetailItem id={id} />
          </Suspense>
        </ErrorBoundary>
      </S.Wrapper>
    </S.Container>
  );
};

export default CompanyDetail;
