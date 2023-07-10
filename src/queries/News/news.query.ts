import {
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  useInfiniteQuery,
} from "react-query";
import { NewsCompanyNameParam } from "../../repositories/News/news.repository";
import { AxiosError } from "axios";
import { QUERY_KEYS } from "../queryKey";
import NewsRepositoryImpl from "../../repositories/News/news.repositoryImpl";
import { NewsInfiniteScrollType } from "../../types/news.type";

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
      getNextPageParam: (nextPage) => nextPage.nextPage,
    }
  );
