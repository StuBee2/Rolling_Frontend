import {
  MainItemContainer,
  MainItemWrapper,
  MainItemContent,
} from "@src/components/Home/Main/style";
import { SkeletonBox } from "../../Common/style";
import * as S from "./style";

const MainSkeleton = () => {
  return (
    <MainItemContainer>
      <SkeletonBox width="200px" height="30px" />
      <MainItemWrapper>
        <MainItemContent>
          {Array.from({ length: 9 }).map((_, idx) => (
            <S.MainItemSkeletonBox key={idx} />
          ))}
        </MainItemContent>
      </MainItemWrapper>
    </MainItemContainer>
  );
};

export default MainSkeleton;
