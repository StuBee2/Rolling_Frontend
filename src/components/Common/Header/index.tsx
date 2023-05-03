import React from "react";
import * as S from "./header.style";
import { useNavigate } from "react-router-dom";
import { CATEGROY_ITEMS } from "../../../constants/Auth/Home.constant";
import LogoImg from "../../../assets/Logo.png";

export default function header() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigator = useNavigate();
  return (
    <S.header>
      <S.logo>
        <S.logoImg src={LogoImg} />
        <S.logoName>Rolling</S.logoName>
      </S.logo>
      <S.categoryBox>
        {CATEGROY_ITEMS.map((categories, idx) => {
          return (
            <S.categoryTitle key={idx}>
              <S.categoryLink
                onClick={() => navigator(`${categories.categoryPath}`)}
              >
                {categories.categoryName}
              </S.categoryLink>
            </S.categoryTitle>
          );
        })}
      </S.categoryBox>
    </S.header>
  );
}
