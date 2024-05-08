import {
  UseInfiniteQueryOptions,
  UseQueryOptions,
  useInfiniteQuery,
  useQuery,
} from "react-query";
import { QUERY_KEYS } from "../../services/queryKey";
import storyApi from "./api";
import { CommonIdParam } from "@src/types/common/commont.type";
import {
  StoryInfiniteScrollListType,
  StoryInfoIdInfiniteScrollListType,
  StoryInfoIdType,
  StoryMyStatusResponse,
} from "@src/types/Story/story.type";
import { AxiosError } from "axios";

export const useGetMyStoryQuery = (
  options?: UseInfiniteQueryOptions<
    StoryInfiniteScrollListType,
    AxiosError,
    StoryInfiniteScrollListType,
    StoryInfiniteScrollListType,
    string
  >
) =>
  useInfiniteQuery(
    QUERY_KEYS.story.getMyStory,
    ({ pageParam = 1 }) => storyApi.getMyStoryList({ page: pageParam }),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      getNextPageParam: (nextPage) => nextPage.nextPage,
      ...options,
    }
  );

export const useGetStoryListMemberIdQuery = (
  { id }: CommonIdParam,
  options?: UseInfiniteQueryOptions<
    StoryInfiniteScrollListType,
    AxiosError,
    StoryInfiniteScrollListType,
    StoryInfiniteScrollListType,
    string[]
  >
) =>
  useInfiniteQuery(
    QUERY_KEYS.story.getStoryListMemberId(id),
    ({ pageParam = 1 }) =>
      storyApi.getListStoryMemberId({ id }, { page: pageParam }),
    {
      enabled: !!id,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      getNextPageParam: (nextPage) => nextPage.nextPage,
      ...options,
    }
  );

export const useGetStoryListCompanyIdQuery = (
  { id }: CommonIdParam,
  options?: UseInfiniteQueryOptions<
    StoryInfoIdInfiniteScrollListType,
    AxiosError,
    StoryInfoIdInfiniteScrollListType,
    StoryInfoIdInfiniteScrollListType,
    string[]
  >
) =>
  useInfiniteQuery(
    QUERY_KEYS.story.getStoryListCompanyId(id),
    ({ pageParam = 1 }) =>
      storyApi.getListStoryCompanyId({ id }, { page: pageParam }),
    {
      enabled: !!id,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      getNextPageParam: (nextPage) => nextPage.nextPage,
      ...options,
    }
  );

export const useGetStoryInfoIdQuery = (
  { id }: CommonIdParam,
  options?: UseQueryOptions<
    StoryInfoIdType,
    AxiosError,
    StoryInfoIdType,
    string[]
  >
) =>
  useQuery(
    QUERY_KEYS.story.getStoryInfoId(id),
    () => storyApi.getStoryInfoId({ id }),
    {
      enabled: !!id,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      ...options,
    }
  );

export const useGetStoryMyStatusQuery = (
  options?: UseQueryOptions<
    StoryMyStatusResponse,
    AxiosError,
    StoryMyStatusResponse,
    string
  >
) =>
  useQuery(
    QUERY_KEYS.story.getStoryMyStatus,
    () => storyApi.getStoryMyStatus(),
    {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      ...options,
    }
  );
