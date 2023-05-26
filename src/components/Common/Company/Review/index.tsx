import React, { useEffect, useState } from "react";
import * as R from "./style";
import StarScope from "./ReviewStarScope";
import StarRating from "./ReviewStarScope";
import { useGetCompanyInfo } from "../../../../queries/Company/company.query";

import { useRecoilState } from "recoil";
import {
  reviewCareerPath,
  reviewPosition,
  reviewEtc,
} from "../../../../store/review/reviewStore";
import { useReview } from "../../../../hooks/FirmReview/useReview";
import {
  reviewGrade1,
  reviewGrade2,
  reviewGrade3,
} from "../../../../store/review/reviewStore";
console.log(reviewGrade1);

const FirmReview = () => {
  const [position, setPosition] = useRecoilState<string>(reviewPosition);
  const [careerPath, setCarreerPath] = useRecoilState<string>(reviewCareerPath);
  const [etc, setEtc] = useRecoilState<string>(reviewEtc);
  const { onPositionChange, onCareerPathChange, onEtcChange } = useReview();
  const [balanceGrade, setbalanceGrade] = useRecoilState<number>(reviewGrade1);
  const [salaryGrade, setsalaryGrade] = useRecoilState<number>(reviewGrade2);
  const [welfareGrade, setwelfareGrade] = useRecoilState<number>(reviewGrade3);
  const [id, setId] = useState("");
  // const { data: getCompanyId } = useGetCompanyInfo({id});
  // console.log(getCompanyId);

  useEffect(() => {
    console.log(balanceGrade);
  }, [balanceGrade]);

  useEffect(() => {
    console.log(salaryGrade);
  }, [salaryGrade]);

  useEffect(() => {
    console.log(welfareGrade);
  }, [welfareGrade]);

  const balanceGradeChange = (rating: number) => {
    setbalanceGrade(rating);
  };

  const salaryGradeChange = (rating: number) => {
    setsalaryGrade(rating);
  };

  const welfareChange = (rating: number) => {
    setwelfareGrade(rating);
  };

  return (
    <R.ReviewBox>
      <R.ReviewTitle>기업 리뷰</R.ReviewTitle>

      {/* <div>{getCompanyId?.companyQueryResponse.companyId}</div> */}

      <R.ReviewList>
        <R.Text>포지션</R.Text>
        <R.ReviewExplanation>
          (회사에서 자신이 어떤 직무를 맡고 있는지 자세하게 써주세요)
          <br />
          ex 프론트엔드 개발자 홈페이지 개발
        </R.ReviewExplanation>
        <R.Input value={position} onChange={onPositionChange} />
        <R.Text>입사경로</R.Text>
        <R.Input value={careerPath} onChange={onCareerPathChange} />
        <R.Text>회사 만족도(워라벨)</R.Text>
        <R.ReviewExplanation>(워라벨를 평가해주세요)</R.ReviewExplanation>
        <StarRating
          totalStars={5}
          initialRating={balanceGrade}
          onChangeRating={balanceGradeChange}
        />
        <R.Text>회사 만족도(연봉)</R.Text>
        <R.ReviewExplanation>(연봉을 평가해주세요)</R.ReviewExplanation>
        <StarRating
          totalStars={5}
          initialRating={salaryGrade}
          onChangeRating={salaryGradeChange}
        />
        <R.Text>회사 만족도(복지)</R.Text>
        <R.ReviewExplanation>(복지를 평가해주세요)</R.ReviewExplanation>
        <StarRating
          totalStars={5}
          initialRating={welfareGrade}
          onChangeRating={welfareChange}
        />

        <R.Text>기타</R.Text>
        <R.Input value={etc} onChange={onEtcChange} />
      </R.ReviewList>
    </R.ReviewBox>
  );
};

export default FirmReview;
