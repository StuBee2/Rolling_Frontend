import { searchPosition } from "@src/utils/Position/searchPosition";
import { Button, TextInput } from "@stubee2/stubee2-rolling-ui";
import PositionList from "./PositonList";
import check from "@src/assets/icons/Story/check.png";
import * as S from "./style";
import RegistStarGrades from "./RegistStarGrades";
import { Dispatch, SetStateAction } from "react";
import { useRegistStory } from "@src/hooks/Story/useReigstStory";

interface Props {
  companyId: string;
  showPositionList: boolean;
  setShowPositionList: Dispatch<SetStateAction<boolean>>;
}

export default function Form({ ...attr }: Props) {
  const { ...hooks } = useRegistStory(attr.companyId);
  const positionList = searchPosition(hooks.storyContents.position.trim());

  return (
    <S.Container onSubmit={hooks.handleCompanyStorySubmit}>
      <S.InputContainer>
        <S.InputTitle>
          <p>포지션</p>
          <span>*</span>
        </S.InputTitle>
        <TextInput
          value={hooks.storyContents.position}
          customStyle={S.InputStyle}
          name="position"
          inputRef={hooks.inputRefs.position}
          placeholder="해당 기업에서 어떤 업무를 담당하셨나요?"
          isError={hooks.isError.position}
          errorMessage={"해당 기업에서 어떤 업무를 담당하셨나요?"}
          handleChange={(e) => {
            hooks.handleCompanyStoryChange(e, hooks.isError.position);
            attr.setShowPositionList(true);
          }}
        />
        {attr.showPositionList && // 입력할 때 등장, 포지션 선택하면 사라짐
          positionList.length > 0 && ( //내가 입력한 포지션이 포지션리스트에 있을때 등장
            <PositionList
              positionList={positionList}
              setStoryContents={hooks.setStoryContents}
              setShowPositionList={attr.setShowPositionList}
            />
          )}
      </S.InputContainer>

      <S.InputContainer>
        <S.InputTitle>
          <p>학교생활</p>
          <span>*</span>
        </S.InputTitle>
        <TextInput
          value={hooks.storyContents.schoolLife}
          textType="textarea"
          customStyle={S.TextAreaStyle}
          inputRef={hooks.inputRefs.schoolLife}
          placeholder="DGSW에서 보낸 학교 생활은 어땠나요?"
          isError={hooks.isError.schoolLife}
          errorMessage={"DGSW에서 보낸 학교 생활은 어땠나요?"}
          name="schoolLife"
          handleChange={(e) =>
            hooks.handleCompanyStoryChange(e, hooks.isError.schoolLife)
          }
        />
      </S.InputContainer>

      <S.InputContainer>
        <S.InputTitle>
          <p>취업 준비 과정</p>
          <span>*</span>
        </S.InputTitle>
        <TextInput
          value={hooks.storyContents.preparationCourse}
          customStyle={S.TextAreaStyle}
          inputRef={hooks.inputRefs.preparationCourse}
          placeholder="어떤 것을 중심으로 어떤 것을 공부하며 취업 준비를 하셨나요?"
          isError={hooks.isError.preparationCourse}
          errorMessage={
            "어떤 것을 중심으로 어떤 것을 공부하며 취업 준비를 하셨나요?"
          }
          textType="textarea"
          name="preparationCourse"
          handleChange={(e) =>
            hooks.handleCompanyStoryChange(e, hooks.isError.preparationCourse)
          }
        />
      </S.InputContainer>

      <S.InputContainer>
        <S.InputTitle>
          <p>자신이 생각하는 가장 중요한 점</p>
          <span>*</span>
        </S.InputTitle>
        <TextInput
          value={hooks.storyContents.mostImportantThing}
          customStyle={S.InputStyle}
          inputRef={hooks.inputRefs.mostImportantThing}
          placeholder="취업에 있어서 가장 중요한 점은 무엇인가요?"
          isError={hooks.isError.mostImportantThing}
          errorMessage={"취업에 있어서 가장 중요한 점은 무엇인가요?"}
          name="mostImportantThing"
          handleChange={(e) =>
            hooks.handleCompanyStoryChange(e, hooks.isError.mostImportantThing)
          }
        />
      </S.InputContainer>

      <S.InputContainer>
        <S.InputTitle>
          <p>채용 프로세스</p>
          <span>*</span>
        </S.InputTitle>
        <TextInput
          value={hooks.storyContents.employmentProcess}
          customStyle={S.InputStyle}
          inputRef={hooks.inputRefs.employmentProcess}
          placeholder="채용 프로세스는 무엇이었나요?"
          isError={hooks.isError.employmentProcess}
          errorMessage={"채용 프로세스는 무엇이었나요?"}
          name="employmentProcess"
          handleChange={(e) =>
            hooks.handleCompanyStoryChange(e, hooks.isError.employmentProcess)
          }
        />
      </S.InputContainer>

      <S.InputContainer>
        <S.InputTitle>
          <p>면접 질문</p>
          <span>*</span>
        </S.InputTitle>
        <TextInput
          value={hooks.storyContents.interviewQuestion}
          textType="textarea"
          customStyle={S.TextAreaStyle}
          inputRef={hooks.inputRefs.interviewQuestion}
          placeholder="어떤 면접 질문을 받으셨나요?"
          isError={hooks.isError.interviewQuestion}
          errorMessage={"어떤 면접 질문을 받으셨나요?"}
          name="interviewQuestion"
          handleChange={(e) =>
            hooks.handleCompanyStoryChange(e, hooks.isError.interviewQuestion)
          }
        />
      </S.InputContainer>

      <S.InputContainer>
        <S.InputTitle>
          <p>사내복지</p>
        </S.InputTitle>
        <TextInput
          value={hooks.storyContents.welfare}
          customStyle={S.InputStyle}
          placeholder="해당 기업은 어떤 사내복지를 제공하나요?"
          name="welfare"
          handleChange={hooks.handleCompanyStoryChange}
        />
      </S.InputContainer>

      <S.InputContainer>
        <S.InputTitle>
          <p>식사 제공</p>
        </S.InputTitle>
        <TextInput
          value={hooks.storyContents.meal}
          customStyle={S.InputStyle}
          placeholder="해당 기업에서 제공해주는 식사는 어떠한가요?"
          name="meal"
          handleChange={hooks.handleCompanyStoryChange}
        />
      </S.InputContainer>

      <S.InputContainer>
        <S.InputTitle>
          <p>출퇴근 시간</p>
        </S.InputTitle>
        <TextInput
          value={hooks.storyContents.commuteTime}
          customStyle={S.InputStyle}
          placeholder="출퇴근 시간은 몇 시부터 몇시까지 인가요?"
          name="commuteTime"
          handleChange={hooks.handleCompanyStoryChange}
        />
      </S.InputContainer>

      <S.InputContainer>
        <S.InputTitle>
          <p>기업의 장점</p>
        </S.InputTitle>
        <TextInput
          value={hooks.storyContents.advantages}
          customStyle={S.InputStyle}
          placeholder="해당 기업은 어떤 장점을 갖고 있나요?"
          name="advantages"
          handleChange={hooks.handleCompanyStoryChange}
        />
      </S.InputContainer>

      <S.InputContainer>
        <S.InputTitle>
          <p>기업의 단점</p>
        </S.InputTitle>
        <TextInput
          value={hooks.storyContents.disAdvantages}
          customStyle={S.InputStyle}
          placeholder="해당 기업은 어떤 단점을 갖고 있나요?"
          name="disAdvantages"
          handleChange={hooks.handleCompanyStoryChange}
        />
      </S.InputContainer>

      <S.CompanySatisfaction>
        <S.InputTitle>
          <p>회사 만족도</p>
        </S.InputTitle>
        <S.StarGradeContainer>
          <RegistStarGrades
            storyStarGrade={hooks.storyStarGrade}
            handleStarGradeChange={hooks.handleStarGradeChange}
          />
        </S.StarGradeContainer>
      </S.CompanySatisfaction>

      <S.StoryButtonContainer>
        <Button
          type="submit"
          ButtonType="custom"
          customStyle={S.RegistStoryButton}
        >
          <p>스토리 등록</p>
          <img src={check} alt="이미지 없음" />
        </Button>
      </S.StoryButtonContainer>
    </S.Container>
  );
}
