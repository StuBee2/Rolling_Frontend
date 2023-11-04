import {
  AddText,
  RegisterContainer,
  SubTitle,
  Title,
  TitleContainer,
} from "../../style";
import React from "react";
import CompanyRegisterItem from "./RegisterItem";

interface Props {
  storySearchCompany: {
    companyName: string;
    isExistSearchList: boolean;
  };
  storyCompanyId: string;
}

function CompanyRegister({ storySearchCompany, storyCompanyId }: Props) {
  const { companyName, isExistSearchList } = storySearchCompany;

  return (
    <RegisterContainer>
      <TitleContainer>
        <Title>My Company 등록</Title>
        <SubTitle>
          내 기업이 없다면, 내 기업 등록으로 더 다양한 서비스를 즐길 수 있어요
        </SubTitle>
      </TitleContainer>

      {companyName === "" && <AddText>기업을 먼저 찾아주세요!</AddText>}
      {storyCompanyId !== "" && (
        <AddText>기업이 등록되어 있습니다. 스토리를 작성해주세요!</AddText>
      )}

      {!isExistSearchList && companyName !== "" && storyCompanyId === "" && (
        <CompanyRegisterItem companyName={companyName} />
      )}
    </RegisterContainer>
  );
}
export default React.memo(CompanyRegister);
