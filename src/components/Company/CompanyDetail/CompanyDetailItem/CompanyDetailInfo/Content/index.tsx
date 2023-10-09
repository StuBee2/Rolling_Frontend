import * as S from "./style";
import basicInfo from "@src/assets/images/Company/basicInfo.svg";
import description from "@src/assets/images/Common/description.svg";
import { CompanyInfoType } from "@src/types/Company/company.type";
import logo from "@src/assets/images/Common/Logo.svg";
import { getDateText } from "@stubee2/stubee2-rolling-util";
import { CompanyDetailRegistAt } from "../style";

interface Props {
  companyInfo: CompanyInfoType;
}

export default function CompanyDetailContent({ companyInfo }: Props) {
  return (
    <S.CompanyDetailContentContainer>
      <S.CompanyDetailContentTitle>
        <div>
          <img src={basicInfo} alt="이미지 없음" />
          <p>기본정보</p>
        </div>
        <S.CompanyDetailContentSubTitle>
          이 정보는 졸업생들이 작성한 데이터를 기반으로 만들어지고 있어요
        </S.CompanyDetailContentSubTitle>
      </S.CompanyDetailContentTitle>

      <S.CompanyDetailContentInfoContainer>
        <CompanyDetailRegistAt widthType={"min-width"}>
          {getDateText(new Date(companyInfo.companyCreatedAt))} 작성
        </CompanyDetailRegistAt>
        <S.CompanyDetailContentInfo>
          <img src={companyInfo.companyImgUrl || logo} alt="이미지 없음" />
          <div>
            <S.CompanyName>{companyInfo.companyName}</S.CompanyName>
            <S.CompanyAddress>{companyInfo.companyAddress}</S.CompanyAddress>
          </div>
        </S.CompanyDetailContentInfo>
        <S.CompanyDetailContentDescription>
          <img src={description} alt="이미지 없음" />
          <p>{companyInfo.companyDescription}</p>
        </S.CompanyDetailContentDescription>
      </S.CompanyDetailContentInfoContainer>

      {/* 아래는 추후에 추가될 기능 */}
      {/* <S.CompanyDetailContentCompanyImgContainer>
        {Array.from({ length: 10 }).map((_, idx) => (
          <img
            key={idx}
            src="https://static.wanted.co.kr/images/company/15863/d2ooppds2x0bepn6__1080_790.png"
            alt="이미지 없음"
          />
        ))}
      </S.CompanyDetailContentCompanyImgContainer> */}
    </S.CompanyDetailContentContainer>
  );
}
