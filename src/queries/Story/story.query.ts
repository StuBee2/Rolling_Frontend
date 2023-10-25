import {
  UseInfiniteQueryOptions,
  UseInfiniteQueryResult,
  UseQueryOptions,
  UseQueryResult,
  useInfiniteQuery,
  useMutation,
  useQuery,
} from "react-query";
import StoryRepositoryImpl from "@src/repositories/Story/story.repositoryImpl";
import {
  StoryCompanyContentsType,
  StoryInfiniteScrollListType,
  StoryInfoIdInfiniteScrollListType,
  StoryInfoIdType,
  StoryMyStatusResponse,
} from "@src/types/Story/story.type";
import { AxiosError } from "axios";
import { CommonIdParam } from "@src/repositories/common.param";
import { QUERY_KEYS } from "../queryKey";
import { StoryParam } from "@src/repositories/Story/story.repository";

export const useGetMyStoryQuery = (
  options?: UseInfiniteQueryOptions<
    StoryInfiniteScrollListType,
    AxiosError,
    StoryInfiniteScrollListType,
    StoryInfiniteScrollListType,
    string
  >
): UseInfiniteQueryResult<StoryInfiniteScrollListType, AxiosError> =>
  useInfiniteQuery(
    QUERY_KEYS.story.getMyStory,
    ({ pageParam = 1 }) =>
      StoryRepositoryImpl.getMyStoryList({ page: pageParam }),
    {
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      getNextPageParam: (nextPage) => nextPage.nextPage,
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
): UseInfiniteQueryResult<StoryInfiniteScrollListType, AxiosError> =>
  useInfiniteQuery(
    QUERY_KEYS.story.getStoryListMemberId(id),
    ({ pageParam = 1 }) =>
      StoryRepositoryImpl.getListStoryMemberId({ id }, { page: pageParam }),
    {
      enabled: !!id,
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      getNextPageParam: (nextPage) => nextPage.nextPage,
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
): UseInfiniteQueryResult<StoryInfoIdInfiniteScrollListType, AxiosError> =>
  useInfiniteQuery(
    QUERY_KEYS.story.getStoryListCompanyId(id),
    ({ pageParam = 1 }) =>
      StoryRepositoryImpl.getListStoryCompanyId({ id }, { page: pageParam }),
    {
      ...options,
      enabled: !!id,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
      getNextPageParam: (nextPage) => nextPage.nextPage,
    }
  );

export const useGetstoryInfoIdQuery = (
  { id }: CommonIdParam,
  options?: UseQueryOptions<
    StoryInfoIdType,
    AxiosError,
    StoryInfoIdType,
    string[]
  >
): UseQueryResult<StoryInfoIdType, AxiosError> =>
  useQuery(
    QUERY_KEYS.story.getStoryInfoId(id),
    () => StoryRepositoryImpl.getStoryInfoId({ id }),
    {
      enabled: !!id,
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

export const useGetStoryMyStatusQuery = (
  options?: UseQueryOptions<
    StoryMyStatusResponse,
    AxiosError,
    StoryMyStatusResponse,
    string
  >
): UseQueryResult<StoryMyStatusResponse, AxiosError> =>
  useQuery(
    QUERY_KEYS.story.getStoryMyStatus,
    () => StoryRepositoryImpl.getStoryMyStatus(),
    {
      ...options,
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 60,
    }
  );

export const usePostStoryMutation = () => {
  const mutation = useMutation((storyInfo: StoryParam) =>
    StoryRepositoryImpl.postStory(storyInfo)
  );
  return mutation;
};

export const useDeleteMyStoryMutation = () => {
  const mutation = useMutation((storyId: string) =>
    StoryRepositoryImpl.deleteMyStory(storyId)
  );
  return mutation;
};

export const usePutMyStoryMutation = () => {
  const mutation = useMutation(
    (input: { storyId: string; storyContent: StoryCompanyContentsType }) =>
      StoryRepositoryImpl.patchMyStory(input)
  );
  return mutation;
};
