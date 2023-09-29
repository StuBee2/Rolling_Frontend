import styled from "styled-components";

export const UserInfoContainer = styled.div`
  width: 280px;
  height: 100%;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 1040px) {
    display: none;
  }
`;

export const UserInfoWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const UserInfoBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  width: 100%;
  white-space: nowrap;
  img {
    width: 75px;
    height: 75px;
    border: 1px solid #d9d9d9;
    object-fit: cover;
    border-radius: 4rem;
  }
  div {
    width: calc(100% - 85px);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    row-gap: 8px;
  }
`;

export const UserInfoNickName = styled.p`
  font-size: 18px;
  height: 20px;
  font-weight: bold;
  overflow-x: hidden;
  text-overflow: ellipsis;
  &:hover {
    color: rgba(72, 105, 246, 1);
  }
`;

export const UserInfoEmail = styled.p`
  font-size: 15px;
`;

export const RegistTextContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  margin-bottom: 15px;
  font-weight: 600;

  img {
    width: 20px;
    height: 20px;
  }
`;

export const CompanyRegistBtn = styled.button`
  width: 100%;
  height: 57px;
  outline: none;
  background-color: #fff;
  border-radius: 5px;
  font-size: 15px;
  color: rgba(72, 105, 246, 1);
  border: 2px solid rgba(72, 105, 246, 1);
  cursor: pointer;
`;
