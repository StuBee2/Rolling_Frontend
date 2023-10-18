import {
  MainItemContainer,
  MainItemListContainer,
  MainItemWrapper,
} from "@src/components/Home/Main/style";
import * as S from "./style";

export default function MainSkeleton() {
  return (
    <MainItemContainer>
      <MainItemListContainer>
        <MainItemWrapper>
          {Array.from({ length: 9 }).map((_, idx) => (
            <S.MainItemSkeletonBox key={idx} />
          ))}
        </MainItemWrapper>
      </MainItemListContainer>
    </MainItemContainer>
  );
}
