import {
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  useInfiniteQuery,
} from "react-query";
import { NewsCompanyNameParam } from "@src/repositories/News/news.repository";
import { AxiosError } from "axios";
import { QUERY_KEYS } from "../queryKey";
import NewsRepositoryImpl from "@src/repositories/News/news.repositoryImpl";
import { NewsInfiniteScrollType } from "@src/types/News/news.type";

export const useGetNewsQuery = (
  { companyName }: NewsCompanyNameParam,
  options?: UseInfiniteQueryOptions<
    NewsInfiniteScrollType,
    AxiosError,
    NewsInfiniteScrollType,
    NewsInfiniteScrollType,
    string[]
  >
): UseInfiniteQueryResult<NewsInfiniteScrollType, AxiosError> =>
  useInfiniteQuery(
    QUERY_KEYS.company.getListCompanyId(companyName),
    ({ pageParam = 1 }) =>
      NewsRepositoryImpl.getNews({ companyName }, { page: pageParam }),
    {
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      getNextPageParam: (nextPage) => nextPage.nextPage,
    }
  );
