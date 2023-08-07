import * as S from "./style";
import rank from "../../../../assets/Home/rank.svg";
import smile from "../../../../assets/User/smile.svg";
import { CompanyContainer, Title } from "../style";
import { HOME_COMPANY_RANK_ITMES } from "../../../../constants/Home/Home.constants";
import { Suspense, useState } from "react";
import RankItem from "./RankItem";
import ErrorBoundary from "../../../Common/ErrorBoundary";
import { getCompanyRankIntroduce } from "../../../../util/getCompanyRankIntroduce";
import RankSkeleton from "../../../Common/Skeleton/Rank";

export default function Rank() {
  const [rankCategorySelect, setRankCategorySelect] = useState("total");

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
              onClick={() => setRankCategorySelect(item.categoryName!!)}
              isselect={rankCategorySelect === item.categoryName}
            >
              {item.name}
            </S.RankListText>
          ))}
        </S.RankListTextContainer>
        <S.RankListItemWrapper>
          <S.RankListItemContainer>
            <S.Introduce>
              <img src={smile} alt="이미지 없음" />
              <p>{getCompanyRankIntroduce(rankCategorySelect)}</p>
            </S.Introduce>
            <ErrorBoundary fallback={<>Error</>}>
              <Suspense fallback={<RankSkeleton />}>
                <RankItem rankCategory={rankCategorySelect} />
              </Suspense>
            </ErrorBoundary>
            <S.More>+ 더보기</S.More>
          </S.RankListItemContainer>
        </S.RankListItemWrapper>
      </S.RankWrapper>
    </CompanyContainer>
  );
}
