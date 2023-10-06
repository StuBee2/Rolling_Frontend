import Token from "@src/libs/Token/Token";
import HomeList from "./HomeList";
import * as S from "./style";
import { ACCESS_TOKEN_KEY } from "@src/constants/Auth/auth.constant";
import Rank from "./Rank";
import Nav from "./Nav";

export default function Home() {
  return (
    <S.HomeContainer>
      <S.HomeWrapper>
        <Rank />
        <HomeList />
        {Token.getToken(ACCESS_TOKEN_KEY) && <Nav />}
      </S.HomeWrapper>
    </S.HomeContainer>
  );
}
