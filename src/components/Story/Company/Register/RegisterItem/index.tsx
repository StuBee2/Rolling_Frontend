import * as S from "../../style";
import photo from "@src/assets/images/Register/photo.png";
import { useCompanyRegister } from "@src/hooks/Company/useCompanyRegister";
import { Portal, TextInput } from "@stubee2/stubee2-rolling-ui";
import { useEffect, useState } from "react";
import { InputEmphasizeText, RegistButton } from "../../../style";
import AddressModal from "@src/components/Common/Modal/CompanyAddress";
import { turnOnOffModal } from "@src/utils/Modal/turnOnOffModal";
import { Column, Row } from "@src/styles/flex";

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
          <Row>
            <Column $width={"200px"} $height={"100%"} $rowGap={"10px"}>
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
            </Column>

            <S.RegistInputContainer>
              <Column $rowGap={"2rem"}>
                <Column $rowGap={"10px"}>
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
                </Column>

                <Column $width={"100%"} $rowGap={"10px"}>
                  <InputEmphasizeText>
                    기업 주소 <span>*</span>
                  </InputEmphasizeText>

                  <Column $width={"100%"} $rowGap={"10px"}>
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
                  </Column>

                  <TextInput
                    value={attr.companyRegisterInfo.addressEtc!!}
                    autoComplete="off"
                    placeholder="상세 주소를 입력해 주세요"
                    customStyle={S.InputStyle}
                    handleChange={attr.handleRegistChange}
                    name="addressEtc"
                  />
                </Column>
              </Column>
            </S.RegistInputContainer>
          </Row>

          <Column $width={"100%"} $rowGap={"15px"}>
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
          </Column>
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
