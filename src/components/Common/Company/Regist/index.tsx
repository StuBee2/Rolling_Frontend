import * as F from "./style";
import { useCompany } from "../../../../hooks/Firm/useCompany";

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
        <F.Input onChange={onNameChange} id="name" name="name" />
        <F.Text>기업 주소</F.Text>
        <F.Input onChange={onAddressChange} id="address" name="address" />
        <F.Text>기업 소개</F.Text>
        <F.Explanation>(회사의 서비스 목적을 적어주세요)</F.Explanation>
        <textarea
          required
          onChange={onInfoChange}
          id="description"
          name="description"
        ></textarea>
        <button onClick={onFirmRegister}>임시등록버튼</button>
      </F.FirmList>
    </F.FirmBox>
  );
};

export default FirmRegister;
