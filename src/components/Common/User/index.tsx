import * as S from "./style";
import useTokenCheck from "../../../hooks/Auth/useTokenCheck";
import Nav from "./Common/Nav";
import useShowHeader from "../../../hooks/User/useShowHeader";
import { ReactNode, Suspense } from "react";
import UserHeader from "./Common/UserHeader";
import ErrorBoundary from "../ErrorBoundary";

interface Props {
  children: ReactNode;
}

export default function User({ children }: Props) {
  useShowHeader();
  useTokenCheck();
  return (
    <S.UserWrap>
      <S.UserContainer>
        <Nav />
        {/* 1025px일 때 Nav컴포넌트는 사라지고 Header컴포넌트가 나온다. */}
        <UserHeader />
        <S.UserListContainer>
          <ErrorBoundary fallback={<>Error</>}>
            <Suspense fallback={<>로딩중 ...</>}>{children}</Suspense>
          </ErrorBoundary>
        </S.UserListContainer>
      </S.UserContainer>
    </S.UserWrap>
  );
}
