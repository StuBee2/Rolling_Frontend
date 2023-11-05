import { useStoryRegister } from "@src/hooks/Story/useStoryRegister";
import { searchPosition } from "@src/utils/Position/searchPosition";
import { TextInput } from "@stubee2/stubee2-rolling-ui";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { InputEmphasizeText, RegistButton } from "../../style";
import StoryPositionList from "./PositionList";
import RegistStarGrade from "./StarGrade";
import * as S from "./stye";

interface Props {
  storyCompanyId: string;
  companyName: string;
}

function StoryRegisterItem({ storyCompanyId, companyName }: Props) {
  const { ...attr } = useStoryRegister(storyCompanyId);
  const positionList = searchPosition(
    attr.storyRequiredElement.position.trim()
  );
  const [showPositionList, setShowPositionList] = useState(false);

  useEffect(() => {
    // companyId가 바뀌면 새로운 회사 스토리를 남길 수 있도록 기존 값 삭제
    attr.setStoryRequiredElement({
      position: "",
      welfare: "",
      pros: "",
      cons: "",
    });

    attr.setStoryStarGrade({
      salaryAndBenefits: 0,
      workLifeBalance: 0,
      organizationalCulture: 0,
      careerAdvancement: 0,
    });

    attr.setStoryOptionElements({
      corporationEtc: "",
    });
  }, [storyCompanyId]);

  return (
    <S.Container>
      <S.CompanyStoryText>
        <span>{companyName}</span>은/는 어떤가요?
      </S.CompanyStoryText>

      <S.Wrapper onClick={() => showPositionList && setShowPositionList(false)}>
        <S.Form onSubmit={attr.handleStorySubmit}>
          <S.RequireContainer>
            <S.RequireWrapper>
              <S.InputContainer onClick={(e) => e.stopPropagation()}>
                <InputEmphasizeText>
                  포지션 <span>*</span>
                </InputEmphasizeText>

                <TextInput
                  name="position"
                  autoComplete="off"
                  value={attr.storyRequiredElement.position}
                  customStyle={S.InputStyle}
                  placeholder="ex) 프론트엔드 개발자"
                  handleChange={(e) => {
                    attr.handleStoryChange(e, true);
                    !showPositionList && setShowPositionList(true);
                  }}
                />
                {showPositionList && (
                  <StoryPositionList
                    positionList={positionList}
                    setShowPositionList={setShowPositionList}
                    setStoryRequiredElement={
                      attr.setStoryRequiredElement as unknown as Dispatch<
                        SetStateAction<Record<string, string>>
                      >
                    }
                    positionTop={"95px"}
                  />
                )}
              </S.InputContainer>

              <S.InputContainer>
                <InputEmphasizeText>
                  사내복지 <span>*</span>
                </InputEmphasizeText>

                <TextInput
                  name="welfare"
                  autoComplete="off"
                  value={attr.storyRequiredElement.welfare}
                  customStyle={S.InputStyle}
                  placeholder="ex) 유연한 근무 환경 제공"
                  handleChange={(e) => attr.handleStoryChange(e, true)}
                />
              </S.InputContainer>
            </S.RequireWrapper>
          </S.RequireContainer>

          <S.ProsConsContainer>
            <InputEmphasizeText>
              장단점 <span>*</span>
            </InputEmphasizeText>

            <S.Content>
              <TextInput
                name="pros"
                autoComplete="off"
                value={attr.storyRequiredElement.pros}
                customStyle={S.InputStyle}
                placeholder="기업의 장점을 입력해주세요"
                handleChange={(e) => attr.handleStoryChange(e, true)}
              />
              <TextInput
                name="cons"
                autoComplete="off"
                value={attr.storyRequiredElement.cons}
                customStyle={S.InputStyle}
                placeholder="기업의 단점을 입력해주세요"
                handleChange={(e) => attr.handleStoryChange(e, true)}
              />
            </S.Content>
          </S.ProsConsContainer>

          <S.Content>
            <InputEmphasizeText>
              회사 만족도 <span>*</span>
            </InputEmphasizeText>

            <RegistStarGrade
              storyStarGrade={attr.storyStarGrade}
              handleStarGradeChange={attr.handleStarGradeChange}
            />
          </S.Content>

          <S.Content>
            <InputEmphasizeText>기타 내용</InputEmphasizeText>
            <TextInput
              name="corporationEtc"
              autoComplete="off"
              value={attr.storyOptionElements.corporationEtc}
              textType="textarea"
              customStyle={S.TextAreaStyle}
              placeholder={`면접 질문, 취업 준비 과정 등\n후배들에게 들려주고 싶은 이야기를 작성해 주세요`}
              handleChange={attr.handleStoryChange}
            />
          </S.Content>

          <RegistButton isRequired={attr.isRequired}>
            <button type="submit">스토리 남기기</button>
          </RegistButton>
        </S.Form>
      </S.Wrapper>
    </S.Container>
  );
}

export default React.memo(StoryRegisterItem);
