import styled from "styled-components";

export const UserNavBar = styled.div`
  width: 420px;
  height: 100%;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 1040px) {
    display: none;
  }
`;

export const UserInfoContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const UserImg = styled.img`
  width: 115px;
  height: 115px;
  border-radius: 100%;
  object-fit: cover;
  border: 1px solid #dddddd;
  box-shadow: 0 3px 6px 0 rgba(29, 34, 53, 0.08);
`;

export const UserName = styled.p`
  font-size: 27px;
  font-weight: 700;
`;

export const UserEmail = styled.p`
  font-size: 15px;
  color: #61677e;
`;

export const PageSelectContainer = styled.div`
  width: 100%;
  height: 300px;
  font-weight: bold;
  color: #61677e;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  -webkit-touch-callout: none;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
`;

export const PageSelectWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  border-bottom: 2px solid #dee0e6;
  font-size: 20px;
  padding-bottom: 20px;
`;

export const PageSelectItem = styled.div<{ isSelect?: boolean }>`
  width: 100%;
  height: 60px;

  background-color: ${({ isSelect }) => isSelect && "#1d1e5a"};
  color: ${({ isSelect }) => isSelect && "#ffffff"};
  border-radius: 8px;
  line-height: 60px;
  padding-left: 10px;
  cursor: pointer;

  display: flex;
  align-items: center;
  column-gap: 10px;

  img {
    width: 24px;
    height: 24px;
  }

  transform: scale(1);
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: ${({ isSelect }) => (isSelect ? "#24357b" : "#eeeeee")};
    transform: scale(0.98);
  }
  &:active {
    background-color: ${({ isSelect }) => (isSelect ? "#2b3f94" : "#dddddd")};
  }
`;
