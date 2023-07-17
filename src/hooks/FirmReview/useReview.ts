import { useRecoilState } from "recoil";
import {
  balanceGradeAtom,
  salaryGradeAtom,
  welfareGradeAtom,
} from "../../stores/review/reviewStore";
import { ChangeEvent, FormEvent, useState } from "react";
import { ReviewParam } from "../../repositories/Review/review.repository";
import { QueryClient } from "react-query";
import { usePostReviewMutation } from "../../queries/Review/review.query";
import { companyIdAtom } from "../../stores/review/reviewStore";
import useModal from "../util/useModal";

export const useReview = () => {
  const [balanceGrade, setbalanceGrade] =
    useRecoilState<number>(balanceGradeAtom);
  const [salaryGrade, setsalaryGrade] = useRecoilState<number>(salaryGradeAtom);
  const [welfareGrade, setwelfareGrade] =
    useRecoilState<number>(welfareGradeAtom);
  const [companyidatom, setCompanyIdAtom] = useRecoilState<string | undefined>(
    companyIdAtom
  );

  const [reviewData, setReviewData] = useState<ReviewParam>({
    companyId: companyidatom,
    content: "",
    position: "",
    careerPath: "",
    balanceGrade: balanceGrade,
    salaryGrade: salaryGrade,
    welfareGrade: welfareGrade,
  });

  const { close } = useModal();

  const queryClient = new QueryClient();
  const ReviewMutation = usePostReviewMutation();

  const onPositionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setReviewData((prve) => ({ ...prve, [name]: value }));
  };

  const onCareerPathChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setReviewData((prve) => ({ ...prve, [name]: value }));
  };

  const onEtcChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setReviewData((prve) => ({ ...prve, [name]: value }));
  };

  const onReviewRegister = (e: FormEvent) => {
    const {
      companyId,
      content,
      position,
      careerPath,
      balanceGrade,
      salaryGrade,
      welfareGrade,
    } = reviewData;

    ReviewMutation.mutate(
      {
        companyId: companyId,
        content,
        position,
        careerPath,
        balanceGrade: balanceGrade,
        salaryGrade: salaryGrade,
        welfareGrade: welfareGrade,
      },
      {
        onSuccess: () => {
          console.log(reviewData);
          // console.log("리뷰등록성공");
          close();
        },
        onError: (e) => {
          console.log(e);
        },
      }
    );
  };

  return {
    reviewData,
    onPositionChange,
    onCareerPathChange,
    onEtcChange,
    onReviewRegister,
  };
};

export default useReview;
