import { AUTH_ITEM } from "../../../../../constants/Auth/auth.constant";
import * as S from "./style";

export default function Social() {
  return (
    <S.LoginBtnCotainer>
      {AUTH_ITEM.map((item) => (
        <S.LoginBtn
          key={item.id}
          style={item.customStyle}
          onClick={(e) => {
            e.preventDefault();
            window.location.href = item.loginUrl;
          }}
        >
          <img src={item.loginImg} alt="이미지 없음" />
          <div>{item.text}</div>
        </S.LoginBtn>
      ))}
    </S.LoginBtnCotainer>
  );
}
