import { useGetMyCompanyListQuery } from "../../../../queries/Company/company.query";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import * as S from "../style";
import stringEllipsis from "../../../../libs/Common/StringEllipsis";
import { getDateText } from "../../../../libs/Date/getDateCounter";
import { Container, Explain, Title } from "../../Profile/style";
import company from "../../../../assets/company.svg";
import { getTimeAgo } from "../../../../libs/Date/getTimeAgo";
import edit from "../../../../assets/edit.svg";
import del from "../../../../assets/del.svg";
import { useNavigate } from "react-router-dom";
import { useCompanyDelete } from "../../../../hooks/Firm/useCompanyDelete";

export default function Regist() {
  const { data: registList, fetchNextPage } = useGetMyCompanyListQuery({
    suspense: true,
  });
  const { ref, inView } = useInView();
  const [mouseEvent, setMouseEvent] = useState("");
  const navigate = useNavigate();
  const { onDeleteCompany } = useCompanyDelete();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <Container>
      <Title>
        <div style={{ fontSize: "30px" }}>내 기업 History</div>
        <Explain>
          기본 정보와 서비스에서 이용되는 프로필을 설정할 수 있어요
        </Explain>
      </Title>
      <div style={{ width: "90%" }}>
        <S.CompanyStatus>
          <img src={company} alt="" />
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div style={{ fontSize: "20px", fontWeight: "bold" }}>Company</div>
            <div style={{ fontSize: "11px" }}>
              {registList?.pages[0].data[0]
                ? getTimeAgo(
                    new Date(
                      registList?.pages[0].data[0].companyDetails.createdAt!!
                    )
                  )
                : "0"}{" "}
              업데이트 · 갯수 2
            </div>
          </div>
        </S.CompanyStatus>
      </div>

      <S.ListWrap>
        {registList?.pages.map((data) =>
          data.data.map((regist) => (
            <div
              style={{ display: "flex", width: "100%", gap: "20px" }}
              key={regist.companyId.id}
              onMouseEnter={() => setMouseEvent(regist.companyId.id)}
              onMouseLeave={() => setMouseEvent("")}
            >
              <S.ListContainer
                onClick={() => navigate(`/registe/${regist.companyId.id}`)}
              >
                <S.ListRegistDate>
                  {getDateText(new Date(regist.companyDetails.createdAt))} 등록
                </S.ListRegistDate>
                <S.CompanyContainer>
                  <S.CompanyImg src={regist.companyDetails.imgUrl} />
                  <S.CompanyAbleContainer>
                    <S.CompanyName>{regist.companyDetails.name}</S.CompanyName>
                    <S.CompanyAddress>
                      {stringEllipsis(
                        regist.companyDetails.companyAddress.address,
                        35
                      )}
                    </S.CompanyAddress>
                  </S.CompanyAbleContainer>
                </S.CompanyContainer>
              </S.ListContainer>
              {mouseEvent === regist.companyId.id && (
                <div style={{ cursor: "pointer" }}>
                  <img
                    src={edit}
                    alt=""
                    onClick={() => navigate("/register")}
                  />
                  <img
                    src={del}
                    alt=""
                    onClick={() => onDeleteCompany(regist.companyId.id)}
                  />
                </div>
              )}
            </div>
          ))
        )}
      </S.ListWrap>
      <div ref={ref} />
    </Container>
  );
}
