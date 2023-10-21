import { useRegistCompany } from "@src/hooks/Company/useRegistCompany";
import { Button, TextInput } from "@stubee2/stubee2-rolling-ui";
import photo from "@src/assets/images/Register/photo.png";
import * as S from "./style";
import { Dispatch, SetStateAction } from "react";
import { turnOnModal } from "@src/utils/Modal/turnOnOffModal";

interface Props {
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}

export default function Form({ setIsOpenModal }: Props) {
  const { ...attr } = useRegistCompany();
  return (
    <S.FormContainer>
      <S.FormWrapper onSubmit={attr.handleRegistSubmit}>
        <S.CompanyLogoContainer>
          <S.CompanyInfoText>
            기업로고 <span>*</span>
          </S.CompanyInfoText>
          <S.CompanyLogoImg
            logo={attr.imgUrl || photo}
            onClick={attr.handleCompanyLogoClick}
          />
          <S.CompanyLogoInput
            type="file"
            ref={attr.imgRef}
            onChange={(e) => attr.handleUploadCompanyLogo(e)}
          />
        </S.CompanyLogoContainer>

        <S.InputContainer>
          <S.CompanyInfoText>
            기업명 <span>*</span>
          </S.CompanyInfoText>
          <TextInput
            type="text"
            value={attr.companyInfo.name}
            customStyle={S.InputStyle}
            placeholder={"기업명을 입력해주세요"}
            handleChange={attr.handleRegistChange}
            name={"name"}
          />
        </S.InputContainer>

        <S.InputContainer>
          <S.CompanyInfoText>
            기업주소 <span>*</span>
          </S.CompanyInfoText>
          <S.CompanyAddressInputContainer>
            <input
              type="text"
              value={attr.companyInfo.address}
              placeholder={"기업 본사 도로명 주소를 입력해주세요"}
              onChange={attr.handleRegistChange}
              name={"address"}
            />
            <S.SearchButton onClick={() => turnOnModal(setIsOpenModal)}>
              검색
            </S.SearchButton>
          </S.CompanyAddressInputContainer>
        </S.InputContainer>

        <S.InputContainer isTextArea={true}>
          <S.CompanyInfoText>
            기업소개 <span>*</span>
          </S.CompanyInfoText>
          <TextInput
            value={attr.companyInfo.description}
            textType="textarea"
            customStyle={S.TextAreaStyle}
            placeholder={
              "기업 소개 글을 작성해주세요\n(회사 서비스의 목적, 기업 문화 등)"
            }
            handleChange={attr.handleRegistChange}
            name={"description"}
          />
        </S.InputContainer>

        <S.ButtonContainer>
          <Button type="submit" ButtonType="custom">
            요청하기
          </Button>
        </S.ButtonContainer>
      </S.FormWrapper>
    </S.FormContainer>
  );
}
