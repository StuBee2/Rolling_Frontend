import { useState, useEffect, Suspense } from "react";
import * as S from "./style";
import { useGetCompanyInfoIdQuery } from "@src/queries/Company/company.query";
import { companyIdAtom } from "@src/stores/review/review.store";
import { useRecoilState } from "recoil";
import { CompanyInfoType } from "../../types/Company/company.type";
import ErrorBoundary from "../Common/ErrorBoundary";
import PageTitle from "./PageTitle/index";
import Horoscope from "./Horoscope";
import Description from "./Description/index";

interface Props {
  id: string;
}

const CompanyDetailList = ({ id }: Props) => {
  const { data: getCompanyInfo } = useGetCompanyInfoIdQuery({ id });
  const [companyidatom, setCompanyIdAtom] = useRecoilState<string | undefined>(
    companyIdAtom
  );

  const [companyInfoData, setCompanyInfoData] = useState<CompanyInfoType>({
    companyId: "",
    companyName: "",
    companyAddress: "",
    companyDescription: "",
    companyImgUrl: "",
    totalGrade: 0,
    salaryAndBenefits: 0,
    workLifeBalance: 0,
    organizationalCulture: 0,
    careerAdvancement: 0,
    companyCreatedAt: "",
    companyModifiedAt: "",
    registrantId: "",
    memberNickName: "",
    memberSocialLoginId: "",
    memberImageUrl: "",
  });

  useEffect(() => {
    if (getCompanyInfo?.companyId) {
      setCompanyIdAtom(getCompanyInfo.companyId);

      setCompanyInfoData({
        companyId: getCompanyInfo.companyId,
        companyName: getCompanyInfo.companyName,
        companyAddress: getCompanyInfo.companyAddress,
        companyDescription: getCompanyInfo.companyDescription,
        companyImgUrl: getCompanyInfo.companyImgUrl,
        totalGrade: getCompanyInfo.totalGrade,
        salaryAndBenefits: getCompanyInfo.salaryAndBenefits,
        workLifeBalance: getCompanyInfo.workLifeBalance,
        organizationalCulture: getCompanyInfo.organizationalCulture,
        careerAdvancement: getCompanyInfo.careerAdvancement,
        companyCreatedAt: getCompanyInfo.companyCreatedAt,
        companyModifiedAt: getCompanyInfo.companyModifiedAt,
        registrantId: getCompanyInfo.registrantId,
        memberNickName: getCompanyInfo.memberNickName,
        memberSocialLoginId: getCompanyInfo.memberSocialLoginId,
        memberImageUrl: getCompanyInfo.memberImageUrl,
      });
    }
  }, [getCompanyInfo, setCompanyIdAtom]);

  return (
    <S.CompanyDetailsContainer>
      <S.CompanyDetailsWrapper>
        <Suspense fallback="Loading...">
          <ErrorBoundary fallback="Error :)">
            <Horoscope companyInfo={companyInfoData} />
            <S.CompanyDetailsBox>
              <PageTitle />
              <Description companyInfo={companyInfoData} />
            </S.CompanyDetailsBox>
          </ErrorBoundary>
        </Suspense>
      </S.CompanyDetailsWrapper>
    </S.CompanyDetailsContainer>
  );
};

export default CompanyDetailList;
