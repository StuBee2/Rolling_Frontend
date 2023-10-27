import { useCertify } from "@src/hooks/Alumni/useCertify";
import * as S from "./style";
import { Button } from "@stubee2/stubee2-rolling-ui";
import { useEffect } from "react";
import { tokenDecode } from "@src/utils/Auth/tokenDecode";
import useHideHeader from "@src/hooks/Header/useHideHeader";

export default function Certify() {
  useHideHeader();

  const { ...attr } = useCertify();
  const memberRole = tokenDecode("access", "authority");

  useEffect(() => {
    if (memberRole === "MEMBER") {
      attr.rollingToast("본교 인증이 이미 되어있습니다.", "warning");
      attr.navigate("/");
    }
  }, []);

  return (
    <S.Container>
      <S.Wrapper>
        <S.CertificationList>
          <S.Title>DGSW 동문 인증</S.Title>
          <S.CertificationInfo>
            <p>
              해당 절차는 DGSW 동문 인증하여 서비스를 제공하기 위해
              이루어집니다.
            </p>
            <p> 동문 인증으로 롤링의 더 많은 기능을 활성화하세요.</p>
          </S.CertificationInfo>

          <S.QuestionContainer
            onSubmit={(e) => attr.handleGraduateCertified(e)}
          >
            <S.QuestionList>
              <S.QuestionText>
                Q. DGSW 사감선생님 중, 한 분의 성함을 입력해주세요.
              </S.QuestionText>
              <S.InputContainer>
                <S.Input
                  value={attr.housemaster}
                  type="text"
                  onChange={attr.handleQuestionChange}
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
}
