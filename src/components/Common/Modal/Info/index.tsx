import { useRecoilValue, useSetRecoilState } from "recoil";
import * as S from "./style";
import { useCloseModal } from "../../../../hooks/Common/useCloseModal";
import { SimpleInfoModal } from "../../../../stores/common/common.store";
import { ModalWrap } from "../style";
import { useLogout } from "../../../../hooks/Auth/useLogout";
import { useLogging } from "../../../../hooks/Log/useLogging";
import { LOG_ITEM } from "../../../../constants/Log/log.constants";
import { MyMemberInfo } from "../../../../stores/member/member.store";

export default function Info() {
  const setSimpleInfo = useSetRecoilState(SimpleInfoModal);
  const myMemberInfo = useRecoilValue(MyMemberInfo);
  const { handleLogout } = useLogout();
  const { handleLoggingClick } = useLogging();

  useCloseModal(setSimpleInfo);
  return (
    <ModalWrap onClick={() => setSimpleInfo(false)}>
      <S.SimpleInfoContainer onClick={(e) => e.stopPropagation()}>
        <S.Profile>
          <img src={myMemberInfo?.socialDetails.imageUrl} alt="" />
          <div>
            <S.Name>{myMemberInfo?.socialDetails.name}</S.Name>
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
      </S.SimpleInfoContainer>
    </ModalWrap>
  );
}
