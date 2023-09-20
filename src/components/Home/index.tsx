import Token from "@src/libs/Token/Token";
import Category from "./Category";
import CmsRank from "./CmsRank";
import HomeList from "./HomeList";
import * as S from "./style";
import { ACCESS_TOKEN_KEY } from "@src/constants/Auth/auth.constant";
import UserInfo from "./UserInfo";

export default function Home() {
  return (
    <S.HomeContainer>
      <S.HomeWrapper>
        <CmsRank />
        <HomeList />
        {Token.getToken(ACCESS_TOKEN_KEY) && <UserInfo />}
      </S.HomeWrapper>
    </S.HomeContainer>
  );
}
