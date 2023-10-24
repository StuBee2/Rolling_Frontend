import { CompanyInfoType } from "@src/types/Company/company.type";

export const tieStarGradeToObject = (starRatingInfo: CompanyInfoType) => {
  return {
    companyImgUrl: starRatingInfo.companyLogoUrl,
    companyName: starRatingInfo.companyName,
    total: starRatingInfo.total,
    salaryAndBenefits: starRatingInfo.salaryAndBenefits,
    workLifeBalance: starRatingInfo.workLifeBalance,
    organizationalCulture: starRatingInfo.organizationalCulture,
    careerAdvancement: starRatingInfo.careerAdvancement,
  };
};
