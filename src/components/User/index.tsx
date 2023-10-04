import * as S from "./style";
import Nav from "./Nav";
import { ReactNode, Suspense } from "react";
import ErrorBoundary from "../Common/ErrorBoundary";
import useTokenCheck from "@src/hooks/Auth/useTokenCheck";
import NavFooter from "./Nav/NavFooter";
import UserSkeleton from "../Common/Skeleton/User";
import NavSkeleton from "../Common/Skeleton/Nav";
import ReviewStatus from "./ReviewStatus";
import ReviewStatusSkeleton from "../Common/Skeleton/User/ReviewStatus";
import { useLocation } from "react-router";

interface Props {
  children: ReactNode;
}

export default function User({ children }: Props) {
  useTokenCheck();
  const { pathname } = useLocation();
  const isReviewPage = pathname === "/mypage/review";
  return (
    <S.UserWrap>
      <S.UserContainer>
        <ErrorBoundary fallback={<>내 정보를 갖고오지 못했습니다.</>}>
          <Suspense fallback={<NavSkeleton />}>
            <Nav pathName={pathname} />
          </Suspense>
        </ErrorBoundary>

        <S.UserListContainer>
          <S.Container>
            <S.Title>
              <S.FontSize fontSize="30px">
                {isReviewPage ? "내 리뷰 Story" : "롤링 Profile"}
              </S.FontSize>
              <S.Explain>
                {isReviewPage
                  ? "자신이 직접 롤링한 회사를 보여줘요"
                  : "기본 정보와 서비스에서 이용되는 프로필을 설정할 수 있어요"}
              </S.Explain>
            </S.Title>

            <ErrorBoundary
              fallback={<>리뷰한 회사의 수를 갖고오지 못했습니다.</>}
            >
              <Suspense fallback={<ReviewStatusSkeleton />}>
                <ReviewStatus />
              </Suspense>

              <Suspense fallback={<UserSkeleton />}>{children}</Suspense>
            </ErrorBoundary>
          </S.Container>
        </S.UserListContainer>
      </S.UserContainer>

      <NavFooter />
    </S.UserWrap>
  );
}
