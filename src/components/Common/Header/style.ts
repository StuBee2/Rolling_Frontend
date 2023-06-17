import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 108px;
  font-size: 19px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderWrap = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: nowrap;
`;

export const PageContainer = styled.div`
  display: flex;
  gap: 25px;
  align-items: center;

  img {
    width: 60px;
    height: 60px;
    cursor: pointer;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 25px;

    list-style: none;
    padding: 0;
    margin: 0;
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
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const ProfileImg = styled.img`
  width: 55px;
  height: 55px;

  cursor: pointer;
  border-radius: 8px;
`;
