import ErrorBoundary from "@src/components/Common/ErrorBoundary";
import * as S from "./style";
import wonderFace from "@src/assets/icons/Home/wonderFace.svg";
import { Suspense } from "react";
import { stringEllipsis } from "@stubee2/stubee2-rolling-util";
import { useNavigate } from "react-router-dom";
import UserInfoSkeleton from "@src/components/Common/Skeleton/Home/UserInfo";
import { tokenDecode } from "@src/utils/Auth/tokenDecode";
import { useGetMyInfoQuery } from "@src/services/Member/queries";

export default function UserInfo() {
  return (
    <S.UserInfoWrapper>
      <ErrorBoundary fallback={<>내 정보를 갖고오지 못했습니다.</>}>
        <Suspense fallback={<UserInfoSkeleton />}>
          <UserInfoItem />
        </Suspense>
      </ErrorBoundary>
    </S.UserInfoWrapper>
  );
}

function UserInfoItem() {
  const navigate = useNavigate();
  const { data: myInfo } = useGetMyInfoQuery();
  const isNickName = !myInfo?.details.nickName;
  const isMember = tokenDecode("access", "authority") === "MEMBER";

  return (
    <>
      <S.UserInfoBox>
        <img src={myInfo?.details.imageUrl || ""} alt="이미지 없음" />
        <div onClick={() => navigate("/mypage/profile")}>
          <S.UserInfoNickName>
            {isNickName ? (
              <>
                닉네임을 설정해주세요 <span>*</span>
              </>
            ) : (
              myInfo?.details.nickName
            )}
          </S.UserInfoNickName>
          <S.UserInfoEmail>
            {stringEllipsis(
              myInfo?.details.email!! || "이메일을 설정해주세요",
              22
            )}
          </S.UserInfoEmail>
        </div>
      </S.UserInfoBox>

      <div>
        <S.RegistTextContainer>
          <img src={wonderFace} alt="이미지 없음" />
          <p>
            {isMember
              ? "내 기업 스토리가 등록 되어있나요?"
              : "동문 인증이 되어 있지 않나요?"}
          </p>
        </S.RegistTextContainer>
        <S.CompanyRegistBtn
          onClick={() => navigate(isMember ? "/story" : "/alumni/certify")}
        >
          {isMember ? "스토리 등록하러 가기" : "동문인증 하러가기"}
        </S.CompanyRegistBtn>
      </div>
    </>
  );
}
