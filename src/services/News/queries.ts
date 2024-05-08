import {
  UseInfiniteQueryOptions,
  UseQueryOptions,
  useInfiniteQuery,
} from "react-query";
import { AxiosError } from "axios";
import { QUERY_KEYS } from "../../services/queryKey";
import newsApi from "./api";
import { NewsInfiniteScrollType } from "@src/types/News/news.type";

export const useGetNewsQuery = (
  {
    companyName,
  }: {
    companyName: string;
  },
  options?: UseInfiniteQueryOptions<
    NewsInfiniteScrollType,
    AxiosError,
    NewsInfiniteScrollType,
    NewsInfiniteScrollType,
    string[]
  >
) =>
  useInfiniteQuery(
    QUERY_KEYS.news.getNews(companyName),
    ({ pageParam = 1 }) =>
      newsApi.getNews({ companyName }, { page: pageParam }),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      getNextPageParam: (nextPage) => nextPage.nextPage,
      ...options,
    }
  );
