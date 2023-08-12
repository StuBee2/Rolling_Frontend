import { customAxios } from "@src/libs/Axios/customAxios";
import {
  ReviewInfiniteScrollListType,
  ReviewInfoIdType,
  ReviewPostResponse,
} from "@src/types/Review/review.type";
import { CommonIdParam, CommonPageParam } from "../common.param";
import { ReviewParam, ReviewRepository } from "./review.repository";

class ReviewRepositoryImpl implements ReviewRepository {
  public async getMyReviewList({
    page,
  }: CommonPageParam): Promise<ReviewInfiniteScrollListType> {
    const { data } = await customAxios.get(`/review/my?page=${page}&size=10`);
    return { ...data, nextPage: page + 1 };
  }

  public async getListReviewMemberId(
    { id }: CommonIdParam,
    { page }: CommonPageParam
  ): Promise<ReviewInfiniteScrollListType> {
    const { data } = await customAxios.get(
      `/review/list/member/${id}?page=${page}&size=10`
    );
    return { ...data, nextPage: page + 1 };
  }

  public async getListReviewCompanyId(
    { id }: CommonIdParam,
    { page }: CommonPageParam
  ): Promise<ReviewInfiniteScrollListType> {
    const { data } = await customAxios.get(
      `/review/list/company/${id}?page=${page}&size=10`
    );
    return { ...data, nextPage: page + 1 };
  }

  public async getReviewInfoId({
    id,
  }: CommonIdParam): Promise<ReviewInfoIdType> {
    const { data } = await customAxios.get(`/review/info/${id}`);
    return data;
  }

  public async postReview(
    reviewInfo: ReviewParam
  ): Promise<ReviewPostResponse> {
    const { data } = await customAxios.post("/review", reviewInfo);
    return data;
  }
}

export default new ReviewRepositoryImpl();
