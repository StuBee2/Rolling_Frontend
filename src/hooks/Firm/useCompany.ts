import { useRecoilState } from "recoil";
import {
  companyAddressAtom,
  companyInfoAtom,
  companyNameAtom,
  companyLogoAtom,
} from "../../store/company/companyStore";
import { useCallback } from "react";
import { useRef, MutableRefObject } from "react";
import { customAxios } from "../../libs/Axios/customAxios";
import { QueryClient } from "react-query";
// import { usePostCompanyRegister } from "../../queries/Company/company.query";
import { usePostCompanyRegisterMutation } from "../../queries/Company/company.query";
// import {usePost}
import { CompanyParam } from "../../repositories/Company/company.param";

export const useCompany = () => {
  const [firmaddress, setFrimAddress] =
    useRecoilState<string>(companyAddressAtom);
  const [firminfo, setFrimInfo] = useRecoilState<string>(companyInfoAtom);
  const [firmname, setFrimName] = useRecoilState<string>(companyNameAtom);
  const [firmlogo, setFirmLogo] = useRecoilState<string>(companyLogoAtom);

  const queryClient = new QueryClient();
  const CompanyMutation = usePostCompanyRegisterMutation();

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
