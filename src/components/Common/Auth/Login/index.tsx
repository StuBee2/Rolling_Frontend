import * as S from "./style";
import { AUTH_ITEM } from "../../../../constants/Auth/auth.constant";

export default function Login() {
  return (
    <S.LoginContainer>
      <S.LoginBox>
        <S.Logo
          src="https://yt3.googleusercontent.com/ytc/AGIKgqOrkC7r6eXnPTlJlve9Ts_5zrXafqZN3a9acbYDOA=s900-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <div>
          {AUTH_ITEM.map((item) => (
            <S.LoginBtn
              isGoogle={item.isGoogle}
              onClick={()=>window.location.href = item.loginUrl}
            >
              <img src={item.loginProfile} alt="" />
              <span>{item.text}</span>
            </S.LoginBtn>
          ))}
        </div>
      </S.LoginBox>
    </S.LoginContainer>
  );
}