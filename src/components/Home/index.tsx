import Category from "./Category";
import CmsRank from "./CmsRank";
import HomeList from "./HomeList";
import * as S from "./style";

export default function Home() {
  return (
    <S.HomeContainer>
      <S.HomeWrapper>
        <Category />
        <HomeList />
        <CmsRank />
      </S.HomeWrapper>
    </S.HomeContainer>
  );
}
