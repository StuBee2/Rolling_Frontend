import * as S from "./style";
import Rank from "./Main/Rank";
import Nav from "./Nav";
import Footer from "../Common/Footer";
import Recommand from "./Recommand";
import { useRecoilValue } from "recoil";
import { SearchCompanyAtom } from "@src/stores/company/company.store";
import Search from "./Main/Search";
import { useAuthTopScroll } from "@stubee2/stubee2-rolling-util";
import { Row } from "@src/styles/flex";

const Home = () => {
  const searchCompany = useRecoilValue(SearchCompanyAtom);
  useAuthTopScroll();
  return (
    <S.HomeContainer>
      <S.HomeWrapper>
        <Row $width={"100%"} $height={"100%"} $columnGap={"10px"}>
          {searchCompany ? <Search company={searchCompany} /> : <Rank />}
          <Nav />
        </Row>
        <Recommand />
      </S.HomeWrapper>
      <Footer />
    </S.HomeContainer>
  );
};

export default Home;
