import * as C from "./style";
import { useCompany } from "@src/hooks/Firm/useCompany";
import companybanner from "@src/assets/Company/CompanyBanner.png";
import Photo from "@src/assets/Company/photo.png";

const FirmRegister = () => {
  const {
    onClickImg,
    uploadImg,
    imgRef,
    imgSrc,
    onAddressChange,
    onDescriptionChange,
    onNameChange,
    onUploadCompany,
  } = useCompany();

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
                  <img
                    src={imgSrc ? imgSrc : Photo}
                    style={{
                      width: imgSrc ? "201px" : "200px",
                      height: imgSrc ? "201px" : "195px",
                      borderRadius: "5px",
                    }}
                    alt="이미지 없음"
                  />
                </C.Img>
              </C.CompanyImgBox>
              <C.CompanyInputWrap>
                <C.CompanyInputBox>
                  <C.Text>기업명</C.Text>
                  <C.Input
                    placeholder="기업명을 입력해주세요"
                    id="name"
                    name="name"
                    onChange={onNameChange}
                  ></C.Input>
                </C.CompanyInputBox>
                <C.CompanyInputBox>
                  <C.Text>기업 주소</C.Text>
                  <C.Input
                    placeholder="기업 본사 도로명 주소를 입력해 주세요 "
                    id="address"
                    name="address"
                    onChange={onAddressChange}
                  ></C.Input>
                </C.CompanyInputBox>
                <C.CompanyInputBox>
                  <C.Text>기업 소개</C.Text>
                  <textarea
                    id="description"
                    name="description"
                    onChange={onDescriptionChange}
                    style={{ resize: "none" }}
                    placeholder=" 기업 소개글을 작성해 주세요
(회사 서비스의 목적, 기업 문화 등)"
                  ></textarea>
                </C.CompanyInputBox>
              </C.CompanyInputWrap>
              <C.CompanyRegisteButton onClick={onUploadCompany}>
                요청하기
              </C.CompanyRegisteButton>
            </C.CompanyRegisteBox>
          </C.CompanyRegisteWrap>
        </C.CompnayListWrap>
      </C.CompanyWrap>
    </>
  );
};

export default FirmRegister;
