import { useGetMyCompanyListQuery } from "../../../../queries/Company/company.query";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import * as S from "../style";
import { Container, Explain, Title } from "../../Profile/style";
import company from "../../../../assets/User/company.svg";
import { getTimeAgo } from "../../../../libs/Date/getTimeAgo";
import RegistItem from "./RegistItem";

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
    <Container>
      <Title>
        <S.FontSize fontSize="30px">내 리뷰 Story</S.FontSize>
        <Explain>
          기본 정보와 서비스에서 이용되는 프로필을 설정할 수 있어요
        </Explain>
      </Title>
      <S.CompanyStatus>
        <img src={company} alt="" />
        <S.ContentGap>
          <S.CompanyAndWriteText>Company</S.CompanyAndWriteText>
          <S.FontSize fontSize="11px">
            {registList?.pages[0].data[0]
              ? getTimeAgo(
                  new Date(
                    registList?.pages[0].data[0].companyDetails.createdAt!!
                  )
                )
              : "0"}{" "}
            업데이트 · 갯수 2
          </S.FontSize>
        </S.ContentGap>
      </S.CompanyStatus>

      <S.ListWrap>
        {registList?.pages.map((data) =>
          data.data.map((regist) => (
            <RegistItem regist={regist} key={regist.companyId.id} />
          ))
        )}
      </S.ListWrap>
      <div ref={ref} />
    </Container>
  );
}
