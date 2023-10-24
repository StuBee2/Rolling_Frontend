import { CompanyStarGrade } from "@src/types/Company/company.type";

export const convertStarRatingObject = (starRating: CompanyStarGrade) => {
  return [
    {
      id: 0,
      title: "총합",
      star: starRating.total,
    },
    {
      id: 1,
      title: "워라벨",
      star: starRating.workLifeBalance,
    },
    {
      id: 2,
      title: "연봉",
      star: starRating.salaryAndBenefits,
    },
    {
      id: 3,
      title: "커리어 향상",
      star: starRating.careerAdvancement,
    },
    {
      id: 4,
      title: "조직문화",
      star: starRating.organizationalCulture,
    },
  ];
};
