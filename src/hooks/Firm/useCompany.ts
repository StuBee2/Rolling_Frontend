import { ChangeEvent, useCallback } from "react";
import { useRef, MutableRefObject, useState } from "react";
import { customAxios } from "@src/libs/Axios/customAxios";
import { CompanyParam } from "@src/repositories/Company/company.param";
import { useNavigate } from "react-router-dom";

export const useCompany = () => {
  const [formData, setFormData] = useState(new FormData());
  const [imgSrc, setImgSrc] = useState<any>(null);
  const navigate = useNavigate();

  const [companyData, setCompanyData] = useState<CompanyParam>({
    name: "",
    address: "",
    description: "",
    imgUrl: "",
  });

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCompanyData((prev) => ({ ...prev, [name]: value }));
  };

  const onAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCompanyData((prev) => ({ ...prev, [name]: value }));
  };

  const onDescriptionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCompanyData((prev) => ({ ...prev, [name]: value }));
  };

  const imgRef: MutableRefObject<HTMLInputElement | null> = useRef(null);

  const onClickImg = () => {
    if (imgRef.current) {
      imgRef.current.click();
    }
  };

  const uploadImg = useCallback(async (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setImgSrc(reader.result || null);
        formData.append("file", file);
      };
    });
  }, []);

  const onUploadCompany = async () => {
    try {
      const FileImg = await customAxios.post("/file", formData);

      const CompnayDatas = {
        name: companyData.name,
        address: companyData.description,
        description: companyData.description,
        imgUrl: FileImg.data,
      };

      await customAxios.post("/company", CompnayDatas);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return {
    onClickImg,
    uploadImg,
    imgRef,
    onAddressChange,
    onDescriptionChange,
    onNameChange,
    imgSrc,
    onUploadCompany,
  };
};
