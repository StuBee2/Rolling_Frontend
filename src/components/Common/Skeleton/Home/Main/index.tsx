import {
  MainItemContainer,
  MainItemWrapper,
  MainItemContent,
} from "@src/components/Home/Main/style";
import * as S from "./style";

export default function MainSkeleton() {
  return (
    <MainItemContainer>
      <MainItemWrapper>
        <MainItemContent>
          {Array.from({ length: 9 }).map((_, idx) => (
            <S.MainItemSkeletonBox key={idx} />
          ))}
        </MainItemContent>
      </MainItemWrapper>
    </MainItemContainer>
  );
}
