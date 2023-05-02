import { useRecoilState } from "recoil";
import {
  companyAddressAtom,
  companyInfoAtom,
  companyNameAtom,
} from "../../store/company/companyStore";
import { useCallback } from "react";
import { useRef, MutableRefObject } from "react";

export const useCompany = () => {
  const [firmaddress, setFrimAddress] =
    useRecoilState<string>(companyAddressAtom);
  const [firminfo, setFrimInfo] = useRecoilState<string>(companyInfoAtom);
  const [firmName, setFrimName] = useRecoilState<string>(companyNameAtom);

  const Addressregister = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFrimAddress(e.target.value);
    },
    [setFrimAddress]
  );

  const Inforegister = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFrimInfo(e.target.value);
    },
    [setFrimInfo]
  );

  const Nameregister = useCallback(
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

  const uploadImg = async (e: any) => {
    const files = e.target.files;
    const formData = new FormData();
    for (let i = 0; i < files; i++) {
      formData.append("file", files[i]);
    }

    try {
    } catch (e) {}
  };

  return {
    Addressregister,
    Inforegister,
    Nameregister,
    onClickImg,
    uploadImg,
    imgRef,
  };
};
