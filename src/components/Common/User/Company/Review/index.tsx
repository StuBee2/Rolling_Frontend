// import { useGetMyReviewQuery } from "../../../../../queries/review/review.query";
import { useGetMyReviewQuery } from "../../../../../queries/review/review.query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
// import { Able, Body, CommonWrap, ListContainer } from "../style";
import { FiX } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import stringEllipsis from "../../../../../libs/Common/stringEllipsis";
import { getDateText } from "../../../../../libs/Date/getDateCounter";
import { useReviewDelete } from "../../../../../hooks/FirmReview/useDeleteReview";

export default function Review() {
  const { data: reviewList, fetchNextPage } = useGetMyReviewQuery({
    suspense: true,
  });

  const { onDeleteReview } = useReviewDelete();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <div>
      {reviewList!!.pages.length > 0 ? (
        reviewList?.pages.map((data) =>
          data.data.map((review) => (
            <div key={review.reviewId}>
              <div>
                <div style={{ fontSize: "16px" }}>
                  {getDateText(new Date(review.reviewCreatedAt))} 등록
                </div>
                <FiX
                  size={23}
                  cursor="pointer"
                  onClick={() => onDeleteReview(review.reviewId)}
                />
              </div>
              <div>
                <div>
                  <img src={review.companyImgUrl} alt="" />
                </div>
                <ul>
                  <li>
                    {Array.from({ length: review.totalGrade }).map((_, idx) => (
                      <span key={idx}>
                        <AiFillStar color="#ff7f23" size={20} />
                      </span>
                    ))}
                  </li>
                  <li>
                    {review.companyName} / {review.reviewPosition}
                  </li>
                  <li>{stringEllipsis(review.reviewCareerPath, 20)}</li>
                  <li>{stringEllipsis(review.reviewContent, 20)}</li>
                </ul>
              </div>
              <div>
                <button>수정하기</button>
                <button>상세보기</button>
              </div>
            </div>
          ))
        )
      ) : (
        <div>리뷰한 회사가 없습니다.</div>
      )}
      <div ref={ref} />
    </div>
  );
}
