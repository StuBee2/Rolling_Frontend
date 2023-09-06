import * as S from "./style";
import category from "@src/assets/Home/category.svg";
import more from "@src/assets/Home/more.svg";
import {
  HOME_NAV_COMPANY_ITEMS,
  HOME_NAV_FIELD_ITEMS,
} from "@src/constants/Home/Home.constants";

export default function Category() {
  return (
    <S.CategoryContainer>
      <div>
        <S.InterestCategoryBox>
          <div>
            <img src={category} alt="이미지 없음" />
            <p>관심 카테고리</p>
          </div>
          <img src={more} alt="이미지 없음" />
        </S.InterestCategoryBox>
      </div>
      <S.CompanyCategoryUl>
        {HOME_NAV_COMPANY_ITEMS.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </S.CompanyCategoryUl>

      <S.FieldCategoryUl>
        {HOME_NAV_FIELD_ITEMS.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt="이미지없음" />
            <p>{item.name}</p>
          </li>
        ))}
      </S.FieldCategoryUl>
    </S.CategoryContainer>
  );
}
