import { useSetRecoilState } from "recoil";
import * as S from "./style";
import { MyInfoModal } from "@src/stores/common/common.store";
import { useLogout } from "@src/hooks/Auth/useLogout";
import { useGetMyInfoQuery } from "@src/queries/Member/Member.query";
import emptyFace from "@src/assets/icons/Home/emptyFace.png";
import smileFace from "@src/assets/icons/Home/smileFace.png";
import { useNavigate } from "react-router-dom";
import { useCloseModal } from "@stubee2/stubee2-rolling-util";
import github from "@src/assets/images/Auth/github.svg";
import { convertToGithubLink } from "@src/utils/github/convertToGithubLink";
import { turnOffModal } from "@src/utils/Modal/turnOnOffModal";

export default function MyInfo() {
  const setMyInfoModal = useSetRecoilState(MyInfoModal);
  const { handleLogout } = useLogout();
  const { data: myInfo } = useGetMyInfoQuery();
  const navigate = useNavigate();

  useCloseModal(setMyInfoModal);
  return (
    <S.Container onClick={() => turnOffModal(setMyInfoModal)}>
      <S.Wrapper>
        <S.MyInfoBox onClick={(e) => e.stopPropagation()}>
          <S.ProfileContainer>
            <img src={myInfo?.socialDetails.imageUrl} alt="이미지 없음" />
            <S.Profile>
              <S.Name>
                {myInfo?.memberDetails.nickName || myInfo?.socialDetails.name}
              </S.Name>
              <S.GitInfo
                onClick={() =>
                  window.open(
                    convertToGithubLink(myInfo?.socialDetails.socialLoginId!!),
                    "_blank"
                  )
                }
              >
                <img src={github} alt="이미지 없음" />
                <p>{myInfo?.socialDetails.socialLoginId}</p>
              </S.GitInfo>
            </S.Profile>
          </S.ProfileContainer>

          <S.MyPageLogout>
            <div
              onClick={() => {
                setMyInfoModal(false);
                navigate("/mypage/profile");
                document.body.style.overflow = "unset";
              }}
            >
              <img src={smileFace} alt="이미지 없음" />
              <p>내 프로필</p>
            </div>
            <div onClick={handleLogout}>
              <img src={emptyFace} alt="이미지 없음" />
              <p>로그아웃</p>
            </div>
          </S.MyPageLogout>
        </S.MyInfoBox>
      </S.Wrapper>
    </S.Container>
  );
}
