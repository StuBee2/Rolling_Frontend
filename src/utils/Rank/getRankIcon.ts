import total from "@src/assets/icons/Rank/total.png";
import balance from "@src/assets/icons/Rank/balance.png";
import career from "@src/assets/icons/Rank/career.png";
import money from "@src/assets/icons/Rank/money.png";
import compnay from "@src/assets/icons/Rank/company.png";

export const getRankIcon = (categoryName: string) => {
  switch (categoryName) {
    case "total":
      return total;
    case "balance":
      return balance;
    case "salary-benefits":
      return money;
    case "career":
      return career;
    case "culture":
      return compnay;
    default:
      return "";
  }
};
