import { customAxios } from "@src/libs/Axios/RollingAxios";
import { NewsInfiniteScrollType } from "@src/types/News/news.type";
import { CommonPageParam } from "@src/types/common/commont.type";

class NewsApi {
  public async getNews(
    { companyName }: { companyName: string },
    { page }: CommonPageParam
  ): Promise<NewsInfiniteScrollType> {
    const { data } = await customAxios.get(
      `/news/${companyName}?page=${page}&size=10`
    );
    return data;
  }
}

export default new NewsApi();
