import { customAxios } from "../../libs/Axios/customAxios";
import { ReviewInfoIdType } from "../../types/review.type";
import { ReviewParam } from "./review.param";

class ReviewRepository {
  public async postReview(data: ReviewParam): Promise<void> {
    await customAxios.post("/review", data);
  }
}

export default new ReviewRepository();
