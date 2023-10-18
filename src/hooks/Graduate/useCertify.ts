import { usePostCertify } from "@src/queries/Graduate/graduate.query";
import { GraduateCertifiedType } from "@src/types/Graduate/graduate.type";
import { useRollingToast } from "@stubee2/stubee2-rolling-toastify";
import { ChangeEvent, FormEvent, useState } from "react";

export const useCertify = () => {
  const [certifiedData, setCertifiedData] = useState<GraduateCertifiedType>({
    housemaster: "",
  });

  const { rollingToast } = useRollingToast();

  const postCertified = usePostCertify();

  const handleQuestionChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCertifiedData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGraduateCertified = (e: FormEvent) => {
    e.preventDefault();
    const { housemaster } = certifiedData;

    if (housemaster === "") {
      return rollingToast("사감선생님 성함을 작성해주세요", "warning");
    }
    postCertified.mutate(
      {
        housemaster: housemaster,
      },
      {
        onSuccess: () => {
          rollingToast("졸업생 인증 성공", "success");
        },
        onError: () => {
          rollingToast("졸업생 인증 실패", "error");
        },
      }
    );
  };

  return {
    handleQuestionChange,
    handleGraduateCertified,
  };
};
