import React, { useEffect, ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import {
  balanceGradeAtom,
  companyIdAtom,
  reviewCareerPath,
  reviewEtc,
  reviewPosition,
  salaryGradeAtom,
  welfareGradeAtom,
} from "@src/stores/review/review.store";
import useModal from "@src/hooks/util/useModal";
import { FaPen } from "@react-icons/all-files/fa/FaPen";
import StarRating from "./ReviewStarScope";
import Modal from "../../../Modal";
import * as R from "./style";
import { useReview } from "@src/hooks/FirmReview/useReview";

const FirmReview = (props: any) => {
  const [companyIdAtomValue, setCompanyIdAtom] = useRecoilState<
    string | undefined
  >(companyIdAtom);
  const [position, setPosition] = useRecoilState<string>(reviewPosition);
  const [careerPath, setCareerPath] = useRecoilState<string>(reviewCareerPath);
  const [etc, setEtc] = useRecoilState<string>(reviewEtc);
  const [balanceGrade, setBalanceGrade] =
    useRecoilState<number>(balanceGradeAtom);
  const [salaryGrade, setSalaryGrade] = useRecoilState<number>(salaryGradeAtom);
  const [welfareGrade, setWelfareGrade] =
    useRecoilState<number>(welfareGradeAtom);
  const { close, isOpen } = useModal();
  const {
    onPositionChange,
    onCareerPathChange,
    onEtcChange,
    onReviewRegister,
  } = useReview();

  const handleRatingChange =
    (ratingStateSetter: React.Dispatch<React.SetStateAction<number>>) =>
    (rating: number) => {
      ratingStateSetter(rating);
    };

  return (
    <R.Container>
      <Modal isOpen={isOpen} onClose={close}>
        <R.CompanyReview
          onClick={(e: ChangeEvent<any>) => {
            e.stopPropagation();
          }}
        >
          <R.ReviewBox>
            <R.ReviewTitleBox>
              <R.ReviewTitle>
                리뷰 작성
                <FaPen style={{ marginLeft: "10px", fontSize: "22px" }} />
              </R.ReviewTitle>
              <R.CloseIcons onClick={close} />
            </R.ReviewTitleBox>
            <div></div>
            <R.ReviewRegisterBox>
              <div className="test">
                <R.Text isText={true}>
                  포지션<div style={{ color: "#EC6A5E" }}>*</div>
                </R.Text>
                <R.Input
                  onChange={(e) => onPositionChange(e)}
                  value={position}
                />

                <R.Text isText={true}>
                  입사경로<div style={{ color: "#EC6A5E" }}>*</div>
                </R.Text>
                <R.Input
                  onChange={(e) => onCareerPathChange(e)}
                  value={careerPath}
                />

                <R.Text isText={true}>
                  회사 만족도<div style={{ color: "#EC6A5E" }}>*</div>
                </R.Text>

                <R.Text isText={false}>워라벨별점</R.Text>
                <R.ReviewExplanation>
                  (워라벨를 평가해주세요)
                </R.ReviewExplanation>
                <StarRating
                  totalStars={5}
                  initialRating={balanceGrade}
                  onChangeRating={handleRatingChange(setBalanceGrade)}
                />

                <R.Text isText={false}>연봉별점</R.Text>
                <R.ReviewExplanation>(연봉을 평가해주세요)</R.ReviewExplanation>
                <StarRating
                  totalStars={5}
                  initialRating={salaryGrade}
                  onChangeRating={handleRatingChange(setSalaryGrade)}
                />

                <R.Text isText={false}>복지별점</R.Text>
                <R.ReviewExplanation>(복지를 평가해주세요)</R.ReviewExplanation>
                <StarRating
                  totalStars={5}
                  initialRating={welfareGrade}
                  onChangeRating={handleRatingChange(setWelfareGrade)}
                />

                <R.Text isText={true}>
                  기타<div style={{ color: "#EC6A5E" }}>*</div>
                </R.Text>
                <R.Input onChange={(e) => onEtcChange(e)} value={etc} />
              </div>
            </R.ReviewRegisterBox>
            <R.ReviewButtonBox>
              <R.ReviewButton onClick={() => onReviewRegister()}>
                리뷰 등록
              </R.ReviewButton>
            </R.ReviewButtonBox>
          </R.ReviewBox>
        </R.CompanyReview>
      </Modal>
    </R.Container>
  );
};

export default FirmReview;
