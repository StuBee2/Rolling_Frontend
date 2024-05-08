import * as S from "./style";
import { USER_ITEMS } from "@src/constants/User/user.constants";
import { useLocation, useNavigate } from "react-router-dom";

const NavFooter = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <S.NavFooterContainer>
      <S.NavFooterWrapper>
        {USER_ITEMS.map((user) => (
          <S.NavFooterCategoryItem
            key={user.id}
            isSelect={user.link === pathname}
            onClick={() => navigate(user.link)}
          >
            {user.title}
          </S.NavFooterCategoryItem>
        ))}
      </S.NavFooterWrapper>
    </S.NavFooterContainer>
  );
};

export default NavFooter;
