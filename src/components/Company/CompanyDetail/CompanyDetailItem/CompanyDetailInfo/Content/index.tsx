import * as S from "./style";
import bag from "@src/assets/icons/Company/bag.svg";
import tool from "@src/assets/icons/Company/tool.svg";
import { CompanyInfoType } from "@src/types/Company/company.type";
import logo from "@src/assets/icons/Logo/logo.svg";
import { getDateText } from "@stubee2/stubee2-rolling-util";
import { CompanyDetailRegistAt } from "../style";
import { getRgb } from "@src/utils/Rgb/getRgb";
import { Column, Row } from "@src/styles/flex";

const CompanyDetailContent = ({ ...attr }: CompanyInfoType) => {
  return (
    <Column $width={"100%"} $height={"100%"} $padding={"2rem"} $rowGap={"2rem"}>
      <Column $width={"100%"} $rowGap={"10px"}>
        <Row $alignItems={"center"} $columnGap={"10px"}>
          <S.Image src={bag} alt="이미지 없음" />
          <S.BasicInfo>기본정보</S.BasicInfo>
        </Row>
        <S.SubTitle>
          이 정보는 졸업생들이 작성한 데이터를 기반으로 만들어지고 있어요!
        </S.SubTitle>
      </Column>

      <S.InfoContainer>
        <CompanyDetailRegistAt widthType={"min-width"}>
          {getDateText(new Date(attr.companyCreatedAt))} 작성
        </CompanyDetailRegistAt>

        <S.Info backgroundColor={getRgb(attr.companyLogoRGB)}>
          <img src={attr.companyLogoUrl || logo} alt="이미지 없음" />
          <Column $rowGap={"10px"}>
            <S.CompanyName>{attr.companyName}</S.CompanyName>
            <S.CompanyAddress>
              {attr.companyAddress + (" " + (attr.companyAddressEtc || ""))}
            </S.CompanyAddress>
          </Column>
        </S.Info>

        <S.Description>
          <img src={tool} alt="이미지 없음" />
          <p>{attr.companyDescription}</p>
        </S.Description>
      </S.InfoContainer>

      {/* 아래는 추후에 추가될 기능 */}
      {/* <S.CompanyImgContainer>
        {Array.from({ length: 10 }).map((_, idx) => (
          <img
            key={idx}
            src="https://static.wanted.co.kr/images/company/15863/d2ooppds2x0bepn6__1080_790.png"
            alt="이미지 없음"
          />
        ))}
      </S.CompanyImgContainer> */}
    </Column>
  );
};

export default CompanyDetailContent;
