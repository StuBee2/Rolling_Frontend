import { NewsInfiniteScrollType } from "@src/types/News/news.type";
import { CommonPageParam } from "../common.param";

export interface NewsCompanyNameParam {
  companyName: string;
}

export interface NewsRepository {
  getNews(
    { companyName }: NewsCompanyNameParam,
    { page }: CommonPageParam
  ): Promise<NewsInfiniteScrollType>;
}
