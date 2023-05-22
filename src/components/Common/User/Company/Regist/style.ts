import styled from "styled-components";

export const RegistBody = styled.div`
  width: 100%;
  height: 79px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;

  img {
    width: 76px;
    height: 76px;

    object-fit: cover;
    border-radius: 5px;
  }

  ul {
    width: 79%;
    list-style-type: none;
  }
`;

export const RegistLi = styled.li<{ isAddress?: boolean; isDate?: boolean }>`
  font-size: ${(props) => (props.isDate ? "13px" : "15px")};
  color: ${(props) =>
    !props.isDate && !props.isAddress ? "#000000" : "#999999"};
  line-height: 22px;
  font-weight: ${(props) => !props.isDate && !props.isAddress && 600};
  text-align: ${(props) => props.isAddress && "right"};
`;
