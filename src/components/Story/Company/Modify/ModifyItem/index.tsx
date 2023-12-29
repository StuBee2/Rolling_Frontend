import { useCompanyModify } from "@src/hooks/Company/useCompanyModify";
import { TextInput } from "@stubee2/stubee2-rolling-ui";
import logo from "@src/assets/icons/Logo/logo.svg";
import { Dispatch, SetStateAction, useEffect } from "react";
import * as S from "@src/components/Story/Company/style";
import { InputEmphasizeText, RegistButton } from "@src/components/Story/style";
import { turnOnOffModal } from "@src/utils/Modal/turnOnOffModal";

interface Props {
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}

export default function ModifyItem({ setIsOpenModal }: Props) {
  const { ...attr } = useCompanyModify();

  useEffect(() => {
    attr.setPrevCompanyModifyInfo(attr.companyModifyInfo);
  }, []);

  return (
    <S.RegistContainer>
      <S.Form onSubmit={attr.handleModifySubmit}>
        <S.Wrapper>
          <S.LogoContainer>
            <InputEmphasizeText>기업로고</InputEmphasizeText>

            <S.LogoBox>
              <S.LogoImg
                logo={attr.companyModifyInfo.imgUrl || logo}
                onClick={attr.handleCompanyLogoClick}
              />
              <S.CompanyLogoInput
                type="file"
                ref={attr.imgRef}
                onChange={attr.handleUploadCompanyLogo}
              />
            </S.LogoBox>
          </S.LogoContainer>

          <S.RegistInputContainer>
            <S.CompanyBasicInfo>
              <S.CompanyName>
                <InputEmphasizeText>
                  기업명 <span>*</span>
                </InputEmphasizeText>
                <TextInput
                  autoComplete="off"
                  value={attr.companyModifyInfo.name}
                  customStyle={S.InputStyle}
                  placeholder={"기업명을 입력해 주세요"}
                  inputRef={attr.nameInputRef}
                  handleChange={(e) =>
                    attr.handleModifyChange(e, attr.isNameError)
                  }
                  isError={attr.isNameError}
                  errorMessage={"기업명이 중복되었습니다."}
                  name="name"
                />
              </S.CompanyName>
            </S.CompanyBasicInfo>

            <S.Address>
              <InputEmphasizeText>
                기업 주소 <span>*</span>
              </InputEmphasizeText>

              <S.MainAddress>
                <TextInput
                  autoComplete="off"
                  value={attr.companyModifyInfo.address}
                  customStyle={S.InputStyle}
                  placeholder={"기업 주소를 검색해 주세요"}
                  handleChange={attr.handleModifyChange}
                  name="address"
                />
                <S.FindAddressButton
                  onClick={() => turnOnOffModal(setIsOpenModal, "on")}
                >
                  주소 찾기
                </S.FindAddressButton>
              </S.MainAddress>

              <TextInput
                autoComplete="off"
                value={attr.companyModifyInfo.addressEtc!!}
                customStyle={S.InputStyle}
                placeholder={"상세 주소를 입력해 주세요"}
                handleChange={attr.handleModifyChange}
                name="addressEtc"
              />
            </S.Address>
          </S.RegistInputContainer>
        </S.Wrapper>

        <S.CompanyIntroduce>
          <InputEmphasizeText>
            기업 소개 <span>*</span>
          </InputEmphasizeText>

          <TextInput
            value={attr.companyModifyInfo.description}
            textType="textarea"
            customStyle={S.TextAreaStyle}
            placeholder={"기업 소개 내용을 작성해 주세요"}
            handleChange={attr.handleModifyChange}
            name="description"
          />

          <RegistButton isRequired={attr.isRequired}>
            <button type="submit">수정하기</button>
          </RegistButton>
        </S.CompanyIntroduce>
      </S.Form>
    </S.RegistContainer>
  );
}
