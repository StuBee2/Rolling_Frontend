import { FadeInAnimation } from "@src/styles/common.style";
import styled from "styled-components";

export const RegistContainer = styled.div`
  width: 100%;
  height: auto;

  border-radius: 20px;
  background-color: #fff;
  border: 1px solid #ddd;

  overflow: hidden;

  ${FadeInAnimation}
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  row-gap: 4.5rem;
  padding: 3.5rem 3rem 2.5rem 3rem;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const LogoContainer = styled.div`
  width: 200px;
  height: 100%;

  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const RegistInputContainer = styled.div`
  width: calc(100% - 200px);
  height: 100%;

  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

export const LogoBox = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid rgb(189, 194, 208);

  display: flex;
  flex-direction: column;
  row-gap: 15px;

  background-color: #fff;
  border-radius: 5px;

  overflow: hidden;
`;

export const LogoImg = styled.div<{ logo: string }>`
  width: 100%;
  height: 100%;
  background: url(${({ logo }) => logo}) no-repeat;
  background-size: 100% 100%;
  background-position: center;
  cursor: pointer;
`;

export const CompanyLogoInput = styled.input`
  display: none;
`;

export const CompanyBasicInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

export const CompanyName = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const InputStyle = {
  width: "100%",
  height: "65px",
  paddingLeft: "20px",
  fontSize: "17px",
  backgroundColor: "rgba(247, 249, 250, 1)",
};

export const Address = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const MainAddress = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
`;

export const FindAddressButton = styled.div`
  width: 100px;
  height: 65px;

  cursor: pointer;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;

  color: rgba(115, 123, 152, 1);
  background-color: #f2f4f5;
  border: 1px solid #bdc2d0;
  border-radius: 5px;

  transition: ease-in-out 0.1s;
  &:active {
    background-color: rgba(222, 224, 230, 1);
  }
`;

export const CompanyIntroduce = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const TextAreaStyle = {
  width: "100%",
  height: "250px",
  padding: "20px",
  fontSize: "17px",
  backgroundColor: "rgba(247, 249, 250, 1)",
};

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;

  display: flex;
  justify-content: center;
  align-items: center;

  ${FadeInAnimation};
`;

export const AddressStyle = {
  width: "650px",
  height: "500px",
};
