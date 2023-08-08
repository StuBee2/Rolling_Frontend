import * as S from "./style";
import Nav from "./Nav";
import { ReactNode, Suspense } from "react";
import ErrorBoundary from "../Common/ErrorBoundary";
import useTokenCheck from "../../hooks/Auth/useTokenCheck";
import UserBottom from "./Nav/NavBottom";
import UserSkeleton from "../Common/Skeleton/User";
import NavSkeleton from "../Common/Skeleton/Nav";

interface Props {
  children: ReactNode;
}

export default function User({ children }: Props) {
  useTokenCheck();
  return (
    <S.UserWrap>
      <S.UserContainer>
        <ErrorBoundary fallback={<>Error</>}>
          <Suspense fallback={<NavSkeleton />}>
            <Nav />
          </Suspense>
        </ErrorBoundary>

        <S.UserListContainer>
          <ErrorBoundary fallback={<>Error</>}>
            <Suspense fallback={<UserSkeleton />}>{children}</Suspense>
          </ErrorBoundary>
        </S.UserListContainer>
        {/* 1040px일 때 Nav컴포넌트는 사라지고 Header컴포넌트가 나온다. */}
        <UserBottom />
      </S.UserContainer>
    </S.UserWrap>
  );
}
