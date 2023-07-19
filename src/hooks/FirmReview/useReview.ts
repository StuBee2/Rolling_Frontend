import { useRecoilState } from "recoil";
import {
  salaryAndBenefitsdAtom,
  workLifeBalancedAtom,
  organizationalCulturedAtom,
  careerAdvancementAtom,
  companyIdAtom,
} from "../../stores/review/review.store";

import { ChangeEvent, FormEvent, useState } from "react";
import { ReviewParam } from "../../repositories/Review/review.repository";
import { QueryClient, useQueryClient } from "react-query";
import { usePostReviewMutation } from "../../queries/Review/review.query";

import useModal from "../util/useModal";

export const useReview = () => {
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
  const [companyidatom, setCompanyIdAtom] = useRecoilState<string | undefined>(
    companyIdAtom
  );

  const [reviewData, setReviewData] = useState<ReviewParam>({
    companyId: companyidatom,
    content: "",
    position: "",
    careerPath: "",
    salaryAndBenefits: 0,
    workLifeBalance: 0,
    organizationalCulture: 0,
    careerAdvancement: 0,
  });

  const { close } = useModal();

  const queryClient = useQueryClient();
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
    e.preventDefault();

    ReviewMutation.mutate(
      {
        companyId: companyidatom,
        content: reviewData.content,
        position: reviewData.position,
        careerPath: reviewData.careerPath,
        salaryAndBenefits: salaryGrade, //연봉
        workLifeBalance: workLifeGrade, //워라벨
        organizationalCulture: organizationalGrade, //조직 문화
        careerAdvancement: careerGrade, //커리어 향상에 도움
      },
      {
        onSuccess: () => {
          setcareerGrade(0);
          setorganizationalGrade(0);
          setsalaryGrade(0);
          setworkLifeGrade(0);
          setCompanyIdAtom("");
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
