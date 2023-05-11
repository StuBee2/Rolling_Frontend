import React, { useEffect } from "react";
import * as S from "./home.style";
import RankingImg from "../../../assets/RankingImg.png";
import kakaoMap from "./KakaoMapScrip";
import Token from "../../../libs/Token/Token";
import { ACCESS_KEY } from "../../../constants/Auth/auth.constant";
import { useLogging } from "../../../hooks/Log/useLogging";
import { LOG_ITEM } from "../../../constants/Log/log.constants";

export default function Home() {
  const { handleLoggingClick } = useLogging();

  useEffect(() => {
    kakaoMap();
  }, []);

  const companyLanking = {
    lanker: ["1. Google", "2. Naver", "3. Kakao"],
  };

  return (
    <S.body>
      <S.container>
        {Token.getToken(ACCESS_KEY) && (
          <S.ProfileContainer onClick={() => handleLoggingClick(LOG_ITEM[1])}>
            <S.ProfilImg src={""} alt="Error" />
            <S.ProfilName>{}</S.ProfilName>
          </S.ProfileContainer>
        )}
        <S.mainContainer isToken={Token.getToken(ACCESS_KEY) !== null}>
          <div style={{ width: "100%" }}>
            <S.rankingContainer>
              <S.rankingImg src={RankingImg} alt="Error" />
              <S.rankerName>{companyLanking.lanker[0]}</S.rankerName>
            </S.rankingContainer>
          </div>
          <div style={{ display: "flex" }}>
            <S.mapBox id="myMap" />
            <S.chattingContainer>
              <S.chetting></S.chetting>
              <S.chettingInputContainer>
                <input placeholder="질문이 있으신가요?" />
                <div>
                  <S.HiArrowUpIcon />
                </div>
              </S.chettingInputContainer>
            </S.chattingContainer>
          </div>
        </S.mainContainer>
        <S.AiFillExclamationCircleIcon
          onClick={() => window.alert("버그수정문의 ,팝업 구현 예정")}
        />
      </S.container>
    </S.body>
  );
}
