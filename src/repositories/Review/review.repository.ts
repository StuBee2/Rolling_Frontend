import { ReviewListType } from "../../types/review.type";
import { CommonIdParam, CommonPageParam } from "../common.param";

export interface ReviewRepository {
  getMyReviewList({ page, size }: CommonPageParam): Promise<ReviewListType[]>;

  getListReviewMemberId(
    { id }: CommonIdParam,
    { page, size }: CommonPageParam
  ): Promise<ReviewListType[]>;

  getListReviewCompanyId(
    { id }: CommonIdParam,
    { page, size }: CommonPageParam
  ): Promise<ReviewListType[]>;

  getReviewInfoId({ id }: CommonIdParam): Promise<ReviewListType[]>;
}
