import { useSetRecoilState } from "recoil";
import * as S from "./style";
import { useCloseModal } from "@src/hooks/Common/useCloseModal";
import { MyInfoModal } from "@src/stores/common/common.store";
import { useLogout } from "@src/hooks/Auth/useLogout";
import { useLogging } from "@src/hooks/Log/useLogging";
import { LOG_ITEM } from "@src/constants/Log/log.constants";
import { useGetMyInfoQuery } from "@src/queries/Member/Member.query";
import logout from "@src/assets/Auth/logout.svg";
import profile from "@src/assets/User/profile.svg";

export default function Info() {
  const setMyInfoModal = useSetRecoilState(MyInfoModal);
  const { handleLogout } = useLogout();
  const { handleLoggingClick } = useLogging();
  const { data: myInfo } = useGetMyInfoQuery();

  useCloseModal(setMyInfoModal);
  return (
    <S.InfoModalWrapper onClick={() => setMyInfoModal(false)}>
      <S.InfoModalParentBox>
        <S.InfoModalContainer onClick={(e) => e.stopPropagation()}>
          <S.Profile>
            <img src={myInfo?.socialDetails.imageUrl} alt="이미지 없음" />
            <div>
              <S.Name>{myInfo?.socialDetails.name}</S.Name>
              <S.EditProfile>롤링 프로필 수정하기</S.EditProfile>
            </div>
          </S.Profile>
          <S.MyPageLogout>
            <div
              onClick={async () => {
                await setMyInfoModal(false);
                handleLoggingClick(LOG_ITEM[1]);
              }}
            >
              <img src={profile} alt="이미지 없음" />
              <p>내 프로필</p>
            </div>
            <div
              onClick={() => {
                handleLogout();
                setMyInfoModal(false);
              }}
            >
              <img src={logout} alt="이미지 없음" />
              <p>로그아웃</p>
            </div>
          </S.MyPageLogout>
        </S.InfoModalContainer>
      </S.InfoModalParentBox>
    </S.InfoModalWrapper>
  );
}
