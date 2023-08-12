import * as S from "./style";
import { USER_ITEMS } from "@src/constants/User/user.constants";
import { useLocation, useNavigate } from "react-router-dom";

export default function UserBottom() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <S.UserFooter>
      <S.UserListWrap>
        {USER_ITEMS.map((user) => (
          <S.UserCategory
            key={user.id}
            isSelect={user.link === pathname}
            onClick={() => navigate(user.link)}
          >
            {user.title}
          </S.UserCategory>
        ))}
      </S.UserListWrap>
    </S.UserFooter>
  );
}
