import { UserCategory, UserLogo } from "../Nav/style";
import * as S from "./style";
import { USER_ITEMS } from "../../../../../constants/User/user.constants";
import { useLocation, useNavigate } from "react-router-dom";

export default function UserHeader() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <S.UserHeader>
      <UserLogo onClick={() => navigate("/")}>Rolling</UserLogo>
      <S.UserListWrap>
        {USER_ITEMS.map((user) => (
          <UserCategory
            key={user.id}
            isSelect={user.link === pathname}
            onClick={() => navigate(user.link)}
          >
            {user.title}
          </UserCategory>
        ))}
      </S.UserListWrap>
    </S.UserHeader>
  );
}
