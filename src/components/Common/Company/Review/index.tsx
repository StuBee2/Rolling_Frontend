import React, { useEffect, useState } from "react";
import * as R from "./style";
import StarScope from "./ReviewStarScope";
import StarRating from "./ReviewStarScope";
// import { useGetCompanyInfo } from "../../../../queries/Company/company.query";

import { useRecoilState } from "recoil";
import {
  reviewCareerPath,
  reviewPosition,
  reviewEtc,
} from "../../../../store/review/reviewStore";
import { useReview } from "../../../../hooks/FirmReview/useReview";
import {
  balanceGradeAtom,
  salaryGradeAtom,
  welfareGradeAtom,
} from "../../../../store/review/reviewStore";
import { companyIdAtom } from "../../../../store/review/reviewStore";
import Modal from "../../Modal";
import useModal from "../../../../hooks/util/useModal";

const FirmReview = () => {
  const [companyidatom, setCompanyIdAtom] =
    useRecoilState<string>(companyIdAtom);
  const [position, setPosition] = useRecoilState<string>(reviewPosition);
  const [careerPath, setCarreerPath] = useRecoilState<string>(reviewCareerPath);
  const [etc, setEtc] = useRecoilState<string>(reviewEtc);
  const {
    onPositionChange,
    onCareerPathChange,
    onEtcChange,
    onReviewRegister,
  } = useReview();
  const [balanceGrade, setbalanceGrade] =
    useRecoilState<number>(balanceGradeAtom);
  const [salaryGrade, setsalaryGrade] = useRecoilState<number>(salaryGradeAtom);
  const [welfareGrade, setwelfareGrade] =
    useRecoilState<number>(welfareGradeAtom);
  const { close, isOpen } = useModal();

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
    <Modal isOpen={isOpen} onClose={close}>
      <R.ReviewBox>
        <R.ReviewTitle>기업 리뷰</R.ReviewTitle>

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

          <button onClick={() => onReviewRegister(companyidatom)}>
            리뷰등록하기
          </button>
        </R.ReviewList>
      </R.ReviewBox>
      {/* 모달테스트 */}
    </Modal>
  );
};

export default FirmReview;
