import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { USER_ITEMS } from "../../../../constants/User/user.constants";
import { Dispatch, SetStateAction } from "react";
import { useLogging } from "../../../../hooks/Log/useLogging";
import { LOG_ITEM } from "../../../../constants/Log/log.constants";
import { useLogout } from "../../../../hooks/Auth/useLogout";

interface Props {
  selectIdObject: {
    selectId: number;
    setSelectId: Dispatch<SetStateAction<number>>;
  };
}

export default function Nav({ selectIdObject }: Props) {
  const navigate = useNavigate();
  const { selectId, setSelectId } = selectIdObject;
  const { handleLoggingClick } = useLogging();
  const { handleLogout } = useLogout();

  return (
    <S.UserNavBar>
      <S.UserLogo onClick={() => navigate("/")}>Rolling</S.UserLogo>
      <S.UserAbleWrap>
        <S.UserProfileContainer>
          <S.UserImg />
          <S.UserName>박상현</S.UserName>
          <S.UserEmail>sanghyun9467@gmail.com</S.UserEmail>
        </S.UserProfileContainer>
        <S.CenterDiv>
          <S.UserAbleContainer isMiddle={true}>
            {USER_ITEMS.map((user) => (
              <S.UserCategory
                key={user.id}
                isSelect={user.id === selectId}
                onClick={() => setSelectId(user.id)}
              >
                {user.title}
              </S.UserCategory>
            ))}
          </S.UserAbleContainer>
        </S.CenterDiv>
        <S.CenterDiv>
          <S.UserAbleContainer>
            <div onClick={() => handleLoggingClick(LOG_ITEM[2])}>
              기업 등록하기
            </div>
            <div onClick={handleLogout}>로그아웃</div>
          </S.UserAbleContainer>
        </S.CenterDiv>
      </S.UserAbleWrap>
    </S.UserNavBar>
  );
}
