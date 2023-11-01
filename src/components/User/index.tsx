import * as S from "./style";
import Nav from "./Nav";
import { ReactNode, Suspense } from "react";
import ErrorBoundary from "../Common/ErrorBoundary";
import useTokenCheck from "@src/hooks/Auth/useTokenCheck";
import NavFooter from "./Nav/NavFooter";
import UserSkeleton from "../Common/Skeleton/User";
import NavSkeleton from "../Common/Skeleton/User/Nav";
import { useLocation } from "react-router";
import StoryStatus from "./StoryStatus";
import StoryStatusSkeleton from "../Common/Skeleton/User/StoryStatus";
import { useRecoilState } from "recoil";
import { StoryModifiablePageAtom } from "@src/stores/story/story.store";

interface Props {
  children: ReactNode;
}

export default function User({ children }: Props) {
  useTokenCheck();
  const { pathname } = useLocation();
  const isStoryPage = pathname === "/mypage/story";

  const [currentPage, setCurrentPage] = useRecoilState(StoryModifiablePageAtom);
  setCurrentPage(false);

  return (
    <S.UserContainer>
      <S.UserWrapper>
        <ErrorBoundary fallback={<>내 정보 갖고오지 못했습니다.</>}>
          <Suspense fallback={<NavSkeleton />}>
            <Nav pathName={pathname} />
          </Suspense>
        </ErrorBoundary>

        <S.UserListContainer page={isStoryPage}>
          <S.Container>
            <S.Title>
              <S.FontSize fontSize="30px">
                {isStoryPage ? "내 롤링 Story" : "롤링 Profile"}
              </S.FontSize>
              <S.Explain>
                {isStoryPage
                  ? "자신이 직접 롤링한 회사를 보여줘요"
                  : "기본 정보와 서비스에서 이용되는 프로필을 설정할 수 있어요"}
              </S.Explain>
            </S.Title>

            <ErrorBoundary
              fallback={<>롤링한 회사의 수를 갖고오지 못했습니다.</>}
            >
              <Suspense fallback={<StoryStatusSkeleton />}>
                <StoryStatus />
              </Suspense>

              <Suspense fallback={<UserSkeleton />}>{children}</Suspense>
            </ErrorBoundary>
          </S.Container>
        </S.UserListContainer>
      </S.UserWrapper>

      <NavFooter />
    </S.UserContainer>
  );
}
