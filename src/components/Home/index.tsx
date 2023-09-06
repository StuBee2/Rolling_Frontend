import Category from "./Category";
import CmsRank from "./CmsRank";
import HomeList from "./HomeList";
import * as S from "./style";
import { Button } from "@stubee2/stubee2-rolling-ui";

export default function Home() {
  return (
    <S.HomeContainer>
      <S.HomeWrapper>
        <Category />
        <HomeList />
        <CmsRank />
        <Button
          children="리뷰등록"
          ButtonType="review"
          customStyle={{ color: "black" }}
        />
      </S.HomeWrapper>
    </S.HomeContainer>
  );
}
