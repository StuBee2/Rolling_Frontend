import styled from "styled-components";
import * as F from "./style";
import { useCompany } from "../../../../hooks/Firm/useCompany";
import { BiImageAdd } from "react-icons/bi";

const FirmRegister = () => {
  const { onClickImg, uploadImg, imgRef } = useCompany();

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
        <F.Input></F.Input>
        <F.Text>기업 주소</F.Text>
        <F.Input></F.Input>
        <F.Text>기업 소개</F.Text>
        <F.Explanation>(회사의 서비스 목적을 적어주세요)</F.Explanation>
        <textarea required></textarea>
      </F.FirmList>
    </F.FirmBox>
  );
};

export default FirmRegister;
