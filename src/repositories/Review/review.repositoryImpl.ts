import { customAxios, rollingAxios } from "@src/libs/Axios/customAxios";
import {
  ReviewInfiniteScrollListType,
  ReviewInfoIdInfiniteScrollListType,
  ReviewInfoIdType,
  ReviewMyStatusResponse,
  ReviewPostResponse,
} from "@src/types/Review/review.type";
import { CommonIdParam, CommonPageParam } from "../common.param";
import { ReviewParam, ReviewRepository } from "./review.repository";

class ReviewRepositoryImpl implements ReviewRepository {
  public async getMyReviewList({
    page,
  }: CommonPageParam): Promise<ReviewInfiniteScrollListType> {
    const { data } = await rollingAxios.get(`/story/my?page=${page}&size=10`);
    return { ...data, nextPage: page + 1 };
  }

  public async getListReviewMemberId(
    { id }: CommonIdParam,
    { page }: CommonPageParam
  ): Promise<ReviewInfiniteScrollListType> {
    const { data } = await rollingAxios.get(
      `/story/list/member/${id}?page=${page}&size=10`
    );
    return { ...data, nextPage: page + 1 };
  }

  public async getListReviewCompanyId(
    { id }: CommonIdParam,
    { page }: CommonPageParam
  ): Promise<ReviewInfoIdInfiniteScrollListType> {
    const { data } = await customAxios.get(
      `/story/list/company/${id}?page=${page}&size=10`
    );
    return { ...data, nextPage: page + 1 };
  }

  public async getReviewInfoId({
    id,
  }: CommonIdParam): Promise<ReviewInfoIdType> {
    const { data } = await customAxios.get(`/story/info/${id}`);
    return data;
  }

  public async getReviewMyStatus(): Promise<ReviewMyStatusResponse> {
    const { data } = await rollingAxios.get("/story/my/status");
    return data;
  }

  public async postReview(
    reviewInfo: ReviewParam
  ): Promise<ReviewPostResponse> {
    const { data } = await rollingAxios.post("/story", reviewInfo);
    return data;
  }

  public async deleteMyReview(reviewId: string): Promise<void> {
    await rollingAxios.delete(`/story/${reviewId}`);
  }
}

export default new ReviewRepositoryImpl();
