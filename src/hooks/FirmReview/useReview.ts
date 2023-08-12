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
import { useCallback } from "react";
import { ReviewParam } from "@src/repositories/Review/review.repository";
import { QueryClient } from "react-query";
import { usePostReviewMutation } from "@src/queries/review/review.query";
import useModal from "../util/useModal";

export const useReview = () => {
  const [position, setPosition] = useRecoilState<string>(reviewPosition);
  const [careerPath, setCarreerPath] = useRecoilState<string>(reviewCareerPath);
  const [etc, setEtc] = useRecoilState<string>(reviewEtc);
  const [balanceGrade, setbalanceGrade] =
    useRecoilState<number>(balanceGradeAtom);
  const [salaryGrade, setsalaryGrade] = useRecoilState<number>(salaryGradeAtom);
  const [welfareGrade, setwelfareGrade] =
    useRecoilState<number>(welfareGradeAtom);
  const [companyidatom, setCompanyIdAtom] = useRecoilState<string | undefined>(
    companyIdAtom
  );

  const { close } = useModal();

  const queryClient = new QueryClient();
  const ReviewMutation = usePostReviewMutation();

  const onPositionChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPosition(e.target.value);
    },
    [setPosition]
  );

  const onCareerPathChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCarreerPath(e.target.value);
    },
    [setCarreerPath]
  );

  const onEtcChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEtc(e.target.value);
    },
    [setEtc]
  );

  const onReviewRegister = useCallback(() => {
    const data: ReviewParam = {
      companyId: "68648334-7eed-4975-a7db-0056a447b1f9",
      content: etc,
      position: position,
      careerPath: careerPath,
      salaryAndBenefits: 0,
      workLifeBalance: 0,
      organizationalCulture: 0,
      careerAdvancement: 0,
    };
    ReviewMutation.mutate(data, {
      onSuccess: () => {
        queryClient.invalidateQueries("/review");
        console.log(data);
        setCarreerPath("");
        setCompanyIdAtom("");
        setEtc("");
        setPosition("");
        setbalanceGrade(0);
        setsalaryGrade(0);
        setwelfareGrade(0);

        close();
      },
      onError: (e) => {
        console.log(e);
      },
    });
  }, []);

  return {
    onPositionChange,
    onCareerPathChange,
    onEtcChange,
    onReviewRegister,
  };
};
