import { useCertify } from "@src/hooks/Graduate/useCertify";
import * as S from "./style";
import { Button } from "@stubee2/stubee2-rolling-ui";
import useTokenCheck from "@src/hooks/Auth/useTokenCheck";

const Certify = () => {
  useTokenCheck();
  const { handleQuestionChange, handleGraduateCertified, housemaster } =
    useCertify();
  return (
    <S.Container>
      <S.Wrapper>
        <S.CertificationList>
          <S.Title>DGSW 졸업생 인증</S.Title>
          <S.CertificationInfo>
            <p>
              해당 절차는 DGSW졸업생을 인증하여 서비스를 제공하기 위해
              이루어집니다.
            </p>
            <p> 졸업생 인증으로 롤링의 더 많은 기능을 활성화하세요.</p>
          </S.CertificationInfo>

          <S.QuestionContainer onSubmit={(e) => handleGraduateCertified(e)}>
            <S.QuestionList>
              <S.QuestionText>
                Q. DGSW 사감선생님 중, 한 분의 성함을 입력해주세요.
              </S.QuestionText>
              <S.InputContainer>
                <S.Input
                  value={housemaster}
                  type="text"
                  onChange={handleQuestionChange}
                />
                <S.Teacher>선생님</S.Teacher>
              </S.InputContainer>
            </S.QuestionList>

            <Button type="submit" ButtonType="custom" customStyle={S.Button}>
              인증하기
            </Button>
          </S.QuestionContainer>
        </S.CertificationList>
      </S.Wrapper>
    </S.Container>
  );
};

export default Certify;
