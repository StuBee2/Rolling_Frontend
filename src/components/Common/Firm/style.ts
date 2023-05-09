import styled from "styled-components";

export const FirmBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FirmTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 26px;
  padding: 3%;
`;
export const FirmList = styled.div`
  display: flex;
  flex-direction: column;
  width: 22%;
  input {
    height: 50px;
    margin: 1% 0 6% 0;
    border-radius: 5px;
    border-color: #c3c3c3;
    border: 1px solid #c3c3c3;
    box-shadow: 1px 1px #b1b1b1;
  }
`;


export const Explanation = styled.div<{ isRegister: boolean }>`
  font-size: 13px;
  color: #9a9a9a;
  margin-bottom: ${(props) => (props.isRegister ? "" : "5px")};
`;
