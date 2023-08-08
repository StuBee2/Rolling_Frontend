import styled from "styled-components";

export const SignInContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f9fafb;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`;

export const SignInWrapper = styled.div`
  width: 1920px;
  height: 100%;
  display: flex;
  @media screen and (max-width: 1400px) {
    width: 1400px;
  }
  @media screen and (max-width: 1150px) {
    width: 100%;
  }
`;

export const SignInItemContainer = styled.div`
  width: calc(100% - 780px);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1400px) {
    width: calc(100% - 580px);
  }
  @media screen and (max-width: 1150px) {
    width: 100%;
  }
  padding: 0 10px 0 10px;
`;

export const SignInSideBackground = styled.div`
  width: 780px;
  height: 100%;
  background-color: #1d1e5a;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  img {
    width: 560px;
    height: 310px;
  }

  @media screen and (max-width: 1400px) {
    width: 580px;
    img {
      width: 460px;
    }
  }
  @media screen and (max-width: 1150px) {
    display: none;
  }
`;
