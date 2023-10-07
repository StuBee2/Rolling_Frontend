import styled from "styled-components";

export const ExternalSiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const ExternalSiteTitle = styled.div`
  font-size: 17px;
  font-weight: 600;
  display: flex;
  align-items: center;
  column-gap: 5px;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const ExternalSiteItemContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 0 1rem 1rem 1rem;
  border: 1px solid #dddddd;
  border-radius: 10px;
  background-color: #fff;
`;

export const ExternalSiteItemWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  margin-top: 15px;
`;

export const ExternalSiteItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  column-gap: 0.7rem;
  cursor: pointer;
  border-radius: 10px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid #dddddd;
    object-fit: cover;
  }

  p {
    font-size: 16px;
  }

  transform: scale(1);
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #eeeeee;
    transform: scale(0.97);
  }
  &:active {
    background-color: #dddddd;
    color: #4869f6;
  }
`;
