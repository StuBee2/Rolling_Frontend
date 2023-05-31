import { customAxios } from "../../libs/Axios/customAxios";
import { ReviewListType } from "../../types/review.type";
import { CommonIdParam, CommonPageParam } from "../common.param";
import { ReviewRepository } from "./review.repository";

class ReviewRepositoryImpl implements ReviewRepository {
  public async getMyReviewList({
    page,
    size,
  }: CommonPageParam): Promise<ReviewListType[]> {
    const { data } = await customAxios.get(
      `/review/my?page=${page}&size=${size}`
    );
    return data;
  }

  public async getListReviewMemberId(
    { id }: CommonIdParam,
    { page, size }: CommonPageParam
  ): Promise<ReviewListType[]> {
    const { data } = await customAxios.get(
      `/review/list/member/${id}?page=${page}&size=${size}`
    );
    return data;
  }

  public async getListReviewCompanyId(
    { id }: CommonIdParam,
    { page, size }: CommonPageParam
  ): Promise<ReviewListType[]> {
    const { data } = await customAxios.get(
      `/review/list/company/${id}?page=${page}&size=${size}`
    );
    return data;
  }

  public async getReviewInfoId({
    id,
  }: CommonIdParam): Promise<ReviewListType[]> {
    const { data } = await customAxios.get(`/review/info/${id}`);
    return data;
  }
}

export default new ReviewRepositoryImpl();
