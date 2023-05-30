import { FiX } from "react-icons/fi";
import { CommonWrap, Able, ListContainer, Body } from "../style";
import { getDateText } from "../../../../../libs/Date/getDateCounter";
import stringEllipsis from "../../../../../libs/Common/StringEllipsis";
import { AiFillStar } from "react-icons/ai";
import { useGetMyRegist } from "../../../../../queries/Company/company.query";

export default function Regist() {
  const { data: registList } = useGetMyRegist({
    suspense: true,
  });
  
  return (
    <CommonWrap>
      {registList!!.length > 0 ? (
        registList?.map((regist) => (
          <ListContainer>
            <Able isTop={true}>
              <div style={{ fontSize: "13px" }}>
                {getDateText(new Date(regist.createdAt))} 등록
              </div>
              <FiX size={23} cursor="pointer" />
            </Able>
            <Body>
              <div>
                <img src={regist.imgUrl} alt="" />
              </div>
              <ul>
                <li>
                  {Array.from({ length: regist.totalGrade }).map((idx) => (
                    <AiFillStar color="#ff7f23" size={20} />
                  ))}
                </li>
                <li>바인드</li>
                <li>{stringEllipsis(regist.description, 20)}</li>
                <li>{stringEllipsis(regist.address, 20)}</li>
              </ul>
            </Body>
            <Able isTop={false}>
              <button>수정하기</button>
              <button>상세보기</button>
            </Able>
          </ListContainer>
        ))
      ) : (
        <div>등록한 회사가 없습니다</div>
      )}
    </CommonWrap>
  );
}
