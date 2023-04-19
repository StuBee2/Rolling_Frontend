import * as R from "../style";

const FirmRegister = () => {
  return (
    <R.FirmBox>
      <R.FirmTitle>기업 정보 등록</R.FirmTitle>
      <R.FirmList>
        <text>회사 이름</text>
        <input required></input>
        <text>회사 주소</text>
        <input required></input>
        <text>회사 소개</text>
        <R.Explanation isRegister={true}>
          (회사의 서비스 목적을 적어주세요)
        </R.Explanation>
        <input required></input>
      </R.FirmList>
    </R.FirmBox>
  );
};

export default FirmRegister;
