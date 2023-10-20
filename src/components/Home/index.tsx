import * as S from "./style";
import Rank from "./Main/Rank";
import Nav from "./Nav";
import Footer from "../Common/Footer";
import Recommand from "./Recommand";
import { useRecoilValue } from "recoil";
import { SearchCompanyAtom } from "@src/stores/company/company.store";
import Search from "./Main/Search";

export default function Home() {
  const searchCompany = useRecoilValue(SearchCompanyAtom);
  return (
    <S.HomeContainer>
      <S.HomeWrapper>
        <S.HomeContent>
          {searchCompany ? <Search company={searchCompany} /> : <Rank />}
          <Nav />
        </S.HomeContent>
        <Recommand />
      </S.HomeWrapper>
      <Footer />
    </S.HomeContainer>
  );
}
