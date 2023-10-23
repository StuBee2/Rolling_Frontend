import { useUploadFileMutation } from "@src/queries/File/file.query";
import { CompanyRegistInfo } from "@src/types/Company/company.type";
import { useRollingToast } from "@stubee2/stubee2-rolling-toastify";
import { MutableRefObject, useRef, useState } from "react";
import { FileParam } from "@src/repositories/File/file.repository";
import { usePostCompanyRegisterMutation } from "@src/queries/Company/company.query";
import { useNavigate } from "react-router-dom";
import { QUERY_KEYS } from "@src/queries/queryKey";
import { useQueryInvalidates } from "../Invalidates/useQueryInvalidates";
import { useRecoilState } from "recoil";
import { CompanyRegistAtom } from "@src/stores/company/company.store";
import axios, { AxiosError } from "axios";
import { companyErrorHanlder } from "@src/utils/Error/Company/companyErrorHanlder";

export const useRegistCompany = () => {
  const imgRef: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const [imgUrl, setImgUrl] = useState<string>("");
  const [rgb, setRgb] = useState(-1);

  const formData = new FormData();
  const [companyInfo, setCompanyInfo] =
    useRecoilState<CompanyRegistInfo>(CompanyRegistAtom);
  const { rollingToast } = useRollingToast();
  const navigate = useNavigate();
  const fileUpload = useUploadFileMutation();
  const registCompany = usePostCompanyRegisterMutation();
  const { queryInvalidates } = useQueryInvalidates();

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
        setImgUrl(imgUrl.url);
        setRgb(imgUrl.rgb);
      },
      onError: (e) => {
        rollingToast("이미지 전송실패", "error");
      },
    });
  };

  const handleRegistChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setCompanyInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegistSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const answer = window.confirm("기업을 등록요청하시겠습니까?");
    if (answer) {
      const { name, address, description } = companyInfo;

      if (name.trim() === "") {
        return rollingToast("기업명을 작성해주세요!", "warning");
      }

      if (address.trim() === "") {
        return rollingToast("기업주소를 작성해주세요!", "warning");
      }

      if (description.trim() === "") {
        return rollingToast("기업소개를 작성해주세요!", "warning");
      }

      const param = { ...companyInfo, imgUrl, rgb };

      registCompany.mutate(param, {
        onSuccess: () => {
          rollingToast("기업등록 요청을 하였습니다!", "success");
          queryInvalidates([
            QUERY_KEYS.company.getListAllAndSearchCompany("list/all?"),
            QUERY_KEYS.company.getCompanyRank,
          ]);
          setCompanyInfo({ name: "", address: "", description: "" });
          setImgUrl("");
          setRgb(-1);
          navigate("/");
        },
        onError: (error) => {
          if (axios.isAxiosError(error)) {
            console.log(error.response?.data);
            const { status, message } = error.response?.data as AxiosError;
            rollingToast(companyErrorHanlder(Number(status), message), "error");
          }
        },
      });
    }
  };

  return {
    companyInfo,
    setCompanyInfo,
    handleRegistChange,
    handleRegistSubmit,
    imgRef,
    handleCompanyLogoClick,
    imgUrl,
    handleUploadCompanyLogo,
  };
};
