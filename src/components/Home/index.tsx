import * as S from "./style";
import recommand from "../../assets/Home/recommand.svg";
import Nav from "./Nav";
import Cms from "./Company/Cms";
import Rank from "./Company/Rank";
import HomeItem from "./HomeItem";

export default function Home() {
  return (
    <S.HomeContainer>
      <S.HomeWrapper>
        <S.NavAndHomeItemContainer>
          <Nav />
          <S.HomeItemContainer>
            <S.HomeItemWrapper>
              <S.Title>
                <img src={recommand} alt="이미지 없음" />
                <p>선배들이 추천해요!</p>
              </S.Title>
              <S.HomeItemBox>
                {Array.from({ length: 21 }).map((item, idx) => (
                  <HomeItem key={idx} />
                ))}
              </S.HomeItemBox>
            </S.HomeItemWrapper>
          </S.HomeItemContainer>
        </S.NavAndHomeItemContainer>

        <S.CmsContainer>
          <Cms />
          <Rank />
        </S.CmsContainer>
      </S.HomeWrapper>
    </S.HomeContainer>
  );
}
