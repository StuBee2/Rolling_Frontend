import React, { useEffect } from "react";
import * as S from "./home.style";
import LogoImg from "./img/Logo.png";
import UserProfileImg from "./img/UserProfileImg.png";
import RankingImg from "./img/RankingImg.png";
import kakaoMap from "./KakaoMapScrip";
import { HiArrowUp } from "react-icons/hi";
import { AiFillExclamationCircle } from "react-icons/ai";

export default function Index() {
  useEffect(() => {
    kakaoMap();
  }, []);

  const categroy = {
    categoryName: ["Home", "Profile", "Review"],
    categoryPath: ["/", "/", "/"],
  };

  const userProfile = {
    userNikeName: "chldkduds2",
    userImgPath: UserProfileImg,
  };

  const companyLanking = {
    lanker: ["1. Google", "2. Naver", "3. Kakao"],
  };

  let pagePath: string = "";
  const categoryHandler = (categoryIndex: number) => {
    pagePath = categroy.categoryPath[categoryIndex];
  };

  const inquiryHandler = () => {
    alert("버그수정문의 ,팝업 구현 예정");
  };

  return (
    <S.body>
      <S.header>
        <S.logo>
          <S.logoImg src={LogoImg}></S.logoImg>
          <S.logoName>Rolling</S.logoName>
        </S.logo>
        <S.categoryBox>
          {categroy.categoryName.map(
            (categoryName: string, categoryIndex: number) => {
              return (
                <S.categoryTitle
                  key={categoryIndex}
                  onClick={() => {
                    categoryHandler(categoryIndex);
                  }}
                >
                  <S.categoryLink to={pagePath}>{categoryName}</S.categoryLink>
                </S.categoryTitle>
              );
            }
          )}
        </S.categoryBox>
      </S.header>
      <S.container>
        <S.ProfileContainer>
          <S.PrfilImg src={userProfile.userImgPath} alt="Error"></S.PrfilImg>
          <S.PrfilName>{userProfile.userNikeName}</S.PrfilName>
        </S.ProfileContainer>

        <S.rankingContainer>
          <S.rankingImg src={RankingImg} alt="Error"></S.rankingImg>
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
                <HiArrowUp />
              </S.chattingBtn>
            </S.chatting>
          </S.chattingBox>
        </S.mainContainer>
        <S.bottomItems>
          <AiFillExclamationCircle
            style={{
              width: "3.8vw",
              height: "3.8vh",
              color: "#AAAAAA",
              position: "relative",
              left: "95vw",
            }}
            onClick={inquiryHandler}
          />
        </S.bottomItems>
      </S.container>
    </S.body>
  );
}
