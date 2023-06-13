import {
  ReviewInfiniteScrollListType,
  ReviewListType,
  ReviewPostResponse,
} from "../../types/review.type";
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
  ): Promise<ReviewInfiniteScrollListType>;

  getReviewInfoId({ id }: CommonIdParam): Promise<ReviewListType[]>;

  postReview(reviewInfo: ReviewParam): Promise<ReviewPostResponse>;
}

export interface ReviewParam {
  companyId: string;
  content: string;
  position: string;
  careerPath: string;
  balanceGrade: number;
  salaryGrade: number;
  welfareGrade: number;
}
