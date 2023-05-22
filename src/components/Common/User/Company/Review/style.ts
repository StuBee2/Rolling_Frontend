import styled from "styled-components";

export const ReviewBody = styled.div`
  width: 100%;
  height: 79px;
  cursor: pointer;

  padding-left: 17px;
  line-height: 22px;

  font-size: 15px;
  font-weight: 500;

  display: flex;
  gap: 10px;
  align-items: center;

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
