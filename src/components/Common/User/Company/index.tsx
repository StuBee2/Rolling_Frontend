import React from "react";
import { Lists } from "../style";
import * as S from "./style";
import { CompanyListType } from "../../../../types/company.type";
import { getDateText } from "../../../../libs/Date/getDateCounter";

interface Props {
  data: CompanyListType[];
}

function CompanyList({ data }: Props) {
  return (
    <>
      {data?.map((company) => (
        <Lists isReview={false} key={company.registrantId}>
          <S.InfoContainer isRow={true}>
            <S.AbleContainer>
              <S.Profile src={company.imgUrl} alt="" />
              <S.CompanyName>{company.id}</S.CompanyName>
            </S.AbleContainer>
            <div>{getDateText(new Date(company.createdAt))}</div>
          </S.InfoContainer>

          <S.InfoContainer isRow={false}>
            <S.CompanyDescription>{company.description}</S.CompanyDescription>
            <S.CompanyAddress>{company.address}</S.CompanyAddress>
          </S.InfoContainer>
        </Lists>
      ))}
    </>
  );
}

export default React.memo(CompanyList);
