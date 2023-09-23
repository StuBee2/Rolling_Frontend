import { CompanyAllStarGrade } from "@src/types/Company/company.type";

export const changeStarGradeToArrayObjcet = (
  starRating: CompanyAllStarGrade
) => {
  return [
    {
      id: 0,
      name: "총합",
      rating: starRating.totalGrade,
    },
    {
      id: 1,
      name: "워라벨",
      rating: starRating.workLifeBalance,
    },
    {
      id: 2,
      name: "연봉",
      rating: starRating.salaryAndBenefits,
    },
    {
      id: 3,
      name: "커리어 향상",
      rating: starRating.careerAdvancement,
    },
    {
      id: 4,
      name: "조직문화",
      rating: starRating.organizationalCulture,
    },
  ];
};
