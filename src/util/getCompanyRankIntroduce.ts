export const getCompanyRankIntroduce = (categoryName: string) => {
  switch (categoryName) {
    case "total":
      return "모든분야에서 높아요!";
    case "balance":
      return "워라벨을 최우선으로 해요!";
    case "salary-benefits":
      return "연봉복지가 좋아요!";
    case "career":
      return "커리어 향상을 중점적으로 봐요!";
    case "culture":
      return "조직문화가 뛰어나요!";
    default:
      return "";
  }
};
