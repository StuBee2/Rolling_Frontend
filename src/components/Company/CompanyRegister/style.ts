import styled from "styled-components";

export const RegisterContainer = styled.div`
  width: 100%;
  height: calc(100vh - 90px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(222, 224, 230, 1);
  overflow-y: auto;
  min-width: 500px;
  position: relative;
  top: 90px;
  @media screen and (max-width: 500px) {
    height: 100%;
    overflow-y: visible;
  }
`;
