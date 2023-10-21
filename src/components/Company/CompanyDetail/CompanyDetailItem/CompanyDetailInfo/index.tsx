import { CompanyInfoType } from "@src/types/Company/company.type";
import Content from "./Content";
import UserProfile from "./UserProfile";
import * as S from "./style";
import write from "@src/assets/icons/Company/write.png";
import Story from "./Story";
import Token from "@src/libs/Token/Token";
import { ACCESS_TOKEN_KEY } from "@src/constants/Auth/auth.constant";
import ErrorBoundary from "@src/components/Common/ErrorBoundary";
import React, { Suspense } from "react";
import { useSetRecoilState } from "recoil";
import { CompanyStoryRegistModalAtom } from "@src/stores/company/company.store";
import StorySkeleton from "@src/components/Common/Skeleton/CompanyDetail/Review";
import { turnOnModal } from "@src/utils/Modal/turnOnOffModal";
import { jwtDecoding } from "@src/utils/Auth/jwtDecoding";
import { useNavigate } from "react-router-dom";
import { useRollingToast } from "@stubee2/stubee2-rolling-toastify";

interface Props {
  companyInfo: CompanyInfoType;
}

function CompanyDetailInfo({ companyInfo }: Props) {
  const setCompanyStoryRegisterModal = useSetRecoilState(
    CompanyStoryRegistModalAtom
  );
  const { rollingToast } = useRollingToast();
  const isNotMember = jwtDecoding("authority") === "TEMP";
  const navigate = useNavigate();

  const handleRegistStory = () => {
    if (isNotMember) {
      rollingToast("동문인증이 필요한 기능입니다!", "warning");
      navigate("/graduate/certification");
    } else {
      turnOnModal(setCompanyStoryRegisterModal);
    }
  };

  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>That's 기업정보</S.Title>
        <S.SubTitle>
          해당기업의 세세한 정보를 빠르고 쉽게 알아볼 수 있어요.
        </S.SubTitle>
      </S.TitleContainer>

      <S.ContentContainer>
        <div>
          <S.ContentWrapper>
            <UserProfile {...companyInfo} />
            <Content {...companyInfo} />
          </S.ContentWrapper>

          {Token.getToken(ACCESS_TOKEN_KEY) && (
            <S.CompanyStoryButtonCotainer>
              <S.CompanyStoryButton onClick={handleRegistStory}>
                <p>스토리 남기기</p>
                <img src={write} alt="이미지 없음" />
              </S.CompanyStoryButton>
            </S.CompanyStoryButtonCotainer>
          )}
        </div>

        <ErrorBoundary fallback={<>해당 회사 리뷰를 가지고 오지 못했습니다.</>}>
          <Suspense fallback={<StorySkeleton />}>
            <Story companyId={companyInfo.companyId} />
          </Suspense>
        </ErrorBoundary>
      </S.ContentContainer>
    </S.Container>
  );
}

export default React.memo(CompanyDetailInfo);
