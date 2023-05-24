import { FiX } from "react-icons/fi";
import { Able, Body, CommonWrap, ListContainer } from "../style";
import { AiFillStar } from "react-icons/ai";
import stringEllipsis from "../../../../../libs/Common/StringEllipsis";
import { ReviewListType } from "../../../../../types/review.type";
import { getDateText } from "../../../../../libs/Date/getDateCounter";

interface Props {
  data: ReviewListType[];
}

export default function Review({ data }: Props) {
  return (
    <CommonWrap>
      {data.length > 0 ? (
        data.map((review) => (
          <ListContainer>
            <Able isTop={true}>
              <div style={{ fontSize: "13px" }}>
                {getDateText(new Date(review.reviewCreatedAt))} 등록
              </div>
              <FiX size={23} cursor="pointer" />
            </Able>
            <Body>
              <img src="" alt="" />
              <ul>
                <li>
                  {Array.from({ length: review.totalGrade }).map((idx) => (
                    <AiFillStar color="#ff7f23" size={20} />
                  ))}
                </li>
                <li>
                  {review.companyName} / {review.reviewPosition}
                </li>
                <li>{stringEllipsis(review.reviewCareerPath, 30)}</li>
                <li>{stringEllipsis(review.reviewContent, 30)}</li>
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
