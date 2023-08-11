import stringEllipsis from "../../../../../libs/Common/stringEllipsis";
import { getDateText } from "../../../../../util/Date/getDateCounter";
import { CompanyListType } from "../../../../../types/Company/company.type";
import * as S from "../../style";
import edit from "../../../../../assets/User/edit.svg";
import del from "../../../../../assets/User/del.svg";
import { useState } from "react";
import { useDeleteCompany } from "../../../../../hooks/Company/useDeleteCompany";
import { EmploymentResponse } from "../../../../../types/Employment/employment.type";

interface Props {
  employment: EmploymentResponse;
}

export default function EmploymentItem({ employment }: Props) {
  const [mouseEvent, setMouseEvent] = useState("");
  const { handleCompanyDeleteClick } = useDeleteCompany();
  return (
    <S.ListItem
      onMouseEnter={() => setMouseEvent(employment.employerId)}
      onMouseLeave={() => setMouseEvent("")}
    >
      <S.ListContainer>
        <p style={{ fontWeight: "bold" }}>
          {employment.employmentStatus === "HOLD"
            ? "재직 중인 기업"
            : "퇴직한 기업"}
        </p>
        <S.CompanyContainer>
          <S.CompanyImg src={employment.employerImgUrl} />
          <S.CompanyAbleContainer>
            <S.CompanyName>{employment.employerName}</S.CompanyName>
            <S.CompanyAddress>
              {stringEllipsis(employment.employerAddress, 35)}
            </S.CompanyAddress>
          </S.CompanyAbleContainer>
        </S.CompanyContainer>
      </S.ListContainer>
      {mouseEvent === employment.employerId && (
        <div style={{ cursor: "pointer" }}>
          <img src={edit} alt="" />
          <img
            src={del}
            onClick={() => handleCompanyDeleteClick(employment.employerId)}
            alt=""
          />
        </div>
      )}
    </S.ListItem>
  );
}
