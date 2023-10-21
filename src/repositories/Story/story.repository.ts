import {
  StoryInfiniteScrollListType,
  StoryInfoIdInfiniteScrollListType,
  StoryInfoIdType,
  StoryMyStatusResponse,
  StoryPostResponse,
} from "@src/types/Story/story.type";
import { CommonIdParam, CommonPageParam } from "../common.param";

export interface StoryRepository {
  getMyStoryList({
    page,
  }: CommonPageParam): Promise<StoryInfiniteScrollListType>;

  getListStoryMemberId(
    { id }: CommonIdParam,
    { page }: CommonPageParam
  ): Promise<StoryInfiniteScrollListType>;

  getListStoryCompanyId(
    { id }: CommonIdParam,
    { page }: CommonPageParam
  ): Promise<StoryInfoIdInfiniteScrollListType>;

  getStoryInfoId({ id }: CommonIdParam): Promise<StoryInfoIdType>;
  getStoryMyStatus(): Promise<StoryMyStatusResponse>;

  postStory(StoryInfo: StoryParam): Promise<StoryPostResponse>;
  deleteMyStory(StoryId: string): Promise<void>;
}

export interface StoryParam {
  companyId: string;
  position: string;
  schoolLife: string;
  preparationCourse: string;
  employmentProcess: string;
  interviewQuestion: string;
  mostImportantThing: string;
  welfare: string;
  commuteTime: string;
  meal: string;
  advantages: string;
  disAdvantages: string;
  salaryAndBenefits: number;
  workLifeBalance: number;
  organizationalCulture: number;
  careerAdvancement: number;
}
