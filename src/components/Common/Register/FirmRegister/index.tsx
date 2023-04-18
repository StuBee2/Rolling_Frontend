import * as R from "./FirmRegister.style";

const FirmRegister = () => {
  return (
    <R.FirmRegisterBox>
      <R.FirmRegisterTitle>기업 정보 등록</R.FirmRegisterTitle>
      <R.FirmRegisterList>
        <text className="">회사 이름</text>
        <input required></input>
        <text>회사 주소</text>
        <input required></input>
        <text>회사 소개</text>
        <R.Explanation>(회사의 서비스 목적을 적어주세요)</R.Explanation>
        <input required></input>
      </R.FirmRegisterList>
    </R.FirmRegisterBox>
  );
};

export default FirmRegister;
