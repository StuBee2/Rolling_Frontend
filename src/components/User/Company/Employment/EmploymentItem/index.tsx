import * as S from "./style";
import edit from "@src/assets/User/edit.svg";
import del from "@src/assets/User/del.svg";
import { useState } from "react";
import { EmploymentResponse } from "@src/types/Employment/employment.type";
import { DelAndEditContainer } from "../../style";
import { stringEllipsis } from "@stubee2/stubee2-rolling-util";

interface Props {
  employment: EmploymentResponse;
}

export default function EmploymentItem({ employment }: Props) {
  const [mouseEvent, setMouseEvent] = useState("");
  return (
    <S.EmploymentItemContainer
      onMouseLeave={() => setMouseEvent(employment?.employerId)}
    >
      <S.EmploymentItemWrapper onMouseEnter={() => setMouseEvent("")}>
        <S.EmploymentItem>
          <S.EmploymentStatusAndRegisteredContainer>
            <S.EmploymenyCompanyAddress>
              {employment.employerAddress}
            </S.EmploymenyCompanyAddress>
            <S.EmploymentStatusText>
              {employment.employmentStatus === "HOLD"
                ? "재직 중인 기업"
                : "퇴직한 기업"}
            </S.EmploymentStatusText>
          </S.EmploymentStatusAndRegisteredContainer>
          <S.EmplymentInfoContainer>
            <img src={employment.employerImgUrl || ""} alt="이미지 없음" />
            <div>
              <S.EmployerName>{employment.employerName}</S.EmployerName>
              <S.EmployerDescription>
                {stringEllipsis(employment.employerDescription, 30)}
              </S.EmployerDescription>
            </div>
          </S.EmplymentInfoContainer>
        </S.EmploymentItem>
      </S.EmploymentItemWrapper>
      {mouseEvent === employment?.employerId && (
        <DelAndEditContainer>
          <img src={edit} alt="이미지 없음" />
          <img src={del} alt="이미지 없음" />
        </DelAndEditContainer>
      )}
    </S.EmploymentItemContainer>
  );
}
