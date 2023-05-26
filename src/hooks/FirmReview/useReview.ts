import { useRecoilState } from "recoil";
import {
  reviewPosition,
  reviewCareerPath,
  reviewGrade1,
  reviewEtc,
} from "../../store/review/reviewStore";
import { useCallback } from "react";
import { ReviewParam } from "../../repositories/Review/review.param";
import { QueryClient } from "react-query";
import { usePostReview } from "../../queries/Review/review.query";
import { useGetCompanyInfo } from "../../queries/Company/company.query";

export const useReview = () => {
  const [position, setPosition] = useRecoilState<string>(reviewPosition);
  const [careerPath, setCarreerPath] = useRecoilState<string>(reviewCareerPath);
  const [grade, setGrade] = useRecoilState<number>(reviewGrade1);
  const [etc, setEtc] = useRecoilState<string>(reviewEtc);

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

  const onReviewRegister = useCallback(() => {
    const data: ReviewParam = {
      companyId: "",
      content: etc,
      position: position,
      careerPath: careerPath,
      // balanceGrade:
      // salaryGrade:
      // welfareGrade:
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
  }, [position, grade]);

  return {
    onPositionChange,
    onCareerPathChange,
    onEtcChange,
    onReviewRegister,
  };
};
