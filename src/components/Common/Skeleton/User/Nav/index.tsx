import {
  PageSelectContainer,
  PageSelectWrapper,
  UserNavBar,
} from "@src/components/User/Nav/style";
import { SkeletonBox } from "../../Common/style";
import * as S from "./style";

const NavSkeleton = () => {
  return (
    <UserNavBar>
      <S.UserInfoContainer>
        <S.NavProfileLogoSkeleton />
        <S.UserNameAndEmailContainer>
          <SkeletonBox width="100px" height="30px" />
          <SkeletonBox width="168px" height="20px" />
        </S.UserNameAndEmailContainer>
      </S.UserInfoContainer>
      <PageSelectContainer>
        <PageSelectWrapper>
          {Array.from({ length: 2 }).map((item, idx) => (
            <SkeletonBox key={idx} width="420px" height="60px" />
          ))}
        </PageSelectWrapper>
        <SkeletonBox width="420px" height="60px" />
      </PageSelectContainer>
    </UserNavBar>
  );
};

export default NavSkeleton;
