import React, { useState } from "react";
import * as S from "./style";
import { CompanyInfoType } from "@src/types/Company/company.type";
import useModal from "@src/hooks/util/useModal";
import FirmReview from "@src/components/CompanyDetails/Review";
import ReviewList from "@src/components/CompanyDetails/Review/ReviewList/index";

export default function Description({
  companyInfo,
}: {
  companyInfo: CompanyInfoType;
}) {
  const { open } = useModal();

  var companyModifiedAt = companyInfo.companyModifiedAt;
  var companyModifiedAtYear = companyModifiedAt.substring(0, 4);
  var companyModifiedAtMonth = companyModifiedAt.substring(5, 7);
  var companyModifiedAtDay = companyModifiedAt.substring(8, 10);

  const companyFacilitiesList = ["", "", ""];

  return (
    <>
      <S.CompanyInfoContainer>
        <S.MemberInfoContainer>
          <S.MemberProfile src={companyInfo.memberImageUrl} alt="Error" />
          <S.MemberNameBox
            NickNameStringSize={companyInfo.memberNickName.length > 8}
          >
            <S.MemberNickName>{companyInfo.memberNickName}</S.MemberNickName>
            <S.MemberSocialLoginId>
              {companyInfo.memberSocialLoginId}
            </S.MemberSocialLoginId>
          </S.MemberNameBox>
        </S.MemberInfoContainer>

        <S.CompanyInfoMainContainer>
          <S.CompanyInfoMemberWritingDay>
            {companyModifiedAtYear}
            {"년 "}
            {companyModifiedAtMonth}
            {"월 "}
            {companyModifiedAtDay}
            {"일 작성"}
          </S.CompanyInfoMemberWritingDay>
          <S.CompanyInfoTitle>{"💼 기본 정보"}</S.CompanyInfoTitle>
          <S.CompanyInfoContent>
            이 정보는 선배들이 작성한 데이터를 기반으로 만들어집니다.
          </S.CompanyInfoContent>
          <S.CompanyInfoTextBox>
            <S.CompanyImage
              src={companyInfo.companyImgUrl}
              alt="Error"
            ></S.CompanyImage>
            <S.CompanyBlockBox>
              <S.CompanyName>{companyInfo.companyName}</S.CompanyName>
              <S.CompanyAddress>{companyInfo.companyAddress}</S.CompanyAddress>
            </S.CompanyBlockBox>
          </S.CompanyInfoTextBox>
          <S.CompanyDescription>
            {"🛠️ "}
            {companyInfo.companyDescription}
          </S.CompanyDescription>
          <S.CompanyInfoContentLine></S.CompanyInfoContentLine>
          <S.CompanyFacilitiesImageList>
            {companyFacilitiesList.map((index) => (
              <S.CompanyFacilitiesImage
                src={index}
                alt="Error"
              ></S.CompanyFacilitiesImage>
            ))}
          </S.CompanyFacilitiesImageList>
          <S.CompanyReviewBtn
            onClick={() => {
              open();
            }}
          >
            {"리뷰 작성 ✍🏻"}
          </S.CompanyReviewBtn>
          <FirmReview />
        </S.CompanyInfoMainContainer>
      </S.CompanyInfoContainer>
      <ReviewList companyId={companyInfo.companyId} />
    </>
  );
}
