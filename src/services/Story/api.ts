import { customAxios, rollingAxios } from "@src/libs/Axios/RollingAxios";
import {
  StoryCompanyContentsType,
  StoryInfiniteScrollListType,
  StoryInfoIdInfiniteScrollListType,
  StoryInfoIdType,
  StoryMyStatusResponse,
  StoryPostType,
} from "@src/types/Story/story.type";
import { CommonPageParam, CommonIdParam } from "@src/types/common/commont.type";

class StoryApi {
  public async getMyStoryList({
    page,
  }: CommonPageParam): Promise<StoryInfiniteScrollListType> {
    const { data } = await rollingAxios.get(`/story/my?page=${page}&size=10`);
    return { ...data, nextPage: page + 1 };
  }

  public async getListStoryMemberId(
    { id }: CommonIdParam,
    { page }: CommonPageParam
  ): Promise<StoryInfiniteScrollListType> {
    const { data } = await rollingAxios.get(
      `/story/list/member/${id}?page=${page}&size=10`
    );
    return { ...data, nextPage: page + 1 };
  }

  public async getListStoryCompanyId(
    { id }: CommonIdParam,
    { page }: CommonPageParam
  ): Promise<StoryInfoIdInfiniteScrollListType> {
    const { data } = await customAxios.get(
      `/story/list/company/${id}?page=${page}&size=10`
    );
    return { ...data, nextPage: page + 1 };
  }

  public async getStoryInfoId({ id }: CommonIdParam): Promise<StoryInfoIdType> {
    const { data } = await customAxios.get(`/story/info/${id}`);
    return data;
  }

  public async getStoryMyStatus(): Promise<StoryMyStatusResponse> {
    const { data } = await rollingAxios.get("/story/my/status");
    return data;
  }

  public async postStory(storyInfo: StoryPostType): Promise<StoryPostType> {
    const { data } = await rollingAxios.post("/story", storyInfo);
    return data;
  }

  public async deleteMyStory(storyId: string): Promise<void> {
    await rollingAxios.delete(`/story/${storyId}`);
  }

  public async patchMyStory(input: {
    storyId: string;
    storyContent: StoryCompanyContentsType;
  }): Promise<void> {
    await rollingAxios.patch(`/story/${input.storyId}`, input.storyContent);
  }
}

export default new StoryApi();
