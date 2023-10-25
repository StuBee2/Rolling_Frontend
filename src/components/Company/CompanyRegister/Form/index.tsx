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
      <S.FormWrapper
        onSubmit={(e) => {
          attr.companyId
            ? attr.handleModifySubmit(e)
            : attr.handleRegistSubmit(e);
        }}
      >
        <S.CompanyLogoContainer>
          <S.CompanyInfoText>기업로고</S.CompanyInfoText>
          <S.CompanyLogoImg
            logo={attr.imgUrl || attr.companyModifyInfo.imgUrl || photo}
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
            value={attr.companyInfo.name || attr.companyModifyInfo.name}
            customStyle={S.InputStyle}
            placeholder={"기업명을 입력해주세요"}
            handleChange={(e) => attr.handleRegistChange(e, attr.isError.name)}
            isError={attr.isError.name}
            errorMessage={"기업명을 입력해주세요"}
            inputRef={attr.inputRefs.name}
            name={"name"}
          />
        </S.InputContainer>

        <S.InputContainer>
          <S.CompanyInfoText>
            기업주소 <span>*</span>
          </S.CompanyInfoText>
          <S.InputWrapper>
            <S.CompanyAddressInputContainer>
              <TextInput
                type="text"
                value={
                  attr.companyInfo.address || attr.companyModifyInfo.address
                }
                customStyle={S.InputStyle}
                placeholder={"기업 본사 도로명 주소를 입력해주세요"}
                handleChange={(e) =>
                  attr.handleRegistChange(e, attr.isError.address)
                }
                isError={attr.isError.address}
                errorMessage={"기업 본사 도로명 주소를 입력해주세요"}
                inputRef={attr.inputRefs.address}
                name={"address"}
              />
            </S.CompanyAddressInputContainer>
            <S.SearchButton onClick={() => turnOnModal(setIsOpenModal)}>
              검색
            </S.SearchButton>
          </S.InputWrapper>
        </S.InputContainer>

        <S.InputContainer isTextArea={true}>
          <S.CompanyInfoText>
            기업소개 <span>*</span>
          </S.CompanyInfoText>
          <TextInput
            value={
              attr.companyInfo.description || attr.companyModifyInfo.description
            }
            textType="textarea"
            customStyle={S.TextAreaStyle}
            placeholder={
              "기업 소개 글을 작성해주세요\n(회사 서비스의 목적, 기업 문화 등)"
            }
            handleChange={(e) =>
              attr.handleRegistChange(e, attr.isError.description)
            }
            isError={attr.isError.description}
            errorMessage={"기업 소개 글을 작성해주세요"}
            inputRef={attr.inputRefs.description}
            name={"description"}
          />
        </S.InputContainer>

        <S.ButtonContainer>
          <Button type="submit" ButtonType="custom">
            {attr.companyId ? "수정하기" : "요청하기"}
          </Button>
        </S.ButtonContainer>
      </S.FormWrapper>
    </S.FormContainer>
  );
}
