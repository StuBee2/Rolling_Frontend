import { useNavigate } from "react-router-dom";
import useHideHeader from "@src/hooks/Header/useHideHeader";
import * as S from "./style";
import { Row } from "@src/styles/flex";

const NotFound = () => {
  const navigate = useNavigate();
  useHideHeader();
  return (
    <Row
      $width={"100%"}
      $height={"100vh"}
      $alignItems={"center"}
      $justifyContent={"center"}
    >
      <S.ErrorBox>
        <S.ErrorText>404</S.ErrorText>
        <p>페이지를 찾을 수 없습니다.</p>
        <S.GoHomeBtn onClick={() => navigate("/")}>홈으로</S.GoHomeBtn>
      </S.ErrorBox>
    </Row>
  );
};

export default NotFound;
