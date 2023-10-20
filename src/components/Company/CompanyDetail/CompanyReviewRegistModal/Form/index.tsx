import { useRegistReview } from "@src/hooks/Reivew/useReigstReview";
import { searchPosition } from "@src/utils/Position/searchPosition";
import { Button, TextInput } from "@stubee2/stubee2-rolling-ui";
import PositionList from "./PositonList";
import regist from "@src/assets/images/Review/regist.svg";
import * as S from "./style";
import RegistStarGrades from "./RegistStarGrades";
import { Dispatch, SetStateAction } from "react";

interface Props {
  companyId: string;
  showPositionList: boolean;
  setShowPositionList: Dispatch<SetStateAction<boolean>>;
}

export default function Form({ ...attr }: Props) {
  const { ...hooks } = useRegistReview(attr.companyId);
  const positionList = searchPosition(hooks.reviewContents.position.trim());

  return (
    <S.Container onSubmit={hooks.handleCompanyReviewSubmit}>
      <S.InputContainer>
        <S.InputTitle>
          <p>포지션</p>
          <span>*</span>
        </S.InputTitle>
        <TextInput
          value={hooks.reviewContents.position}
          customStyle={S.InputStyle}
          name="position"
          autocomplete="off"
          placeholder="해당 기업에서 어떤 업무를 담당하셨나요?"
          handleChange={(e) => {
            hooks.handleCompanyReviewChange(e);
            attr.setShowPositionList(true);
          }}
        />
        {attr.showPositionList && // 입력할 때 등장, 포지션 선택하면 사라짐
          positionList.length > 0 && ( //내가 입력한 포지션이 포지션리스트에 있을때 등장
            <PositionList
              positionList={positionList}
              setReviewContents={hooks.setReviewContents}
              setShowPositionList={attr.setShowPositionList}
            />
          )}
      </S.InputContainer>

      <S.InputContainer height="200px">
        <S.InputTitle>
          <p>학교생활</p>
          <span>*</span>
        </S.InputTitle>
        <TextInput
          value={hooks.reviewContents.schoolLife}
          textType="textarea"
          customStyle={S.TextAreaStyle}
          name="schoolLife"
          autocomplete="off"
          handleChange={hooks.handleCompanyReviewChange}
          placeholder="DGSW에서 보낸 학교 생활은 어땠나요?"
        />
      </S.InputContainer>

      <S.InputContainer height="200px">
        <S.InputTitle>
          <p>취업 준비 과정</p>
          <span>*</span>
        </S.InputTitle>
        <TextInput
          value={hooks.reviewContents.preparationCourse}
          customStyle={S.TextAreaStyle}
          textType="textarea"
          name="preparationCourse"
          autocomplete="off"
          handleChange={hooks.handleCompanyReviewChange}
          placeholder="어떤 것을 중심으로 어떤 것을 공부하며 취업 준비를 하셨나요?"
        />
      </S.InputContainer>

      <S.InputContainer>
        <S.InputTitle>
          <p>자신이 생각하는 가장 중요한 점</p>
          <span>*</span>
        </S.InputTitle>
        <TextInput
          value={hooks.reviewContents.mostImportantThing}
          customStyle={S.InputStyle}
          name="mostImportantThing"
          autocomplete="off"
          handleChange={hooks.handleCompanyReviewChange}
          placeholder="취업에 있어서 가장 중요한 점은 무엇인가요?"
        />
      </S.InputContainer>

      <S.InputContainer>
        <S.InputTitle>
          <p>채용 프로세스</p>
          <span>*</span>
        </S.InputTitle>
        <TextInput
          value={hooks.reviewContents.employmentProcess}
          customStyle={S.InputStyle}
          name="employmentProcess"
          autocomplete="off"
          handleChange={hooks.handleCompanyReviewChange}
          placeholder="채용 프로세스는 무엇이었나요?"
        />
      </S.InputContainer>

      <S.InputContainer height="200px">
        <S.InputTitle>
          <p>면접 질문</p>
          <span>*</span>
        </S.InputTitle>
        <TextInput
          value={hooks.reviewContents.interviewQuestion}
          textType="textarea"
          customStyle={S.TextAreaStyle}
          name="interviewQuestion"
          autocomplete="off"
          handleChange={hooks.handleCompanyReviewChange}
          placeholder="어떤 면접 질문을 받으셨나요?"
        />
      </S.InputContainer>

      <S.InputContainer>
        <S.InputTitle>
          <p>사내복지</p>
          <span>*</span>
        </S.InputTitle>
        <TextInput
          value={hooks.reviewContents.welfare}
          customStyle={S.InputStyle}
          name="welfare"
          autocomplete="off"
          handleChange={hooks.handleCompanyReviewChange}
          placeholder="해당 기업은 어떤 사내복지를 제공하나요?"
        />
      </S.InputContainer>

      <S.InputContainer>
        <S.InputTitle>
          <p>식사 제공</p>
          <span>*</span>
        </S.InputTitle>
        <TextInput
          value={hooks.reviewContents.meal}
          customStyle={S.InputStyle}
          name="meal"
          autocomplete="off"
          handleChange={hooks.handleCompanyReviewChange}
          placeholder="해당 기업에서 제공해주는 식사는 어떠한가요?"
        />
      </S.InputContainer>

      <S.InputContainer>
        <S.InputTitle>
          <p>출퇴근 시간</p>
          <span>*</span>
        </S.InputTitle>
        <TextInput
          value={hooks.reviewContents.commuteTime}
          customStyle={S.InputStyle}
          name="commuteTime"
          autocomplete="off"
          handleChange={hooks.handleCompanyReviewChange}
          placeholder="출퇴근 시간은 몇 시부터 몇시까지 인가요?"
        />
      </S.InputContainer>

      <S.InputContainer>
        <S.InputTitle>
          <p>기업의 장점</p>
          <span>*</span>
        </S.InputTitle>
        <TextInput
          value={hooks.reviewContents.advantages}
          customStyle={S.InputStyle}
          name="advantages"
          autocomplete="off"
          handleChange={hooks.handleCompanyReviewChange}
          placeholder="해당 기업은 어떤 장점을 갖고 있나요?"
        />
      </S.InputContainer>

      <S.InputContainer>
        <S.InputTitle>
          <p>기업의 단점</p>
          <span>*</span>
        </S.InputTitle>
        <TextInput
          value={hooks.reviewContents.disAdvantages}
          customStyle={S.InputStyle}
          name="disAdvantages"
          autocomplete="off"
          handleChange={hooks.handleCompanyReviewChange}
          placeholder="해당 기업은 어떤 단점을 갖고 있나요?"
        />
      </S.InputContainer>

      <S.CompanySatisfaction>
        <S.InputTitle>
          <p>회사 만족도</p>
          <span>*</span>
        </S.InputTitle>
        <S.StarGradeContainer>
          <RegistStarGrades
            reviewStarGrade={hooks.reviewStarGrade}
            handleStarGradeChange={hooks.handleStarGradeChange}
          />
        </S.StarGradeContainer>
      </S.CompanySatisfaction>

      <S.ReviewButtonContainer>
        <Button
          type="submit"
          ButtonType="custom"
          customStyle={S.RegistReviewButton}
        >
          <p>스토리 등록</p>
          <img src={regist} alt="이미지 없음" />
        </Button>
      </S.ReviewButtonContainer>
    </S.Container>
  );
}
