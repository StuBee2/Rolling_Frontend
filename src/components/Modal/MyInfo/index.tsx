import { useSetRecoilState } from "recoil";
import * as S from "./style";

import { MyInfoModal } from "@src/stores/common/common.store";
import { useLogout } from "@src/hooks/Auth/useLogout";
import { useGetMyInfoQuery } from "@src/queries/Member/Member.query";
import logout from "@src/assets/Auth/logout.svg";
import profile from "@src/assets/User/profile.svg";
import { useNavigate } from "react-router-dom";
import { useLogging } from "@src/hooks/Logging/useLogging";
import { useCloseModal } from "@stubee2/stubee2-rolling-util";

export default function MyInfo() {
  const setMyInfoModal = useSetRecoilState(MyInfoModal);
  const { handleLogout } = useLogout();
  const { data: myInfo } = useGetMyInfoQuery();
  const navigate = useNavigate();

  useCloseModal(setMyInfoModal);
  return (
    <S.InfoModalWrapper onClick={() => setMyInfoModal(false)}>
      <S.InfoModalParentBox>
        <S.InfoModalContainer onClick={(e) => e.stopPropagation()}>
          <S.Profile>
            <img src={myInfo?.socialDetails.imageUrl} alt="이미지 없음" />
            <div>
              <S.Name>
                {myInfo?.memberDetails.nickName || myInfo?.socialDetails.name}
              </S.Name>
              <S.EditProfile>롤링 프로필 수정하기</S.EditProfile>
            </div>
          </S.Profile>
          <S.MyPageLogout>
            <div
              onClick={async () => {
                setMyInfoModal(false);
                navigate("/mypage/profile");
              }}
            >
              <img src={profile} alt="이미지 없음" />
              <p>내 프로필</p>
            </div>
            <div onClick={handleLogout}>
              <img src={logout} alt="이미지 없음" />
              <p>로그아웃</p>
            </div>
          </S.MyPageLogout>
        </S.InfoModalContainer>
      </S.InfoModalParentBox>
    </S.InfoModalWrapper>
  );
}
