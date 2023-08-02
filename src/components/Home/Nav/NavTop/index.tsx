import {
  HOME_NAV_COMPANY_ITEMS,
  HOME_NAV_FIELD_ITEMS,
} from "../../../../constants/Home/Home.constants";
import * as S from "./style";

export default function NavTop() {
  return (
    <S.NavTopContainer>
      <S.NavTopUl backgroundColor={"#1d1e5a"}>
        {HOME_NAV_COMPANY_ITEMS.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </S.NavTopUl>
      <S.NavTopUl backgroundColor={"#4869f6"}>
        {HOME_NAV_FIELD_ITEMS.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt="이미지 없음" />
            <p>{item.name}</p>
          </li>
        ))}
      </S.NavTopUl>
    </S.NavTopContainer>
  );
}
