import * as S from "./style";
import { AUTH_ITEM } from "../../../../constants/Auth/auth.constant";
import Logo from "../.././../../assets/Logo.png";

export default function Login() {
  return (
    <S.LoginContainer>
      <S.LoginBox>
        <S.Logo src={Logo} alt="" />
        <div>
          {AUTH_ITEM.map((item) => (
            <S.LoginBtn
              isGoogle={item.isGoogle}
              onClick={() => {
                window.location.href = item.loginUrl;
              }}
            >
              <img src={item.loginProfile} alt="" />
              <div>{item.text}</div>
            </S.LoginBtn>
          ))}
        </div>
      </S.LoginBox>
    </S.LoginContainer>
  );
}
