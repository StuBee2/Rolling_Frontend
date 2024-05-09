import { FadeInAnimation } from "@src/styles/common.style";
import { Flex } from "@src/styles/flex";
import { RollingPalette } from "@stubee2/stubee2-rolling-design-token";
import styled from "styled-components";

export const RegistContainer = styled.div`
  width: 100%;

  border-radius: 20px;
  background-color: #fff;
  border: 1px solid #ddd;

  overflow: hidden;

  ${FadeInAnimation}
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  ${Flex({ flexDirection: "column", rowGap: "4.5rem" })}
  padding: 3.5rem 3rem 2.5rem 3rem;
`;

export const RegistInputContainer = styled.div`
  width: calc(100% - 200px);
  height: 100%;

  ${Flex({ flexDirection: "column", rowGap: "2rem" })}
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

export const InputStyle = {
  width: "100%",
  height: "65px",
  paddingLeft: "20px",
  fontSize: "17px",
  backgroundColor: `${RollingPalette.unEmphasize.Lightest}`,
};

export const FindAddressButton = styled.div`
  width: 100px;
  height: 65px;

  cursor: pointer;
  font-weight: 700;
  ${Flex({ alignItems: "center", justifyContent: "center" })}

  color: ${RollingPalette.unEmphasize.Dark};
  background-color: ${RollingPalette.unEmphasize.Lightest};
  border: 1px solid #bdc2d0;
  border-radius: 5px;

  transition: ease-in-out 0.1s;
  &:active {
    background-color: ${RollingPalette.unEmphasize.Light};
  }
`;

export const TextAreaStyle = {
  width: "100%",
  height: "250px",
  padding: "20px",
  fontSize: "17px",
  backgroundColor: `${RollingPalette.unEmphasize.Lightest}`,
};

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;

  zoom: 0.8;

  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;

  z-index: 3;
  padding: 0 10px 0 10px;

  ${Flex({ alignItems: "center", justifyContent: "center" })}

  ${FadeInAnimation};
`;

export const AddressStyle = {
  width: "650px",
  height: "500px",
};
