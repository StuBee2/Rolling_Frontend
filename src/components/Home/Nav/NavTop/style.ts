import styled from "styled-components";

export const NavTopContainer = styled.div`
  display: none;
  @media screen and (max-width: 740px) {
    width: 100%;
    height: 60px;
    font-weight: bold;
    color: #fff;

    display: flex;
    white-space: nowrap;
  }
`;

export const NavTopUl = styled.ul<{ backgroundColor: string }>`
  width: 50%;
  height: 100%;
  background-color: ${(props) => props.backgroundColor};
  box-shadow: inset -5px 0px 10px 0px rgba(0, 0, 0, 0.2),
    inset 3px 0px 5px 0px rgba(0, 0, 0, 0.2);

  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 15px;
  padding: 1rem 1rem;

  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  li {
    cursor: pointer;
    display: flex;
    column-gap: 5px;
    align-items: center;

    img {
      width: 20px;
      height: 20px;
      margin-bottom: 5px;
    }

    p {
    }
  }
`;
