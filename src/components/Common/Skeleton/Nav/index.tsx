import {
  MemberInfoContainer,
  PageSelect,
  PageSelectContainer,
  UserNavBar,
} from "../../../User/Nav/style";
import { SkeletonBox } from "../Common/style";
import * as S from "./style";

export default function NavSkeleton() {
  return (
    <UserNavBar>
      <MemberInfoContainer>
        <S.NavProfileLogoSkeleton />
        <SkeletonBox width="70px" height="27px" />
        <SkeletonBox width="100px" height="17px" />
        <SkeletonBox width="168px" height="15px" />
      </MemberInfoContainer>
      <PageSelectContainer>
        <PageSelect>
          {Array.from({ length: 3 }).map((item, idx) => (
            <SkeletonBox key={idx} width="420px" height="60px" />
          ))}
        </PageSelect>
        <SkeletonBox width="420px" height="60px" />
      </PageSelectContainer>
    </UserNavBar>
  );
}
