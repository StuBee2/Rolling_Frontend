import * as F from "./style";
import { useCompany } from "@src/hooks/Firm/useCompany";
import { useRecoilState } from "recoil";
import {
  companyAddressAtom,
  companyInfoAtom,
  companyLogoAtom,
  companyNameAtom,
} from "@src/stores/company/companyStore";

const FirmRegister = () => {
  const {
    onClickImg,
    uploadImg,
    imgRef,
    onFirmRegister,
    onAddressChange,
    onInfoChange,
    onNameChange,
  } = useCompany();

  const [firmlogo, setFrimLogo] = useRecoilState<string>(companyLogoAtom);
  const [firmname, setFirmName] = useRecoilState<string>(companyNameAtom);
  const [firmaddress, setFrimAddress] =
    useRecoilState<string>(companyAddressAtom);
  const [firminfo, setFrimInfo] = useRecoilState<string>(companyInfoAtom);

  return (
    <F.FirmBox>
      <F.FirmTitle>기업 등록</F.FirmTitle>
      <F.FirmList>
        <F.Text>기업 로고</F.Text>
        <input
          type="file"
          onChange={uploadImg}
          ref={imgRef}
          style={{ display: "none" }}
        />

        <F.LogoBox>
          <F.Button onClick={onClickImg}>
            <F.FileIcon />
          </F.Button>
        </F.LogoBox>
        <F.Text>기업 이름</F.Text>
        <F.Input value={firmname} onChange={onNameChange} />
        <F.Text>기업 주소</F.Text>
        <F.Input value={firmaddress} onChange={onAddressChange} />
        <F.Text>기업 소개</F.Text>
        <F.Explanation>(회사의 서비스 목적을 적어주세요)</F.Explanation>
        <textarea required value={firminfo} onChange={onInfoChange}></textarea>
        <button onClick={onFirmRegister}>임시등록버튼</button>
      </F.FirmList>
    </F.FirmBox>
  );
};

export default FirmRegister;
