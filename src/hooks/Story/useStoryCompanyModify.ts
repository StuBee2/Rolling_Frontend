import { useUploadFileMutation } from "@src/queries/File/file.query";
import { useRollingToast } from "@stubee2/stubee2-rolling-toastify";
import { MutableRefObject, useRef, useState } from "react";
import { FileParam } from "@src/repositories/File/file.repository";
import { usePatchCompanyMutation } from "@src/queries/Company/company.query";
import { useNavigate } from "react-router-dom";
import { QUERY_KEYS } from "@src/queries/queryKey";
import { useQueryInvalidates } from "../Invalidates/useQueryInvalidates";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  CompanyIdAtom,
  CompanyModifyAtom,
} from "@src/stores/company/company.store";
import axios, { AxiosError } from "axios";
import { companyErrorHanlder } from "@src/utils/Error/Company/companyErrorHanlder";
import { CompanyModifyType } from "@src/types/Company/company.type";

export const useStoryCompanyModify = () => {
  const imgRef: MutableRefObject<HTMLInputElement | null> = useRef(null);

  const formData = new FormData();

  // 전 값과 비교를 하는 state
  const [prevCompanyModifyInfo, setPrevCompanyModifyInfo] =
    useState<CompanyModifyType>({
      name: "",
      address: "",
      addressEtc: "",
      description: "",
      imgUrl: "",
      rgb: null,
    });

  const companyId = useRecoilValue(CompanyIdAtom);
  const [companyModifyInfo, setCompanyModifyInfo] =
    useRecoilState(CompanyModifyAtom);
  const { name, address, description } = companyModifyInfo;

  const isRequired =
    [name, address, description].every((value) => value.trim() !== "") &&
    JSON.stringify(companyModifyInfo) !== JSON.stringify(prevCompanyModifyInfo);

  const { rollingToast } = useRollingToast();
  const navigate = useNavigate();
  const fileUpload = useUploadFileMutation();
  const patchCompany = usePatchCompanyMutation();

  const { queryInvalidates } = useQueryInvalidates();
  const nameInputRef = useRef<HTMLInputElement | null>(null);

  const [isNameError, setIsNameError] = useState(false);

  const handleCompanyLogoClick = () => {
    if (imgRef.current) {
      imgRef.current.click();
    }
  };

  const handleUploadCompanyLogo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files!![0];
    formData.append("file", file);

    fileUpload.mutate(formData as unknown as FileParam, {
      onSuccess: (imgUrl) => {
        setCompanyModifyInfo((prev) => ({
          ...prev,
          imgUrl: imgUrl.url,
          rgb: imgUrl.rgb,
        }));
      },
      onError: (e) => {
        rollingToast("이미지 전송실패", "error");
      },
    });
  };

  const handleModifyChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    isError?: boolean
  ) => {
    const { name, value } = e.target;
    setCompanyModifyInfo((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (isError && value.trim() !== "") {
      setIsNameError(false);
    }
  };

  // 기업수정 제출
  const handleModifySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isRequired) {
      const answer = window.confirm("기업등록을 수정하시겠습니까?");

      if (answer) {
        const companyData = { ...companyModifyInfo };
        patchCompany.mutate(
          { companyId, companyData },
          {
            onSuccess: () => {
              rollingToast("기업이 수정되었습니다.", "success");

              queryInvalidates([
                QUERY_KEYS.company.company,
                QUERY_KEYS.company.getListAllCompany,
                QUERY_KEYS.company.getCompanyRank,
                QUERY_KEYS.company.getInfoCompanyId(companyId),
              ]);

              setCompanyModifyInfo({
                name: "",
                address: "",
                description: "",
                imgUrl: "",
                rgb: null,
              });
              navigate("/");
            },
            onError: (error) => {
              if (axios.isAxiosError(error)) {
                const { status, message } = error.response?.data as AxiosError;
                if (Number(status) === 409) {
                  setIsNameError(true);
                  nameInputRef.current?.focus();
                }
                rollingToast(
                  companyErrorHanlder(Number(status), message),
                  "error"
                );
              }
            },
          }
        );
      }
    }
  };

  return {
    companyId,
    companyModifyInfo,
    setCompanyModifyInfo,

    setPrevCompanyModifyInfo,

    handleModifyChange,
    handleModifySubmit,

    imgRef,
    handleCompanyLogoClick,

    handleUploadCompanyLogo,
    nameInputRef,

    isNameError,
    setIsNameError,

    isRequired,
  };
};
