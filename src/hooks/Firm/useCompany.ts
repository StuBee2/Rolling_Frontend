import { useRecoilState } from "recoil";
import { companyLogoAtom } from "../../stores/company/companyStore";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { useRef, MutableRefObject } from "react";
import { customAxios } from "../../libs/Axios/customAxios";
import { QueryClient } from "react-query";
import { usePostCompanyRegisterMutation } from "../../queries/Company/company.query";
import { CompanyParam } from "../../repositories/Company/company.param";
import { useNavigate } from "react-router-dom";

export const useCompany = () => {
  const [firmlogo, setFirmLogo] = useRecoilState<string>(companyLogoAtom);

  const queryClient = new QueryClient();
  const CompanyMutation = usePostCompanyRegisterMutation();
  const navigate = useNavigate();

  const [companyData, setCompanyData] = useState<CompanyParam>({
    name: "",
    address: "",
    description: "",
    imgUrl: firmlogo,
  });

  const onAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCompanyData((prev) => ({ ...prev, [name]: value }));
  };

  const onInfoChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCompanyData((prev) => ({ ...prev, [name]: value }));
  };

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCompanyData((prev) => ({ ...prev, [name]: value }));
  };

  const imgRef: MutableRefObject<HTMLInputElement | null> = useRef(null);

  const onClickImg = () => {
    if (imgRef.current) {
      imgRef.current.click();
    }
  };

  const onFirmRegister = (e: FormEvent) => {
    e.preventDefault();

    CompanyMutation.mutate(
      {
        name: companyData.name,
        address: companyData.address,
        description: companyData.description,
        imgUrl: firmlogo,
      },
      {
        onSuccess: () => {
          console.log(companyData);
          navigate("/");
        },
        onError: (e: any) => {
          console.log(e);
        },
      }
    );
  };

  // const onFirmRegister = useCallback(() => {
  //   const data: CompanyParam = {
  //     name: firmname,
  //     address: firmaddress,
  //     description: firminfo,
  //     imgUrl: firmlogo,
  //   };
  //   console.log(firmlogo);
  //   CompanyMutation.mutate(data, {
  //     onSuccess: () => {
  //       queryClient.invalidateQueries("/company");
  //       console.log(data);
  //       navigate("/");
  //     },
  //     onError: (e: any) => {
  //       console.log(e);
  //     },
  //   });
  // }, [firmaddress, firmname, firminfo, firmlogo]);

  const uploadImg = useCallback(
    async (e: any) => {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);

      try {
        const { data } = await customAxios.post("/file", formData);

        setFirmLogo(data);
        console.log(data);
      } catch (e) {
        console.log("파일 업로드 실패");
      }
    },
    [setFirmLogo]
  );

  return {
    onAddressChange,
    onInfoChange,
    onNameChange,
    onClickImg,
    uploadImg,
    imgRef,
    onFirmRegister,
  };
};
