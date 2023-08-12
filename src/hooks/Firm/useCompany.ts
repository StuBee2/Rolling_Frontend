import { useRecoilState } from "recoil";
import {
  companyAddressAtom,
  companyInfoAtom,
  companyLogoAtom,
  companyNameAtom,
} from "@src/stores/company/companyStore";
import { useCallback } from "react";
import { useRef, MutableRefObject } from "react";
import { customAxios } from "@src/libs/Axios/customAxios";
import { QueryClient } from "react-query";
import { usePostCompanyRegisterMutation } from "@src/queries/Company/company.query";
import { CompanyParam } from "@src/repositories/Company/company.param";
import { useNavigate } from "react-router-dom";

export const useCompany = () => {
  const [firmaddress, setFrimAddress] =
    useRecoilState<string>(companyAddressAtom);
  const [firminfo, setFrimInfo] = useRecoilState<string>(companyInfoAtom);
  const [firmname, setFrimName] = useRecoilState<string>(companyNameAtom);
  const [firmlogo, setFirmLogo] = useRecoilState<string>(companyLogoAtom);

  const queryClient = new QueryClient();
  const CompanyMutation = usePostCompanyRegisterMutation();
  const navigate = useNavigate();

  const onAddressChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFrimAddress(e.target.value);
    },
    [setFrimAddress]
  );

  const onInfoChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setFrimInfo(e.target.value);
    },
    [setFrimInfo]
  );

  const onNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFrimName(e.target.value);
    },
    [setFrimName]
  );

  const imgRef: MutableRefObject<HTMLInputElement | null> = useRef(null);

  const onClickImg = () => {
    if (imgRef.current) {
      imgRef.current.click();
    }
  };

  const onFirmRegister = useCallback(() => {
    const data: CompanyParam = {
      name: firmname,
      address: firmaddress,
      description: firminfo,
      imgUrl: firmlogo,
    };
    console.log(firmlogo);
    CompanyMutation.mutate(data, {
      onSuccess: () => {
        queryClient.invalidateQueries("/company");
        console.log(data);
        navigate("/");
      },
      onError: (e: any) => {
        console.log(e);
      },
    });
  }, [firmaddress, firmname, firminfo, firmlogo]);

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
