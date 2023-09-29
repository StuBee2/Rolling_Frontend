import useTokenCheck from "@src/hooks/Auth/useTokenCheck";
import { useCustomHeader } from "@src/hooks/Common/useCustomHeader";
import Banner from "./Banner";
import Form from "./Form";
import * as S from "./style";

export default function Register() {
  useTokenCheck();
  useCustomHeader(S.RegisterCustomHeader);
  return (
    <S.RegisterContainer>
      <Banner />
      <Form />
    </S.RegisterContainer>
  );
}
