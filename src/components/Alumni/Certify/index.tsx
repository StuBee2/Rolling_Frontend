import { useCertify } from "@src/hooks/Alumni/useCertify";
import * as S from "./style";
import { Button } from "@stubee2/stubee2-rolling-ui";
import { tokenDecode } from "@src/utils/Auth/tokenDecode";
import { useEffect } from "react";
import { Column } from "@src/styles/flex";

const Certify = () => {
  const { ...attr } = useCertify();
  const memberRole = tokenDecode("access", "authority");

  useEffect(() => {
    if (memberRole === "MEMBER") {
      attr.rollingToast("동문 인증이 이미 되어있습니다.", "info");
      attr.navigate("/");
    }
  }, []);

  return (
    <S.Container>
      <Column
        $width={"1200px"}
        $height={"100%"}
        $padding={"5rem 0 0 0"}
        $rowGap={"3rem"}
      >
        <S.TitleContainer>
          <S.Title>That's 동문인증</S.Title>
          <S.SubTitle>
            동문인증을 하여 더 다양한 서비스를 즐겨보세요!
          </S.SubTitle>
        </S.TitleContainer>

        <S.Content>
          <S.CertificationBox>
            <S.CertifyText>DGSW 동문 인증</S.CertifyText>
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
          </S.CertificationBox>
        </S.Content>
      </Column>
    </S.Container>
  );
};

export default Certify;
