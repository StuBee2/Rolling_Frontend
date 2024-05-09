import * as S from "./style";
import developer from "@src/assets/icons/Home/developer.svg";
import RecommandItem from "./RecommandItem";
import ErrorBoundary from "@src/components/Common/ErrorBoundary";
import { Suspense } from "react";
import RecommandSkeleton from "@src/components/Common/Skeleton/Home/Recommand";
import { useNavigate } from "react-router-dom";
import { ViewAll } from "../style";
import { Row } from "@src/styles/flex";

const Recommand = () => {
  const navigate = useNavigate();

  return (
    <S.RecommandContainer>
      <Row $alignItems={"center"} $columnGap={"3px"}>
        <S.SeniorRecommand>
          <img src={developer} alt="이미지 없음" />
          <p>졸업생들이 추천해요!</p>
        </S.SeniorRecommand>

        <ViewAll onClick={() => navigate("/all")}>전체보기</ViewAll>
      </Row>

      <S.RecommandWrapper>
        <ErrorBoundary fallback={<>회사 정보를 가지고 오지 못했습니다.</>}>
          <Suspense fallback={<RecommandSkeleton />}>
            <RecommandItem />
          </Suspense>
        </ErrorBoundary>
      </S.RecommandWrapper>
    </S.RecommandContainer>
  );
};

export default Recommand;
