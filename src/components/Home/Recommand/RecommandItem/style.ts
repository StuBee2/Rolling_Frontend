import styled from "styled-components";

export const RecommandItemContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

  overflow-x: scroll;
  padding: 0 1rem 0 1rem;
`;

export const RecommandItemBox = styled.div`
  width: 260px;
  height: 180px;

  img {
    width: 100%;
    height: 167px;

    object-fit: 100%;
    border-radius: 10px;
    border: 1px solid #ddd;
    cursor: pointer;

    transform: scale(1);
    transition: all 0.1s ease-in-out;
    &:hover {
      transform: scale(1.02);
      box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.04);
    }
  }
  p {
    text-align: center;
    font-size: 17px;
    font-weight: bold;
    margin-top: 5px;
  }
`;
