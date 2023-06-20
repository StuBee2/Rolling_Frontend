import styled from "styled-components";

export const UserNavBar = styled.div`
  width: 330px;
  height: calc(100vh - 108px);
  @media screen and (max-width: 1025px) {
    display: none;
  }
`;

export const MemberInfoContainer = styled.div`
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
  box-shadow: 0 3px 6px 0 rgba(29, 34, 53, 0.08);
`;

export const UserName = styled.div`
  font-size: 27px;
  font-weight: 700;
`;

export const UserEmail = styled.div`
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
  gap: 10px;

  -webkit-touch-callout: none;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
`;

export const PageSelect = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  flex-direction: column;
  gap: 10px;

  border-bottom: 2px solid #dee0e6;
  font-size: 20px;
`;

export const PageSelectItem = styled.div<{ isSelect?: boolean }>`
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.isSelect && "#1d1e5a"};
  color: ${(props) => props.isSelect && "#ffffff"};
  border-radius: 8px;

  line-height: 60px;
  padding-left: 10px;
  cursor: pointer;
`;

export const Logout = styled.div`
  width: 100%;
  height: 20%;
  font-size: 18px;
  line-height: 60px;
  padding-left: 10px;
  cursor: pointer;
`;
