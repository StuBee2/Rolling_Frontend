import * as S from "../style";
import { Container, Explain, Title } from "../../Profile/style";
import company from "../../../../assets/User/company.svg";
import { useGetMyEmploymenyListQuery } from "../../../../queries/Employment/employment.query";
import EmploymentItem from "./EmploymentItem";

export default function Regist() {
  const { data: employmentList } = useGetMyEmploymenyListQuery({
    suspense: true,
  });
  return (
    <Container>
      <Title>
        <S.FontSize fontSize="30px">내 기업 History</S.FontSize>
        <Explain>내가 등록한 회사의 고용관계를 보여줘요</Explain>
      </Title>
      <S.CompanyStatus>
        <img src={company} alt="" />
        <S.ContentGap>
          <S.CompanyAndWriteText>Company</S.CompanyAndWriteText>
          <S.FontSize fontSize="11px">
            업데이트 갯수 {employmentList?.length}
          </S.FontSize>
        </S.ContentGap>
      </S.CompanyStatus>

      <S.ListWrap>
        {employmentList?.map((data) => (
          <EmploymentItem employment={data} key={data.employerId} />
        ))}
      </S.ListWrap>
    </Container>
  );
}