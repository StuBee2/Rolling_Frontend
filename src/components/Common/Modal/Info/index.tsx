import { useSetRecoilState } from "recoil";
import * as S from "./style";
import { useCloseModal } from "../../../../hooks/Common/useCloseModal";
import { SimpleInfoModal } from "../../../../stores/common/common.store";
import { useLogout } from "../../../../hooks/Auth/useLogout";
import { useLogging } from "../../../../hooks/Log/useLogging";
import { LOG_ITEM } from "../../../../constants/Log/log.constants";
import { useGetMyInfoQuery } from "../../../../queries/Member/Member.query";

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
            <img src={myInfo?.socialDetails.imageUrl} alt="" />
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
              😊 내 프로필
            </div>
            <div
              onClick={() => {
                handleLogout();
                setSimpleInfo(false);
              }}
            >
              🫥 로그아웃
            </div>
          </S.MyPageLogout>
        </S.SimpleInfoModalContainer>
      </S.SimpleInfoParentBox>
    </S.SimpleInfoWrapper>
  );
}
