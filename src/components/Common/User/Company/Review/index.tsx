import { FiX } from "react-icons/fi";
import { Able, Body, CommonWrap, ListContainer } from "../style";
import { AiFillStar } from "react-icons/ai";
import stringEllipsis from "../../../../../libs/Common/StringEllipsis";
import { getDateText } from "../../../../../libs/Date/getDateCounter";

import { useGetMyReview } from "../../../../../queries/Review/review.query";

export default function Review() {
  const { data: reviewList } = useGetMyReview(
    { page: 1, size: 10 },
    { suspense: true }
  );

  return (
    <CommonWrap>
      {reviewList!!.length > 0 ? (
        reviewList?.map((review) => (
          <ListContainer>
            <Able isTop={true}>
              <div style={{ fontSize: "13px" }}>
                {getDateText(new Date(review.reviewCreatedAt))} 등록
              </div>
              <FiX size={23} cursor="pointer" />
            </Able>
            <Body>
              <div>
                <img src={review.companyImgUrl} alt="" />
              </div>
              <ul>
                <li>
                  {Array.from({ length: 5 }).map((idx) => (
                    <AiFillStar color="#ff7f23" size={20} />
                  ))}
                </li>
                <li>
                  {review.companyName} / {review.reviewPosition}
                </li>
                <li>{stringEllipsis(review.reviewCareerPath, 20)}</li>
                <li>{stringEllipsis(review.reviewContent, 20)}</li>
              </ul>
            </Body>
            <Able isTop={false}>
              <button>수정하기</button>
              <button>상세보기</button>
            </Able>
          </ListContainer>
        ))
      ) : (
        <div>리뷰한 회사가 없습니다.</div>
      )}
    </CommonWrap>
  );
}
