import React from "react";
import * as S from "./header.style";
import { useNavigate } from "react-router-dom";
import { CATEGORY_ITEMS } from "../../../constants/Home/Home.constants";
import LogoImg from "../../../assets/Logo.png";
import Token from "../../../libs/Token/Token";
import { ACCESS_TOKEN_KEY } from "../../../constants/Auth/auth.constant";
import { useLogging } from "../../../hooks/Log/useLogging";
import { LOG_ITEM } from "../../../constants/Log/log.constants";

export default function Header() {
  const navigate = useNavigate();
  const { handleLoggingClick } = useLogging();

  const handleCategoryClick = (categoryId: number) => {
    if (categoryId === 4) {
      Token.clearToken();
      navigate("/");
    } else {
      handleLoggingClick(LOG_ITEM[categoryId]);
    }
  };

  return (
    <S.Header>
      <S.Logo onClick={() => navigate("/")}>
        <img src={LogoImg} alt="" />
        <div>Rolling</div>
      </S.Logo>

      <div>
        {CATEGORY_ITEMS.map((category) => (
          <div key={category.id}>
            {Token.getToken(ACCESS_TOKEN_KEY)
              ? category.id !== 0 && (
                  <S.CategoryLink
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    {category.categoryName}
                  </S.CategoryLink>
                )
              : category.id === 0 && (
                  <S.CategoryLink onClick={() => navigate("/login")}>
                    {category.categoryName}
                  </S.CategoryLink>
                )}
          </div>
        ))}
      </div>
    </S.Header>
  );
}
