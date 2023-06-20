import { useRecoilState } from "recoil";
import {
  reviewPosition,
  reviewCareerPath,
  balanceGradeAtom,
  salaryGradeAtom,
  welfareGradeAtom,
  reviewEtc,
} from "../../store/review/reviewStore";
import { useCallback } from "react";
import { ReviewParam } from "../../repositories/Review/review.repository";
import { QueryClient } from "react-query";
import { usePostReviewMutation } from "../../queries/Review/review.query";
import { companyIdAtom } from "../../store/review/reviewStore";

export const useReview = () => {
  const [position, setPosition] = useRecoilState<string>(reviewPosition);
  const [careerPath, setCarreerPath] = useRecoilState<string>(reviewCareerPath);
  const [etc, setEtc] = useRecoilState<string>(reviewEtc);
  const [balanceGrade, setbalanceGrade] =
    useRecoilState<number>(balanceGradeAtom);
  const [salaryGrade, setsalaryGrade] = useRecoilState<number>(salaryGradeAtom);
  const [welfareGrade, setwelfareGrade] =
    useRecoilState<number>(welfareGradeAtom);
  const [companyidatom, setCompanyIdAtom] =
    useRecoilState<string>(companyIdAtom);

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

  const onReviewRegister = useCallback((companyId: string) => {
    const data: ReviewParam = {
      companyId: companyId,
      content: etc,
      position: position,
      careerPath: careerPath,
      balanceGrade: balanceGrade,
      salaryGrade: salaryGrade,
      welfareGrade: welfareGrade,
    };
    ReviewMutation.mutate(data, {
      onSuccess: () => {
        queryClient.invalidateQueries("/review");
        console.log(data);
      },
      onError: (e: any) => {
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
