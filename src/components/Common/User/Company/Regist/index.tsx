import { useGetMyCompanyListQuery } from "../../../../../queries/Company/company.query";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Able, Body, CommonWrap, ListContainer } from "../style";
import stringEllipsis from "../../../../../libs/Common/stringEllipsis";
import { AiFillStar } from "react-icons/ai";
import { FiX } from "react-icons/fi";
import { getDateText } from "../../../../../libs/Date/getDateCounter";

export default function Regist() {
  const { data: registList, fetchNextPage } = useGetMyCompanyListQuery({
    suspense: true,
  });
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <CommonWrap>
      {registList!!.pages.length > 0 ? (
        registList?.pages.map((data) =>
          data.data.map((regist) => (
            <ListContainer key={regist.companyId.id}>
              <Able isTop={true}>
                <div style={{ fontSize: "13px" }}>
                  {getDateText(new Date(regist.companyDetails.createdAt))} 등록
                </div>
                <FiX size={23} cursor="pointer" />
              </Able>
              <Body>
                <div>
                  <img src={regist.companyDetails.imgUrl} alt="" />
                </div>
                <ul>
                  <li>
                    {Array.from({
                      length: regist.companyGrades.totalGrade,
                    }).map((_, idx) => (
                      <span key={idx}>
                        <AiFillStar color="#ff7f23" size={20} />
                      </span>
                    ))}
                  </li>
                  <li>{regist.companyDetails.name}</li>
                  <li>
                    {stringEllipsis(regist.companyDetails.description, 20)}
                  </li>
                  <li>
                    {stringEllipsis(
                      regist.companyDetails.companyAddress.address,
                      20
                    )}
                  </li>
                </ul>
              </Body>
              <Able isTop={false}>
                <button>수정하기</button>
                <button>상세보기</button>
              </Able>
            </ListContainer>
          ))
        )
      ) : (
        <div>등록한 회사가 없습니다</div>
      )}
      <div ref={ref} />
    </CommonWrap>
  );
}
