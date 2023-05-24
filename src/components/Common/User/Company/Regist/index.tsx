import { FiX } from "react-icons/fi";
import { CommonWrap, Able, ListContainer, Body } from "../style";
import { CompanyListType } from "../../../../../types/company.type";
import { getDateText } from "../../../../../libs/Date/getDateCounter";
import stringEllipsis from "../../../../../libs/Common/StringEllipsis";

interface Props {
  data: CompanyListType[];
}

export default function Regist({ data }: Props) {
  return (
    <CommonWrap>
      {data.length > 0 ? (
        data.map((regist) => (
          <ListContainer>
            <Able isTop={true}>
              <div style={{ fontSize: "13px" }}>
                {getDateText(new Date(regist.createdAt))} 등록
              </div>
              <FiX size={23} cursor="pointer" />
            </Able>
            <Body>
              <img src={regist.imgUrl} alt="" />
              <ul>
                <li>{regist.name}</li>
                <li>{stringEllipsis(regist.description, 35)}</li>
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
