import { useUploadFileMutation } from "@src/queries/File/file.query";
import { CompanyRegistInfo } from "@src/types/Company/company.type";
import { useRollingToast } from "@stubee2/stubee2-rolling-toastify";
import { MutableRefObject, useRef, useState } from "react";
import { FileParam } from "@src/repositories/File/file.repository";
import { usePostCompanyRegisterMutation } from "@src/queries/Company/company.query";
import { useNavigate } from "react-router-dom";
import { QUERY_KEYS } from "@src/queries/queryKey";
import { useQueryClient } from "react-query";

export const useRegistCompany = () => {
  const imgRef: MutableRefObject<HTMLInputElement | null> = useRef(null);
  const [imgUrl, setImgUrl] = useState<string>("");
  const formData = new FormData();
  const [companyInfo, setCompanyInfo] = useState<CompanyRegistInfo>({
    name: "",
    address: "",
    description: "",
  });
  const { rollingToast } = useRollingToast();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const fileUpload = useUploadFileMutation();
  const registCompany = usePostCompanyRegisterMutation();

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
        setImgUrl(imgUrl);
      },
      onError: (e) => {
        rollingToast("이미지를 전송실패", "error");
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

      const param = { ...companyInfo, imgUrl };

      registCompany.mutate(param, {
        onSuccess: () => {
          rollingToast("기업등록 요청을 하였습니다!", "success");
          queryClient.invalidateQueries(QUERY_KEYS.company.getListAllCompany);
          setCompanyInfo({ name: "", address: "", description: "" });
          setImgUrl("");
          navigate("/");
        },
        onError: (e) => {
          rollingToast("기업등록 요청을 하지 못했습니다!", "error");
        },
      });
    }
  };

  return {
    companyInfo,
    handleRegistChange,
    handleRegistSubmit,
    imgRef,
    handleCompanyLogoClick,
    imgUrl,
    handleUploadCompanyLogo,
  };
};
