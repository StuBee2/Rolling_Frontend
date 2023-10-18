import ErrorBoundary from "@src/components/Common/ErrorBoundary";
import * as S from "./style";
import wonderIcon from "@src/assets/images/Home/wonderIcon.svg";
import { Suspense } from "react";
import { useGetMyInfoQuery } from "@src/queries/Member/Member.query";
import { stringEllipsis } from "@stubee2/stubee2-rolling-util";
import { useNavigate } from "react-router-dom";
import UserInfoSkeleton from "@src/components/Common/Skeleton/Home/UserInfo";

export default function UserInfo() {
  return (
    <div>
      <S.UserInfoWrapper>
        <ErrorBoundary fallback={<>내 정보를 갖고오지 못했습니다.</>}>
          <Suspense fallback={<UserInfoSkeleton />}>
            <UserInfoItem />
          </Suspense>
        </ErrorBoundary>
      </S.UserInfoWrapper>
    </div>
  );
}

function UserInfoItem() {
  const navigate = useNavigate();
  const { data: userInfo } = useGetMyInfoQuery({ suspense: true });
  return (
    <>
      <S.UserInfoBox>
        <img src={userInfo?.socialDetails.imageUrl || ""} alt="이미지 없음" />
        <div onClick={() => navigate("/mypage/profile")}>
          <S.UserInfoNickName>
            {userInfo?.memberDetails.nickName || userInfo?.socialDetails.name}
          </S.UserInfoNickName>
          <S.UserInfoEmail>
            {stringEllipsis(userInfo?.socialDetails.email!! || "", 22)}
          </S.UserInfoEmail>
        </div>
      </S.UserInfoBox>

      <div>
        <S.RegistTextContainer>
          <img src={wonderIcon} alt="이미지 없음" />
          <p>내 기업이 등록되어있나요?</p>
        </S.RegistTextContainer>
        <S.CompanyRegistBtn onClick={() => navigate("/register")}>
          내 기업 등록하기
        </S.CompanyRegistBtn>
      </div>
    </>
  );
}
