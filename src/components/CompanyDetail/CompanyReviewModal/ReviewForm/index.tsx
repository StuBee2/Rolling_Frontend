import { useRegistReview } from "@src/hooks/Reivew/useReigstReview";
import { searchPosition } from "@src/utils/Position/searchPosition";
import { Button, TextInput } from "@stubee2/stubee2-rolling-ui";
import PositionList from "./PositonList";
import regist from "@src/assets/Review/regist.svg";
import * as S from "./style";
import StarGrade from "./StarGrades";
import { useState } from "react";

interface Props {
  companyId: string;
}

export default function ReviewForm({ companyId }: Props) {
  const { ...hooks } = useRegistReview(companyId);
  const positionList = searchPosition(hooks.reviewContents.position);
  const [showPositionList, setShowPositionList] = useState(false);

  return (
    <S.ReviewForm onSubmit={hooks.handleCompanyReviewSubmit}>
      <S.ReviewInputContainer>
        <S.InputTitle>
          <p>포지션</p>
          <span>*</span>
        </S.InputTitle>
        <TextInput
          value={hooks.reviewContents.position}
          customStyle={S.InputStyle}
          name="position"
          placeholder="포지션을 입력해주세요. ex) 프론트엔드 개발자..."
          handleChange={(e) => {
            hooks.handleCompanyReviewChange(e);
            setShowPositionList(true);
          }}
        />
        {showPositionList && // 입력할 때 등장, 포지션 선택하면 사라짐
          hooks.reviewContents.position.trim().length > 0 && //내가 입력한 포지션의 길이가 0 초과면 등장
          positionList.length > 0 && ( //내가 입력한 포지션이 포지션리스트에 있을때 등장
            <PositionList
              positionList={positionList}
              setReviewContents={hooks.setReviewContents}
              setShowPositionList={setShowPositionList}
            />
          )}
      </S.ReviewInputContainer>

      <S.ReviewInputContainer>
        <S.InputTitle>
          <p>입사경로</p>
          <span>*</span>
        </S.InputTitle>
        <TextInput
          value={hooks.reviewContents.careerPath}
          customStyle={S.InputStyle}
          handleChange={hooks.handleCompanyReviewChange}
          name="careerPath"
          placeholder="입사경로를 입력해주세요."
        />
      </S.ReviewInputContainer>

      <S.CompanySatisfaction>
        <S.InputTitle>
          <p>회사만족도</p>
          <span>*</span>
        </S.InputTitle>

        <StarGrade
          reviewStarRating={hooks.reviewStarRating}
          handleStarGradeChange={hooks.handleStarGradeChange}
        />
      </S.CompanySatisfaction>

      <S.ReviewTextAreaContainer>
        <S.InputTitle>
          <p>리뷰내용</p>
          <span>*</span>
        </S.InputTitle>
        <TextInput
          textType="textarea"
          value={hooks.reviewContents.content}
          customStyle={S.TextAreaStyle}
          handleChange={hooks.handleCompanyReviewChange}
          name="content"
          placeholder="리뷰내용을 작성해주세요."
        />
        <S.ReviewButtonContainer>
          <Button
            type="submit"
            ButtonType="custom"
            customStyle={S.RegistReviewButton}
          >
            <p>리뷰등록</p>
            <img src={regist} alt="이미지 없음" />
          </Button>
        </S.ReviewButtonContainer>
      </S.ReviewTextAreaContainer>
    </S.ReviewForm>
  );
}