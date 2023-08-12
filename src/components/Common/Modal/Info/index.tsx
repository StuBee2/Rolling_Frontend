import { useSetRecoilState } from "recoil";
import * as S from "./style";
import { useCloseModal } from "@src/hooks/Common/useCloseModal";
import { SimpleInfoModal } from "@src/stores/common/common.store";
import { useLogout } from "@src/hooks/Auth/useLogout";
import { useLogging } from "@src/hooks/Log/useLogging";
import { LOG_ITEM } from "@src/constants/Log/log.constants";
import { useGetMyInfoQuery } from "@src/queries/Member/Member.query";
import logout from "@src/assets/Auth/logout.svg";
import profile from "@src/assets/User/profile.svg";

export default function Info() {
  const setSimpleInfo = useSetRecoilState(SimpleInfoModal);
  const { handleLogout } = useLogout();
  const { handleLoggingClick } = useLogging();
  const { data: myInfo } = useGetMyInfoQuery();

  useCloseModal(setSimpleInfo);
  return (
    <S.SimpleInfoWrapper onClick={() => setSimpleInfo(false)}>
      <S.SimpleInfoParentBox>
        <S.SimpleInfoModalContainer onClick={(e) => e.stopPropagation()}>
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
                await setSimpleInfo(false);
                handleLoggingClick(LOG_ITEM[1]);
              }}
            >
              <img src={profile} alt="이미지 없음" />
              <p>내 프로필</p>
            </div>
            <div
              onClick={() => {
                handleLogout();
                setSimpleInfo(false);
              }}
            >
              <img src={logout} alt="이미지 없음" />
              <p>로그아웃</p>
            </div>
          </S.MyPageLogout>
        </S.SimpleInfoModalContainer>
      </S.SimpleInfoParentBox>
    </S.SimpleInfoWrapper>
  );
}
