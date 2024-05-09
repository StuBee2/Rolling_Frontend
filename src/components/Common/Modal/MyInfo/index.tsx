import { useSetRecoilState } from "recoil";
import * as S from "./style";
import { MyInfoModal } from "@src/stores/common/common.store";
import { useLogout } from "@src/hooks/Auth/useLogout";
import emptyFace from "@src/assets/icons/Home/emptyFace.svg";
import smileFace from "@src/assets/icons/Home/smileFace.svg";
import { useNavigate } from "react-router-dom";
import { useEscCloseModal } from "@stubee2/stubee2-rolling-util";
import github from "@src/assets/images/Auth/github.svg";
import { convertToGithubLink } from "@src/utils/github/convertToGithubLink";
import { turnOnOffModal } from "@src/utils/Modal/turnOnOffModal";
import { useGetMyInfoQuery } from "@src/services/Member/queries";
import { Column } from "@src/styles/flex";

const MyInfo = () => {
  const setMyInfoModal = useSetRecoilState(MyInfoModal);
  const { handleLogout } = useLogout();
  const { data: myInfo } = useGetMyInfoQuery({ suspense: true });
  const navigate = useNavigate();

  useEscCloseModal(setMyInfoModal);
  return (
    <S.Container onClick={() => turnOnOffModal(setMyInfoModal, "off")}>
      <S.Wrapper>
        <S.MyInfoBox onClick={(e) => e.stopPropagation()}>
          <S.ProfileContainer>
            <img src={myInfo?.details.imageUrl} alt="이미지 없음" />
            <Column $rowGap={"8px"}>
              <S.Name>
                {myInfo?.details.nickName || myInfo?.details.name}
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
            </Column>
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
};

export default MyInfo;
