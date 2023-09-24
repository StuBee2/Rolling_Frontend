import { useSetRecoilState } from "recoil";
import * as S from "./style";
import { MyInfoModal } from "@src/stores/common/common.store";
import { useLogout } from "@src/hooks/Auth/useLogout";
import { useGetMyInfoQuery } from "@src/queries/Member/Member.query";
import logout from "@src/assets/Auth/logout.svg";
import profile from "@src/assets/User/profile.svg";
import { useNavigate } from "react-router-dom";
import { useCloseModal } from "@stubee2/stubee2-rolling-util";
import github from "@src/assets/Auth/github.svg";
import { converToGithubLink } from "@src/utils/Github/converToGithubLink";

export default function MyInfo() {
  const setMyInfoModal = useSetRecoilState(MyInfoModal);
  const { handleLogout } = useLogout();
  const { data: myInfo } = useGetMyInfoQuery();
  const navigate = useNavigate();

  useCloseModal(setMyInfoModal);
  return (
    <S.InfoModalWrapper
      onClick={() => {
        setMyInfoModal(false);
        document.body.style.overflow = "unset";
      }}
    >
      <S.InfoModalParentBox>
        <S.InfoModalContainer onClick={(e) => e.stopPropagation()}>
          <S.ProfileContainer>
            <img src={myInfo?.socialDetails.imageUrl} alt="이미지 없음" />
            <S.Profile>
              <S.Name>
                {myInfo?.memberDetails.nickName || myInfo?.socialDetails.name}
              </S.Name>
              <S.GitInfo
                onClick={() =>
                  window.open(
                    converToGithubLink(myInfo?.socialDetails.socialLoginId!!),
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
