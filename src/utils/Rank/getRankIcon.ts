import total from "@src/assets/icons/Rank/total.svg";
import balance from "@src/assets/icons/Rank/balance.svg";
import career from "@src/assets/icons/Rank/career.svg";
import money from "@src/assets/icons/Rank/money.svg";
import compnay from "@src/assets/icons/Rank/company.svg";

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
