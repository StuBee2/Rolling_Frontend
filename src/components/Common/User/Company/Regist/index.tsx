import { FiX } from "react-icons/fi";
import { CommonWrap, ScrollBox, Able, ListContainer } from "../style";
import * as S from "./style";
import { CompanyListType } from "../../../../../types/company.type";
import { getDateText } from "../../../../../libs/Date/getDateCounter";

interface Props {
  data: CompanyListType[];
}

export default function Regist({ data }: Props) {
  return (
    <CommonWrap>
      <ScrollBox>
        {/* {data.length > 0 ? (
          data.map((regist) => (
            <ListContainer>
              <Able isTop={true}>
                <div style={{ fontWeight: "bold", fontSize: "17px" }}>
                  등록완료
                </div>
                <FiX size={23} color="#999999" cursor="pointer" />
              </Able>
              <S.RegistBody>
                <img src={regist.imgUrl} alt="" />
                <ul>
                  <S.RegistLi isDate={true}>
                    {getDateText(new Date(regist.createdAt))} 등록
                  </S.RegistLi>
                  <S.RegistLi>{regist.name}</S.RegistLi>
                  <S.RegistLi>{regist.description}</S.RegistLi>
                  <S.RegistLi isAddress={true}>{regist.address}</S.RegistLi>
                </ul>
              </S.RegistBody>
              <Able isTop={false}>
                <button>수정하기</button>
                <button>상세보기</button>
              </Able>
            </ListContainer>
          ))
        ) : (
          <div>등록한 회사가 없습니다</div>
        )} */}
        {Array.from({ length: 5 }).map((idx) => (
          <ListContainer>
            <Able isTop={true}>
              <div style={{ fontWeight: "bold", fontSize: "17px" }}>
                등록완료
              </div>
              <FiX size={23} color="#999999" cursor="pointer" />
            </Able>
            <S.RegistBody>
              <img src="" alt="" />
              <ul>
                <S.RegistLi isDate={true}>4일전 등록</S.RegistLi>
                <S.RegistLi>바인드</S.RegistLi>
                <S.RegistLi>
                  대소마고 학생들을 위한 스마트스쿨 플렛폼
                </S.RegistLi>
                <S.RegistLi isAddress={true}>
                  대구소프트웨어마이스터고
                </S.RegistLi>
              </ul>
            </S.RegistBody>
            <Able isTop={false}>
              <button>수정하기</button>
              <button>상세보기</button>
            </Able>
          </ListContainer>
        ))}
      </ScrollBox>
    </CommonWrap>
  );
}
