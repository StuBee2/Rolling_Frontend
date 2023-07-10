import { customAxios } from "../../libs/Axios/customAxios";
import { CommonPageParam } from "../common.param";
import { NewsCompanyNameParam, NewsRepository } from "./news.repository";

class NewsRepositoryImpl implements NewsRepository {
  public async getNews(
    { companyName }: NewsCompanyNameParam,
    { page }: CommonPageParam
  ): Promise<T> {
    const { data } = await customAxios.get(
      `/news/${companyName}?page=${page}&size=10`
    );
    return data;
  }
}

export default new NewsRepositoryImpl();
