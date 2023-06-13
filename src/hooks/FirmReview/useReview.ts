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
import { ReviewParam } from "../../repositories/Review/review.param";
import { QueryClient } from "react-query";
import { usePostReview } from "../../queries/Review/review.query";

export const useReview = () => {
  const [position, setPosition] = useRecoilState<string>(reviewPosition);
  const [careerPath, setCarreerPath] = useRecoilState<string>(reviewCareerPath);
  const [etc, setEtc] = useRecoilState<string>(reviewEtc);
  const [balanceGrade, setbalanceGrade] =
    useRecoilState<number>(balanceGradeAtom);
  const [salaryGrade, setsalaryGrade] = useRecoilState<number>(salaryGradeAtom);
  const [welfareGrade, setwelfareGrade] =
    useRecoilState<number>(welfareGradeAtom);

  const queryClient = new QueryClient();
  const ReviewMutation = usePostReview();

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
