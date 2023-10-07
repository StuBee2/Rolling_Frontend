import HomeList from "./HomeList";
import * as S from "./style";
import Rank from "./Rank";
import Nav from "./Nav";

export default function Home() {
  return (
    <S.HomeContainer>
      <S.HomeWrapper>
        <Rank />
        <HomeList />
        <Nav />
      </S.HomeWrapper>
    </S.HomeContainer>
  );
}
