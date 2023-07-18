import { useNavigate } from "react-router-dom";
import useHideHeader from "../../../hooks/Common/useHideHeader";
import * as S from "./style";

export default function NotFound() {
  const navigate = useNavigate();
  useHideHeader();
  return (
    <S.ErrorContainer>
      <S.ErrorBox>
        <S.ErrorText isNumber={true}>404</S.ErrorText>
        <S.ErrorText isNumber={false}>페이지를 찾을 수 없습니다!</S.ErrorText>
        <S.Gohome onClick={() => navigate("/")}>홈으로</S.Gohome>
      </S.ErrorBox>
    </S.ErrorContainer>
  );
}
