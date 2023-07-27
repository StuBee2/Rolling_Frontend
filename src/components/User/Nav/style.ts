import styled from "styled-components";

export const UserNavBar = styled.div`
  width: 420px;
  height: calc(100vh - 108px);
  @media screen and (max-width: 1040px) {
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

export const UserNickName = styled.div`
  font-size: 15px;
  cursor: pointer;

  form {
    display: flex;
    column-gap: 10px;

    input {
      border: 1px solid #4869f6;
      outline: none;
      padding-left: 5px;
      border-radius: 5px;
      color: #1d1e5a;
    }
  }

  &:hover {
    color: #1d1e5a;
  }
`;

export const EditAndCancelContainer = styled.div`
  display: flex;
  column-gap: 2px;

  button {
    width: 35px;
    height: 20px;
    cursor: pointer;
    color: #fff;
    background-color: #4869f6;
    outline: none;
    border: none;
    border-radius: 5px;
    &:hover {
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
    }
  }
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
  display: flex;
  align-items: center;
  column-gap: 10px;
  img {
    width: 24px;
    height: 24px;
  }
`;

export const Logout = styled.div`
  width: 100%;
  height: 20%;
  font-size: 18px;
  line-height: 60px;
  padding-left: 10px;
  cursor: pointer;
`;
