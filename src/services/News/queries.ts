import { UseInfiniteQueryResult, useInfiniteQuery } from "react-query";
import { AxiosError } from "axios";
import { QUERY_KEYS } from "../../services/queryKey";
import { NewsInfiniteScrollType } from "@src/types/News/news.type";
import NewsApi from "./api";

export const useGetNewsQuery = ({
  companyName,
}: {
  companyName: string;
}): UseInfiniteQueryResult<NewsInfiniteScrollType, AxiosError> =>
  useInfiniteQuery(
    QUERY_KEYS.news.getNews(companyName),
    ({ pageParam = 1 }) =>
      NewsApi.getNews({ companyName }, { page: pageParam }),
    {
      suspense: true,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      getNextPageParam: (nextPage) => nextPage.nextPage,
    }
  );
