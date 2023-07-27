import stringEllipsis from "../../../../../libs/Common/stringEllipsis";
import { getDateText } from "../../../../../libs/Date/getDateCounter";
import { CompanyListType } from "../../../../../types/company.type";
import * as S from "../../style";
import edit from "../../../../../assets/User/edit.svg";
import del from "../../../../../assets/User/del.svg";
import { useState } from "react";

interface Props {
  regist: CompanyListType;
}

export default function RegistItem({ regist }: Props) {
  const [mouseEvent, setMouseEvent] = useState("");

  return (
    <S.ListItem
      key={regist.companyId.id}
      onMouseEnter={() => setMouseEvent(regist.companyId.id)}
      onMouseLeave={() => setMouseEvent("")}
    >
      <S.ListContainer>
        <S.ListRegistDate>
          {getDateText(new Date(regist.companyDetails.createdAt))} 등록
        </S.ListRegistDate>
        <S.CompanyContainer>
          <S.CompanyImg src={regist.companyDetails.imgUrl} />
          <S.CompanyAbleContainer>
            <S.CompanyName>{regist.companyDetails.name}</S.CompanyName>
            <S.CompanyAddress>
              {stringEllipsis(regist.companyDetails.companyAddress.address, 35)}
            </S.CompanyAddress>
          </S.CompanyAbleContainer>
        </S.CompanyContainer>
      </S.ListContainer>
      {mouseEvent === regist.companyId.id && (
        <div style={{ cursor: "pointer" }}>
          <img src={edit} alt="" />
          <img src={del} alt="" />
        </div>
      )}
    </S.ListItem>
  );
}
