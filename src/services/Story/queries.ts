import {
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  UseQueryOptions,
  UseQueryResult,
  useInfiniteQuery,
  useQuery,
} from "react-query";
import {
  StoryInfiniteScrollListType,
  StoryInfoIdInfiniteScrollListType,
  StoryInfoIdType,
  StoryMyStatusResponse,
} from "@src/types/Story/story.type";
import { AxiosError } from "axios";
import { QUERY_KEYS } from "../../services/queryKey";
import StoryApi from "./api";
import { CommonIdParam } from "@src/types/common/commont.type";

export const useGetMyStoryQuery = () =>
  useInfiniteQuery(
    QUERY_KEYS.story.getMyStory,
    ({ pageParam = 1 }) => StoryApi.getMyStoryList({ page: pageParam }),
    {
      suspense: true,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      getNextPageParam: (nextPage) => nextPage.nextPage,
    }
  );

export const useGetStoryListMemberIdQuery = ({ id }: CommonIdParam) =>
  useInfiniteQuery(
    QUERY_KEYS.story.getStoryListMemberId(id),
    ({ pageParam = 1 }) =>
      StoryApi.getListStoryMemberId({ id }, { page: pageParam }),
    {
      suspense: true,
      enabled: !!id,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      getNextPageParam: (nextPage) => nextPage.nextPage,
    }
  );

export const useGetStoryListCompanyIdQuery = ({ id }: CommonIdParam) =>
  useInfiniteQuery(
    QUERY_KEYS.story.getStoryListCompanyId(id),
    ({ pageParam = 1 }) =>
      StoryApi.getListStoryCompanyId({ id }, { page: pageParam }),
    {
      suspense: true,
      enabled: !!id,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      getNextPageParam: (nextPage) => nextPage.nextPage,
    }
  );

export const useGetStoryInfoIdQuery = ({ id }: CommonIdParam) =>
  useQuery(
    QUERY_KEYS.story.getStoryInfoId(id),
    () => StoryApi.getStoryInfoId({ id }),
    {
      suspense: true,
      enabled: !!id,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

export const useGetStoryMyStatusQuery = () =>
  useQuery(
    QUERY_KEYS.story.getStoryMyStatus,
    () => StoryApi.getStoryMyStatus(),
    {
      suspense: true,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );
