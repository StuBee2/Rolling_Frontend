import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 108px;
  font-size: 19px;
  background-color: #f9fafb;

  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const HeaderWrap = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
  overflow-x: scroll;
  @media screen and (max-width: 573px) {
    width: 95%;
  }
`;

export const PageContainer = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    cursor: pointer;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 25px;
  }
`;

export const PageList = styled.li<{ isSelect: boolean }>`
  cursor: pointer;
  font-weight: ${(props) => props.isSelect && "bold"};
`;

export const LoginSearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  div {
    cursor: pointer;
  }
`;

export const Search = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export const ProfileImg = styled.img`
  width: 45px;
  height: 45px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 8px;
`;
