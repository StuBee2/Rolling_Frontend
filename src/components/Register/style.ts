import styled from "styled-components";

export const RegisterContainer = styled.div`
  width: 100%;
  height: calc(100vh - 108px);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: rgba(222, 224, 230, 1);
  overflow-y: scroll;
  min-width: 500px;
  @media screen and (max-width: 500px) {
    height: 100%;
    overflow-y: visible;
  }
`;

export const RegisterCustomHeader = {
  minWidth: "500px",
};
