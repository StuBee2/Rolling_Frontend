import React, { useEffect } from "react";
import * as S from "./home.style";
import UserProfileImg from "../../../assets/UserProfileImg.png";
import RankingImg from "../../../assets/RankingImg.png";
import kakaoMap from "./KakaoMapScrip";
import Header from "../Header/index";

export default function Index() {
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

  const inquiryHandler = () => {
    alert("버그수정문의 ,팝업 구현 예정");
  };

  return (
    <S.body>
      <Header />
      <S.container>
        <S.ProfileContainer>
          <S.ProfilImg src={userProfile.userImgPath} alt="Error" />
          <S.ProfilName>{userProfile.userNikeName}</S.ProfilName>
        </S.ProfileContainer>

        <S.rankingContainer>
          <S.rankingImg src={RankingImg} alt="Error" />
          <S.rankerName>{companyLanking.lanker[0]}</S.rankerName>
        </S.rankingContainer>
        <S.mainContainer>
          <S.mapBox
            id="myMap"
            style={{
              width: "50vw",
              height: "65vh",
            }}
          ></S.mapBox>
          <S.chattingBox>
            <S.chatting>
              <S.chattingInp placeholder="질문이 있으신가요?"></S.chattingInp>
              <S.chattingBtn>
                <S.HiArrowUpIcon />
              </S.chattingBtn>
            </S.chatting>
          </S.chattingBox>
        </S.mainContainer>
        <S.bottomItems>
          <S.AiFillExclamationCircleIcon onClick={inquiryHandler} />
        </S.bottomItems>
      </S.container>
    </S.body>
  );
}
