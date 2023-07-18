import { useEffect, ChangeEvent } from "react";
import * as R from "./style";
import StarRating from "./ReviewStarScope";
import { useRecoilState } from "recoil";

import { useReview } from "../../../../hooks/FirmReview/useReview";
import {
  salaryAndBenefitsdAtom,
  workLifeBalancedAtom,
  organizationalCulturedAtom,
  careerAdvancementAtom,
} from "../../../../stores/review/reviewStore";

import Modal from "../../Modal";
import useModal from "../../../../hooks/util/useModal";
import { FaPen } from "react-icons/fa";

interface Props {
  value?: any;
  getModalBackground?: any;
}

const FirmReview = ({}: Props) => {
  const {
    onPositionChange,
    onCareerPathChange,
    onEtcChange,
    onReviewRegister,
  } = useReview();

  const [salaryGrade, setsalaryGrade] = useRecoilState<number>(
    salaryAndBenefitsdAtom
  );
  const [workLifeGrade, setworkLifeGrade] =
    useRecoilState<number>(workLifeBalancedAtom);
  const [organizationalGrade, setorganizationalGrade] = useRecoilState<number>(
    organizationalCulturedAtom
  );
  const [careerGrade, setcareerGrade] = useRecoilState<number>(
    careerAdvancementAtom
  );

  const { close, isOpen } = useModal();

  useEffect(() => {
    console.log(salaryGrade);
  }, [salaryGrade]);

  useEffect(() => {
    console.log(workLifeGrade);
  }, [workLifeGrade]);

  useEffect(() => {
    console.log(organizationalGrade);
  }, [organizationalGrade]);

  useEffect(() => {
    console.log(careerGrade);
  }, [careerGrade]);

  const salaryGradeChange = (rating: number) => {
    setsalaryGrade(rating);
  };

  const workLifeGradeChange = (rating: number) => {
    setworkLifeGrade(rating);
  };

  const organizationalGradeChange = (rating: number) => {
    setorganizationalGrade(rating);
  };

  const careerGradeChange = (rating: number) => {
    setcareerGrade(rating);
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
                  id="position"
                  name="position"
                />

                <R.Text isText={true}>
                  입사경로<div style={{ color: "#EC6A5E" }}>*</div>
                </R.Text>
                <R.Input
                  onChange={onCareerPathChange}
                  id="careerpath"
                  name="careerPath"
                />

                <R.Text isText={true}>
                  회사 만족도<div style={{ color: "#EC6A5E" }}>*</div>
                </R.Text>

                <R.Text isText={false}>연봉 별점</R.Text>
                <R.ReviewExplanation>(연봉을 평가해주세요)</R.ReviewExplanation>
                <StarRating
                  totalStars={5}
                  initialRating={salaryGrade}
                  onChangeRating={salaryGradeChange}
                />

                <R.Text isText={false}>워라벨 별점</R.Text>
                <R.ReviewExplanation>
                  (워라벨을 평가해주세요)
                </R.ReviewExplanation>
                <StarRating
                  totalStars={5}
                  initialRating={workLifeGrade}
                  onChangeRating={workLifeGradeChange}
                />

                <R.Text isText={false}>조직문화 별점</R.Text>
                <R.ReviewExplanation>
                  (조직문화를 평가해주세요)
                </R.ReviewExplanation>
                <StarRating
                  totalStars={5}
                  initialRating={organizationalGrade}
                  onChangeRating={organizationalGradeChange}
                />

                <R.Text isText={false}>커리어향상 별점</R.Text>
                <R.ReviewExplanation>
                  (자신의 커리어 향상을 평가해주세요)
                </R.ReviewExplanation>
                <StarRating
                  totalStars={5}
                  initialRating={careerGrade}
                  onChangeRating={careerGradeChange}
                />

                <R.Text isText={true}>
                  기타<div style={{ color: "#EC6A5E" }}>*</div>
                </R.Text>
                <R.Input onChange={onEtcChange} id="content" name="content" />
              </div>
            </R.ReviewRegisterBox>
            <R.ReviewButtonBox>
              <R.ReviewButton onClick={onReviewRegister}>
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
