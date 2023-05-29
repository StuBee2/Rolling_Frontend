import { customAxios } from "../../libs/Axios/customAxios";
import { ReviewListType } from "../../types/review.type";

class ReviewRepository {
  public async getMyReviewList(): Promise<ReviewListType[]> {
    const { data } = await customAxios.get("/review/my");
    return data;
  }
}

export default new ReviewRepository();
