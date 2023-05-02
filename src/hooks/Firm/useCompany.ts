import { useRecoilState } from "recoil";
import {
  companyAddressAtom,
  companyInfoAtom,
  companyNameAtom,
} from "../../store/company/companyStore";
import { useCallback } from "react";

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

  return {
    Addressregister,
    Inforegister,
    Nameregister,
  };
};
