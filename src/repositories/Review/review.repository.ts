import {
  ReviewInfiniteScrollListType,
  ReviewInfoIdInfiniteScrollListType,
  ReviewInfoIdType,
  ReviewMyStatusResponse,
  ReviewPostResponse,
} from "@src/types/Review/review.type";
import { CommonIdParam, CommonPageParam } from "../common.param";

export interface ReviewRepository {
  getMyReviewList({
    page,
  }: CommonPageParam): Promise<ReviewInfiniteScrollListType>;

  getListReviewMemberId(
    { id }: CommonIdParam,
    { page }: CommonPageParam
  ): Promise<ReviewInfiniteScrollListType>;

  getListReviewCompanyId(
    { id }: CommonIdParam,
    { page }: CommonPageParam
  ): Promise<ReviewInfoIdInfiniteScrollListType>;

  getReviewInfoId({ id }: CommonIdParam): Promise<ReviewInfoIdType>;
  getReviewMyStatus(): Promise<ReviewMyStatusResponse>;

  postReview(reviewInfo: ReviewParam): Promise<ReviewPostResponse>;
  deleteMyReview(reviewId: string): Promise<void>;
}

export interface ReviewParam {
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
