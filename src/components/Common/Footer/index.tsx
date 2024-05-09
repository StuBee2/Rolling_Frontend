import * as S from "./style";
import logo from "@src/assets/icons/Logo/logo.svg";
import {
  FOOTER_ITEMS,
  FOOTER_MEMBERS_ITEMS,
} from "@src/constants/Footer/footer.constant";
import { Row } from "@src/styles/flex";

export const Footer = () => {
  return (
    <S.FooterContainer>
      <S.FooterWrapper>
        <S.LogoAndFooterItem>
          <S.LogoContainer>
            <S.LogoWrapper onClick={() => (window.location.href = "/")}>
              <img src={logo} alt="이미지 없음" />
              <p>Rolling</p>
            </S.LogoWrapper>
            <S.Introduce>
              Rolling은 직업계고 학생들을 돕기 위한 졸업생 취업 정보 리뷰
              서비스입니다.
            </S.Introduce>
          </S.LogoContainer>

          <S.FooterItemContainer>
            {FOOTER_ITEMS.map((item) => (
              <li
                key={item.id}
                onClick={() => window.open(item.link, "_blank")}
              >
                {item.name}
              </li>
            ))}
          </S.FooterItemContainer>
        </S.LogoAndFooterItem>

        <S.EtcContainer>
          <Row $columnGap={"5px"}>
            <S.TeamStubee>Team StuBee</S.TeamStubee>
            <S.MemberItemUl>
              {FOOTER_MEMBERS_ITEMS.map((item) => (
                <li
                  key={item.id}
                  onClick={() => window.open(item.link, "_blank")}
                >
                  {item.name}
                </li>
              ))}
            </S.MemberItemUl>
          </Row>
          <p>
            주소: 대구 달성군 구지면 창리로11길 93
            (대구소프트웨어마이스터고등학교)
          </p>
        </S.EtcContainer>
      </S.FooterWrapper>
    </S.FooterContainer>
  );
};

export default Footer;
