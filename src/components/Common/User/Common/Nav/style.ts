import styled from "styled-components";

export const UserNavBar = styled.div`
  width: 395px;
  height: 100vh;

  background-color: #ffffff;
  border-left: 1px solid #d9d9d9;
  box-shadow: 5px 1px 8px 0 rgba(0, 0, 0, 0.06);

  @media screen and (max-width: 1025px) {
    display: none;
  }
`;

export const UserLogo = styled.div`
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
  padding: 20px 0 0 20px;

  -webkit-touch-callout: none;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
`;

export const UserAbleWrap = styled.div`
  width: 395px;
  height: 650px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const UserProfileContainer = styled.div`
  width: 100%;
  height: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-top: 30px;
`;

export const UserImg = styled.img`
  width: 112px;
  height: 112px;
  border-radius: 4rem;
  background-color: gray;
  object-fit: cover;
  margin-bottom: 10px;
  box-shadow: 0 3px 6px 0 rgba(29, 34, 53, 0.08);
`;

export const UserName = styled.div`
  font-size: 26px;
  font-weight: 700;
`;

export const UserEmail = styled.div`
  font-size: 15px;
  color: #929294;
  margin-top: 5px;
`;

export const CenterDiv = styled.div<{ isLine?: boolean }>`
  display: flex;
  width: 300px;
  height: 200px;
  border-bottom: ${(props) =>
    props.isLine && "1px solid rgba(146, 146, 148, 0.3)"};
`;

export const UserAble = styled.ul<{ isSpaceEvenly?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.isSpaceEvenly && "space-evenly"};

  font-size: 18px;
  list-style-type: none;

  div {
    font-size: 15px;
    font-weight: 600;

    color: #7b8994;
    margin-top: 20px;
    cursor: pointer;
  }
`;

export const UserCategory = styled.li<{ isSelect: boolean }>`
  color: #303038;
  list-style-type: none;

  font-weight: ${(props) => props.isSelect && "800"};
  border-bottom: ${(props) => props.isSelect && "2px solid #303038"};
  padding-bottom: 10px;
  cursor: pointer;

  @media screen and (max-width: 1025px) {
    color: ${(props) => (props.isSelect ? "#303038" : "#767678")};
  }
`;
