import { CompanyInfoType } from "@src/types/Company/company.type";

export const tieStarGradeToObject = (starRatingInfo: CompanyInfoType) => {
  return {
    companyImgUrl: starRatingInfo.companyImgUrl,
    companyName: starRatingInfo.companyName,
    totalGrade: starRatingInfo.totalGrade,
    salaryAndBenefits: starRatingInfo.salaryAndBenefits,
    workLifeBalance: starRatingInfo.workLifeBalance,
    organizationalCulture: starRatingInfo.organizationalCulture,
    careerAdvancement: starRatingInfo.careerAdvancement,
  };
};
