import { useNavigate } from "react-router-dom";
import useHideHeader from "@src/hooks/Common/useHideHeader";
import * as S from "./style";

export default function NotFound() {
  const navigate = useNavigate();
  useHideHeader();
  return (
    <S.ErrorContainer>
      <S.ErrorBox>
        <S.ErrorText>404</S.ErrorText>
        <p>페이지를 찾을 수 없음</p>
        <S.GoHomeBtn onClick={() => navigate("/")}>홈으로</S.GoHomeBtn>
      </S.ErrorBox>
    </S.ErrorContainer>
  );
}
