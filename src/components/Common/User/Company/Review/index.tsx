import { FiX } from "react-icons/fi";
import { Able, CommonWrap, ListContainer, ScrollBox } from "../style";
import * as S from "./style";
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
      <ScrollBox>
        {data.length > 0 ? (
          data.map((review) => (
            <ListContainer>
              <Able isTop={true}>
                <div>
                  {Array.from({ length: review.grade }).map((idx) => (
                    <AiFillStar color="#FAF270" size={20} />
                  ))}
                </div>
                <FiX size={23} color="#999999" cursor="pointer" />
              </Able>
              <S.ReviewBody>
                <div style={{ color: "#999999", fontSize: "13px" }}>
                  {getDateText(new Date(review.createdAt))} 등록
                </div>
                <div>{review.position}</div>
                <div>{stringEllipsis(review.careerPath, 30)}</div>
                <div>{stringEllipsis(review.content, 30)}</div>
              </S.ReviewBody>
              <Able isTop={false}>
                <button>수정하기</button>
                <button>상세보기</button>
              </Able>
            </ListContainer>
          ))
        ) : (
          <div>리뷰한 회사가 없습니다.</div>
        )}
      </ScrollBox>
    </CommonWrap>
  );
}
