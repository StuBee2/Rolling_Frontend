import { useEffect, ChangeEvent } from "react";
import * as R from "./style";
import StarRating from "./ReviewStarScope";
import { useRecoilState } from "recoil";

import { useReview } from "../../../../hooks/FirmReview/useReview";
import {
  balanceGradeAtom,
  salaryGradeAtom,
  welfareGradeAtom,
} from "../../../../stores/review/reviewStore";
import { companyIdAtom } from "../../../../stores/review/reviewStore";
import Modal from "../../Modal";
import useModal from "../../../../hooks/util/useModal";
import { FaPen } from "react-icons/fa";
import { ReviewParam } from "../../../../repositories/Review/review.repository";

interface Props {
  reviewData: ReviewParam;
  value?: any;
  getModalBackground?: any;
}

const FirmReview = ({ reviewData }: Props) => {
  const [companyidatom, setCompanyIdAtom] = useRecoilState<string | undefined>(
    companyIdAtom
  );
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
  const { close, isOpen, open } = useModal();

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
                  onChange={onPositionChange}
                  // value={reviewData.position}
                  id="position"
                  name="position"
                />

                <R.Text isText={true}>
                  입사경로<div style={{ color: "#EC6A5E" }}>*</div>
                </R.Text>
                <R.Input
                  onChange={onCareerPathChange}
                  // value={reviewData.careerPath}
                  id="careerpath"
                  name="careerpath"
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
                  onChangeRating={balanceGradeChange}
                />

                <R.Text isText={false}>연봉별점</R.Text>
                <R.ReviewExplanation>(연봉을 평가해주세요)</R.ReviewExplanation>
                <StarRating
                  totalStars={5}
                  initialRating={salaryGrade}
                  onChangeRating={salaryGradeChange}
                />

                <R.Text isText={false}>복지별점</R.Text>
                <R.ReviewExplanation>(복지를 평가해주세요)</R.ReviewExplanation>
                <StarRating
                  totalStars={5}
                  initialRating={welfareGrade}
                  onChangeRating={welfareChange}
                />

                <R.Text isText={true}>
                  기타<div style={{ color: "#EC6A5E" }}>*</div>
                </R.Text>
                <R.Input
                  onChange={onEtcChange}
                  // value={reviewData.content}
                  id="content"
                  name="content"
                />
              </div>
            </R.ReviewRegisterBox>
            <R.ReviewButtonBox>
              <R.ReviewButton onClick={onReviewRegister}>
                리뷰 등록
              </R.ReviewButton>
            </R.ReviewButtonBox>
          </R.ReviewBox>
        </R.CompanyReview>

        {/* 모달테스트 */}
      </Modal>
    </R.Container>
  );
};

export default FirmReview;
