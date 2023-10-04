import { UserInfoContainer } from "@src/components/Home/UserInfo/style";
import {
  PageSelectContainer,
  PageSelectWrapper,
  UserNavBar,
} from "@src/components/User/Nav/style";
import { SkeletonBox } from "../Common/style";
import * as S from "./style";

export default function NavSkeleton() {
  return (
    <UserNavBar>
      <UserInfoContainer>
        <S.NavProfileLogoSkeleton />
        <SkeletonBox width="70px" height="27px" />
        <SkeletonBox width="100px" height="17px" />
        <SkeletonBox width="168px" height="15px" />
      </UserInfoContainer>
      <PageSelectContainer>
        <PageSelectWrapper>
          {Array.from({ length: 3 }).map((item, idx) => (
            <SkeletonBox key={idx} width="420px" height="60px" />
          ))}
        </PageSelectWrapper>
        <SkeletonBox width="420px" height="60px" />
      </PageSelectContainer>
    </UserNavBar>
  );
}
