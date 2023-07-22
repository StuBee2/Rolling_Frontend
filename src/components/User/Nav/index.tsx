import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./style";
import { USER_ITEMS } from "../../../constants/User/user.constants";
import { useLogout } from "../../../hooks/Auth/useLogout";
import { useRecoilValue } from "recoil";
// import { MyInfoContainer } from "../Profile/MyInfo/style";
import { MyMemberInfo } from "../../../stores/member/member.store";
// import { MyMemberInfo } from "../../../store/member/member.store";
import { useEditNickName } from "../../../hooks/Common/useEditNickName";

export default function Nav() {
  const navigate = useNavigate();
  const { handleLogout } = useLogout();
  const { pathname } = useLocation();
  const myMemberInfo = useRecoilValue(MyMemberInfo);
  const {
    handleEditNickNameQuestion,
    handleEditNickNameChange,
    handleNickNameSubmit,
    hanldeEditNickNameCancel,
    isEditNickName,
    editNickName,
  } = useEditNickName(myMemberInfo?.memberDetails.nickName!!);

  return (
    <S.UserNavBar>
      <S.MemberInfoContainer>
        <S.UserImg src={myMemberInfo?.socialDetails.imageUrl} />
        <S.UserName>{myMemberInfo?.socialDetails.name}</S.UserName>
        <S.UserNickName>
          {isEditNickName ? (
            <form onSubmit={handleNickNameSubmit}>
              <input
                type="text"
                value={editNickName || ""}
                onChange={handleEditNickNameChange}
                placeholder="닉네임을 입력하세요."
              />
              <S.EditAndCancelContainer>
                <button type="submit">수정</button>
                <button onClick={hanldeEditNickNameCancel}>취소</button>
              </S.EditAndCancelContainer>
            </form>
          ) : (
            <div onClick={handleEditNickNameQuestion}>
              {myMemberInfo?.memberDetails.nickName
                ? myMemberInfo?.memberDetails.nickName
                : "닉네임 추가하기"}
            </div>
          )}
        </S.UserNickName>
        <S.UserEmail>{myMemberInfo?.socialDetails.email}</S.UserEmail>
      </S.MemberInfoContainer>
      <S.PageSelectContainer>
        <S.PageSelect>
          {USER_ITEMS.map((item) => (
            <S.PageSelectItem
              key={item.id}
              onClick={() => navigate(item.link)}
              isSelect={pathname === item.link}
            >
              <img src={item.image} alt="이미지 없음" />
              <p>{item.title}</p>
            </S.PageSelectItem>
          ))}
        </S.PageSelect>
        <S.Logout onClick={handleLogout}>🫥 로그아웃</S.Logout>
      </S.PageSelectContainer>
    </S.UserNavBar>
  );
}
