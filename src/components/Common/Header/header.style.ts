import styled from "styled-components";

export const header = styled.div`
  width: 100vw;
  height: 10%;
  background: #18181d;
`;

export const logo = styled.div`
  display: flex;
  padding-top: 0.5%;
`;

export const logoImg = styled.img`
  width: 6%;
  height: 6%;
`;

export const logoName = styled.h1`
  margin: 1.6% 0 0 -1.5%;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 150%;
  color: #00ba91;
`;

export const categoryBox = styled.div`
  display: flex;
  float: right;
  margin: -3% 10% 0 0;
`;

export const categoryTitle = styled.div`
  padding-right: 30%;
`;
export const categoryLink = styled.div`
  color: white;
  text-decoration: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 100%;
  padding-right: 20%;
  cursor: pointer;
  &:hover {
    color: #00ba91;
  }
`;
