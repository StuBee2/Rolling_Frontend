import { useUploadFileMutation } from "@src/queries/File/file.query";
import {
  CompanyInputRefType,
  CompanyRegistInfo,
} from "@src/types/Company/company.type";
import { useRollingToast } from "@stubee2/stubee2-rolling-toastify";
import { MutableRefObject, useRef, useState } from "react";
import { FileParam } from "@src/repositories/File/file.repository";
import {
  usePatchCompanyMutation,
  usePostCompanyRegisterMutation,
} from "@src/queries/Company/company.query";
import { useNavigate } from "react-router-dom";
import { QUERY_KEYS } from "@src/queries/queryKey";
import { useQueryInvalidates } from "../Invalidates/useQueryInvalidates";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  CompanyIdAtom,
  CompanyModifyAtom,
  CompanyRegistAtom,
} from "@src/stores/company/company.store";
import axios, { AxiosError } from "axios";
import { companyErrorHanlder } from "@src/utils/Error/Company/companyErrorHanlder";

export const useRegistCompany = () => {
  const imgRef: MutableRefObject<HTMLInputElement | null> = useRef(null);

  const [companyInfo, setCompanyInfo] =
    useRecoilState<CompanyRegistInfo>(CompanyRegistAtom);
  const [imgUrl, setImgUrl] = useState<string>("");
  const [rgb, setRgb] = useState<number | null>(null);

  const formData = new FormData();

  const [companyModifyInfo, setCompanyModifyInfo] =
    useRecoilState(CompanyModifyAtom);
  const companyId = useRecoilValue(CompanyIdAtom);

  const { rollingToast } = useRollingToast();
  const navigate = useNavigate();
  const fileUpload = useUploadFileMutation();
  const registCompany = usePostCompanyRegisterMutation();
  const patchCompany = usePatchCompanyMutation();

  const { queryInvalidates } = useQueryInvalidates();

  const inputRefs: CompanyInputRefType = {
    name: useRef<HTMLInputElement>(null),
    address: useRef<HTMLInputElement>(null),
    description: useRef<HTMLInputElement>(null),
  };

  const [isError, setIsError] = useState({
    name: false,
    address: false,
    description: false,
  });

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
        if (companyId) {
          setCompanyModifyInfo((prev) => ({
            ...prev,
            imgUrl: imgUrl.url,
            rgb: imgUrl.rgb,
          }));
        } else {
          setImgUrl(imgUrl.url);
          setRgb(imgUrl.rgb);
        }
      },
      onError: (e) => {
        rollingToast("이미지 전송실패", "error");
      },
    });
  };

  const handleRegistChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    isError?: boolean
  ) => {
    const { name, value } = e.target;

    if (companyId) {
      setCompanyModifyInfo((prev) => ({
        ...prev,
        [name]: value,
      }));
    } else {
      setCompanyInfo((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    if (isError && value !== "") {
      setIsError((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  // 기업등록 제출
  const handleRegistSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const answer = window.confirm("기업등록을 요청하시겠습니까?");
    if (answer) {
      const { name, address, description } = companyInfo;

      if (name.trim() === "") {
        setIsError((prev) => ({ ...prev, name: true }));
        return inputRefs.name.current?.focus();
      }

      if (address.trim() === "") {
        setIsError((prev) => ({ ...prev, address: true }));
        return inputRefs.address.current?.focus();
      }

      if (description.trim() === "") {
        setIsError((prev) => ({ ...prev, description: true }));
        return inputRefs.description.current?.focus();
      }

      const param = { ...companyInfo, imgUrl, rgb };

      registCompany.mutate(param, {
        onSuccess: () => {
          rollingToast("기업등록 요청이 완료되었습니다!", "success");
          queryInvalidates([
            QUERY_KEYS.company.getListAllAndSearchCompany("list/all?"),
            QUERY_KEYS.company.getCompanyRank,
          ]);
          setCompanyInfo({ name: "", address: "", description: "" });
          setImgUrl("");
          setRgb(null);
          navigate("/");
        },
        onError: (error) => {
          if (axios.isAxiosError(error)) {
            const { status, message } = error.response?.data as AxiosError;
            if (Number(status) === 409) {
              setIsError((prev) => ({ ...prev, name: true }));
              inputRefs.name.current?.focus();
            }
            rollingToast(companyErrorHanlder(Number(status), message), "error");
          }
        },
      });
    }
  };

  // 기업수정 제출
  const handleModifySubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const answer = window.confirm("기업등록을 수정하시겠습니까?");
    if (answer) {
      const { address, name, description } = companyModifyInfo;

      if (name.trim() === "") {
        setIsError((prev) => ({ ...prev, name: true }));
        return inputRefs.name.current?.focus();
      }

      if (address.trim() === "") {
        setIsError((prev) => ({ ...prev, address: true }));
        return inputRefs.address.current?.focus();
      }

      if (description.trim() === "") {
        setIsError((prev) => ({ ...prev, description: true }));
        return inputRefs.description.current?.focus();
      }

      const companyData = { ...companyModifyInfo };

      patchCompany.mutate(
        { companyId, companyData },
        {
          onSuccess: () => {
            rollingToast("기업이 수정되었습니다.", "success");
            queryInvalidates([
              QUERY_KEYS.company.getListAllAndSearchCompany("list/all?"),
              QUERY_KEYS.company.getCompanyRank,
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
          onError: (e) => {
            rollingToast("기업을 수정하지 못했습니다.", "error");
          },
        }
      );
    }
  };

  return {
    companyInfo,
    setCompanyInfo,

    companyModifyInfo,
    setCompanyModifyInfo,

    handleRegistChange,

    handleRegistSubmit,
    handleModifySubmit,

    imgRef,
    imgUrl,
    handleCompanyLogoClick,

    handleUploadCompanyLogo,
    inputRefs,
    isError,
    setIsError,
    companyId,
  };
};
