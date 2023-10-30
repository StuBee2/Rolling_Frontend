import styled from "styled-components";

export const Container = styled.div`
  position: absolute;

  width: 100%;
  max-height: 250px;

  border: 2px solid #d9d9d9;
  background-color: #fff;
  border-radius: 5px;

  top: 95px;

  z-index: 3;
  overflow-y: auto;
`;

export const Ul = styled.ul`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  li {
    width: 100%;
    height: 55px;

    padding-left: 20px;

    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
      background-color: rgba(242, 244, 245, 1);
    }
  }
`;
