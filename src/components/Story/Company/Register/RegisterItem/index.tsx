import * as S from "../../style";
import photo from "@src/assets/images/Register/photo.png";
import { useCompanyRegister } from "@src/hooks/Company/useCompanyRegister";
import { Portal, TextInput } from "@stubee2/stubee2-rolling-ui";
import { useEffect, useState } from "react";
import { InputEmphasizeText, RegistButton } from "../../../style";
import AddressModal from "@src/components/Common/Modal/CompanyAddress";
import { turnOnOffModal } from "@src/utils/Modal/turnOnOffModal";

interface Props {
  companyName: string;
}

const CompanyRegisterItem = ({ companyName }: Props) => {
  const { ...attr } = useCompanyRegister();
  const [storyAddressModal, setStoryAddressModal] = useState(false);

  useEffect(() => {
    attr.setCompanyRegisterInfo((prev) => ({ ...prev, name: companyName }));
  }, [companyName]);

  return (
    <>
      <S.RegistContainer>
        <S.Form onSubmit={attr.handleRegistSubmit}>
          <S.Wrapper>
            <S.LogoContainer>
              <InputEmphasizeText>기업 로고</InputEmphasizeText>

              <S.LogoBox>
                <S.LogoImg
                  logo={attr.companyRegisterInfo.imgUrl || photo}
                  onClick={attr.handleCompanyLogoClick}
                />
                <S.CompanyLogoInput
                  type="file"
                  ref={attr.imgRef}
                  onChange={(e) => attr.handleUploadCompanyLogo(e)}
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
                    value={companyName}
                    placeholder="기업명을 입력해 주세요"
                    customStyle={S.InputStyle}
                    name="name"
                    disabled
                  />
                </S.CompanyName>

                <S.Address>
                  <InputEmphasizeText>
                    기업 주소 <span>*</span>
                  </InputEmphasizeText>

                  <S.MainAddress>
                    <TextInput
                      value={attr.companyRegisterInfo.address}
                      autoComplete="off"
                      placeholder="기업 주소를 검색해 주세요"
                      customStyle={S.InputStyle}
                      handleChange={attr.handleRegistChange}
                      name="address"
                    />
                    <S.FindAddressButton
                      onClick={() => turnOnOffModal(setStoryAddressModal, "on")}
                    >
                      주소 찾기
                    </S.FindAddressButton>
                  </S.MainAddress>

                  <TextInput
                    value={attr.companyRegisterInfo.addressEtc!!}
                    autoComplete="off"
                    placeholder="상세 주소를 입력해 주세요"
                    customStyle={S.InputStyle}
                    handleChange={attr.handleRegistChange}
                    name="addressEtc"
                  />
                </S.Address>
              </S.CompanyBasicInfo>
            </S.RegistInputContainer>
          </S.Wrapper>

          <S.CompanyIntroduce>
            <InputEmphasizeText>
              기업 소개 <span>*</span>
            </InputEmphasizeText>

            <TextInput
              value={attr.companyRegisterInfo.description}
              autoComplete="off"
              textType="textarea"
              placeholder="기업 소개 내용을 작성해 주세요"
              customStyle={S.TextAreaStyle}
              handleChange={attr.handleRegistChange}
              name="description"
            />

            <RegistButton isRequired={attr.isRequred}>
              <button type="submit">등록하기</button>
            </RegistButton>
          </S.CompanyIntroduce>
        </S.Form>
      </S.RegistContainer>

      {storyAddressModal && (
        <Portal id="modal">
          <AddressModal
            setIsOpenModal={setStoryAddressModal}
            companyInfo={attr.companyRegisterInfo.address}
            setCompanyInfo={attr.setCompanyRegisterInfo}
          />
        </Portal>
      )}
    </>
  );
};

export default CompanyRegisterItem;
