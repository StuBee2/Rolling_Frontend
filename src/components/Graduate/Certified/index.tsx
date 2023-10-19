import { useCertify } from "@src/hooks/Graduate/useCertify";
import * as S from "./style";
import backgroundimg from "@src/assets/images/Graduate/background.svg";
import { Button, TextInput } from "@stubee2/stubee2-rolling-ui";

const Certification = () => {
  const { handleQuestionChange, handleGraduateCertified } = useCertify();
  return (
    <S.CertificationContainer>
      <S.BackGroundImg src={backgroundimg} alt="이미지 없음" />
      <div style={{ zIndex: "1" }}>
        <S.CertificationBox>
          <S.CertificationList>
            <S.Title className="bold-text">DGSW 졸업생 인증</S.Title>
            <S.CertificationInfo>
              해당 절차는 DGSW졸업생을 인증하여 서비스를 제공하기 위해
              이루어집니다.
              <br />
              졸업생 인증으로 롤링의 더 많은 기능을 활성화하세요.
            </S.CertificationInfo>
            <S.QuestionContainer onSubmit={(e) => handleGraduateCertified(e)}>
              <S.QuestionList>
                <S.QuestionText className="bold-text">
                  Q. DGSW 사감선생님 중, 한 분의 성함을 입력해주세요.
                </S.QuestionText>
                <S.InputContainer>
                  <S.Input
                    onChange={handleQuestionChange}
                    id="housemaster"
                    name="housemaster"
                    placeholder="선생님의 성함을 적어주세요"
                  />
                  <S.Teacher>선생님</S.Teacher>
                </S.InputContainer>

                <Button
                  type="submit"
                  ButtonType="custom"
                  customStyle={S.Button}
                >
                  인증하기
                </Button>
              </S.QuestionList>
            </S.QuestionContainer>
          </S.CertificationList>
        </S.CertificationBox>
      </div>
    </S.CertificationContainer>
  );
};

export default Certification;
