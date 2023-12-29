import { EXTERNALSITE_ITEMS } from "@src/constants/ExternalSite/externalSite.constant";
import * as S from "./style";
import web from "@src/assets/icons/Home/web.svg";

export default function ExternalSite() {
  return (
    <S.ExternalSiteContainer>
      <S.ExternalSiteTitle>
        <img src={web} alt="이미지 없음" />
        <p>더 많은 정보를 알고 싶다면?</p>
      </S.ExternalSiteTitle>

      <S.ExternalSiteItemContainer>
        <S.ExternalSiteItemWrapper>
          {EXTERNALSITE_ITEMS.map((item) => (
            <S.ExternalSiteItem
              key={item.id}
              onClick={() => window.open(item.link, "_blank")}
            >
              <img src={item.logo} alt="이미지 없음" />
              <p>{item.name} 바로가기</p>
            </S.ExternalSiteItem>
          ))}
        </S.ExternalSiteItemWrapper>
      </S.ExternalSiteItemContainer>
    </S.ExternalSiteContainer>
  );
}
