import * as S from "./style";
import rank from "../../../../assets/Home/rank.svg";
import smile from "../../../../assets/User/smile.svg";
import { CompanyContainer, Title } from "../style";
import { HOME_COMPANY_RANK_ITMES } from "../../../../constants/Home/Home.constants";
import { useState } from "react";
import RankItem from "./RankItem";

export default function Rank() {
  const [select, setSelect] = useState("총합순위");
  return (
    <CompanyContainer gap="30px">
      <Title>
        <img src={rank} alt="이미지 없음" />
        <p>
          <span>BEST </span>
          기업랭킹
        </p>
      </Title>
      <S.RankWrapper>
        <S.RankListTextContainer>
          {HOME_COMPANY_RANK_ITMES.map((item) => (
            <S.RankListText
              key={item.id}
              onClick={() => setSelect(item.name!!)}
              isselect={select === item.name}
            >
              {item.name}
            </S.RankListText>
          ))}
        </S.RankListTextContainer>

        <S.RankListItemWrapper>
          <S.Introduce>
            <img src={smile} alt="이미지 없음" />
            <p>우리들은 직원복지를 최우선으로 합니다.</p>
          </S.Introduce>
          <S.RankListItemContainer>
            {Array.from({ length: 15 }).map((item, idx) => (
              <RankItem key={idx} ranking={idx + 1} />
            ))}
            <S.More>+ 더보기</S.More>
          </S.RankListItemContainer>
        </S.RankListItemWrapper>
      </S.RankWrapper>
    </CompanyContainer>
  );
}
