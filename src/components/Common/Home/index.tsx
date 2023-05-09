import React, { useEffect } from "react";
import * as S from "./home.style";
import UserProfileImg from "../../../assets/UserProfileImg.png";
import RankingImg from "../../../assets/RankingImg.png";
import kakaoMap from "./KakaoMapScrip";
import { useNavigate } from "react-router-dom";
import Token from "../../../libs/Token/Token";
import { ACCESS_KEY } from "../../../constants/Auth/auth.constant";

export default function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    kakaoMap();
  }, []);

  const userProfile = {
    userNikeName: "chldkduds2",
    userImgPath: UserProfileImg,
  };

  const companyLanking = {
    lanker: ["1. Google", "2. Naver", "3. Kakao"],
  };

  return (
    <S.body>
      <S.container>
        {Token.getToken(ACCESS_KEY) && (
          <S.ProfileContainer onClick={() => navigate("/mypage")}>
            <S.ProfilImg src={userProfile.userImgPath} alt="Error" />
            <S.ProfilName>{userProfile.userNikeName}</S.ProfilName>
          </S.ProfileContainer>
        )}
        <S.mainContainer>
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
          <div style={{ width: "100%" }}>
            <S.AiFillExclamationCircleIcon
              onClick={() => window.alert("버그수정문의 ,팝업 구현 예정")}
            />
          </div>
        </S.mainContainer>
      </S.container>
    </S.body>
  );
}
