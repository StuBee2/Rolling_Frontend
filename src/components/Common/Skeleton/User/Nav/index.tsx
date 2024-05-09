import {
  PageSelectContainer,
  PageSelectWrapper,
  UserNavBar,
} from "@src/components/User/Nav/style";
import { SkeletonBox } from "../../Common/style";
import * as S from "./style";
import { Column } from "@src/styles/flex";

const NavSkeleton = () => {
  return (
    <UserNavBar>
      <Column
        $width={"100%"}
        $height={"300px"}
        $alignItems={"center"}
        $justifyContent={"center"}
        $rowGap={"2.5rem"}
      >
        <S.NavProfileLogoSkeleton />
        <Column $alignItems={"center"} $rowGap={"10px"}>
          <SkeletonBox width="100px" height="30px" />
          <SkeletonBox width="168px" height="20px" />
        </Column>
      </Column>
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
