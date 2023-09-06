// import * as F from "./style";
import * as C from "./style";
import { useCompany } from "@src/hooks/Firm/useCompany";
import { useRecoilState } from "recoil";
import {
  companyAddressAtom,
  companyInfoAtom,
  companyLogoAtom,
  companyNameAtom,
} from "@src/stores/company/company.store";
import companybanner from "@src/assets/Company/CompanyBanner.png";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
// import companybanner from "@src/assets/Company/CompanyBanner.svg";

const FirmRegister = () => {
  const {
    onClickImg,
    uploadImg,
    imgRef,
    // onFirmRegister,
    // onAddressChange,
    // onInfoChange,
    // onNameChange,
  } = useCompany();

  // const [firmlogo, setFrimLogo] = useRecoilState<string>(companyLogoAtom);
  // const [firmname, setFirmName] = useRecoilState<string>(companyNameAtom);
  // const [firmaddress, setFrimAddress] =
  //   useRecoilState<string>(companyAddressAtom);
  // const [firminfo, setFrimInfo] = useRecoilState<string>(companyInfoAtom);

  return (
    <>
      <C.CompanyWrap>
        <C.CompnayListWrap>
          <div>
            <C.CompanyBanner src={companybanner}></C.CompanyBanner>
          </div>
          <C.CompanyRegisteWrap>
            <C.CompanyRegisteBox>
              <C.CompanyImgBox>
                <input
                  type="file"
                  style={{ display: "none" }}
                  ref={imgRef}
                  onChange={(e) => uploadImg(e)}
                ></input>
                <C.Text>기업로고</C.Text>
                <C.Img onClick={onClickImg}>
                  <MdOutlineAddPhotoAlternate
                    style={{ fontSize: 100, color: "#BDC2D0" }}
                  />
                </C.Img>
              </C.CompanyImgBox>
              <C.CompanyInputWrap>
                <C.CompanyInputBox>
                  <C.Text>기업명</C.Text>
                  <C.Input placeholder="기업명을 입력해주세요"></C.Input>
                </C.CompanyInputBox>
                <C.CompanyInputBox>
                  <C.Text>기업 주소</C.Text>
                  <C.Input placeholder="기업 본사 도로명 주소를 입력해 주세요 "></C.Input>
                </C.CompanyInputBox>
                <C.CompanyInputBox>
                  <C.Text>기업 소개</C.Text>
                  <textarea
                    style={{ resize: "none" }}
                    placeholder=" 기업 소개글을 작성해 주세요
(회사 서비스의 목적, 기업 문화 등)"
                  ></textarea>
                </C.CompanyInputBox>
              </C.CompanyInputWrap>
              <C.CompanyRegisteButton>요청하기</C.CompanyRegisteButton>
            </C.CompanyRegisteBox>
          </C.CompanyRegisteWrap>
        </C.CompnayListWrap>
      </C.CompanyWrap>
    </>
  );
};

export default FirmRegister;
