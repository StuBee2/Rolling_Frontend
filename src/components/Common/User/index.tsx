import * as S from "./style";
import Nav from "./Common/Nav";
import useHideHeader from "../../../hooks/Common/useHideHeader";
import { ReactNode, Suspense, useState } from "react";
import UserHeader from "./Common/UserHeader";
import ErrorBoundary from "../ErrorBoundary";
import Profile from "./Profile";
import { MemberType } from "../../../types/member.type";
import useTokenCheck from "../../../hooks/Auth/useTokenCheck";

interface Props {
  page: number;
  children: ReactNode;
}

export default function User({ page, children }: Props) {
  const [myInfo, setMyInfo] = useState<MemberType | null>(null);
  useHideHeader();
  useTokenCheck();
  return (
    <S.UserWrap>
      <S.UserContainer>
        <Nav setMyInfo={setMyInfo} />
        {/* 1025px일 때 Nav컴포넌트는 사라지고 Header컴포넌트가 나온다. */}
        <UserHeader />
        <S.UserListContainer>
          {page === 0 ? (
            <Profile myInfo={myInfo!!} />
          ) : (
            <ErrorBoundary fallback={<>Error</>}>
              <Suspense fallback={<>로딩중 ...</>}>
                <>{children}</>
              </Suspense>
            </ErrorBoundary>
          )}
        </S.UserListContainer>
      </S.UserContainer>
    </S.UserWrap>
  );
}
