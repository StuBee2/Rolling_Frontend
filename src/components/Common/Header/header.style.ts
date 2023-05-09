import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 80px;
  background-color: #18181d;

  display: flex;
  line-height: 80px;
  justify-content: space-between;

  div {
    display: flex;
    margin-right: 10%;
  }

  -webkit-touch-callout: none;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
`;

export const Logo = styled.div`
  display: flex;
  margin-left: 3%;
  img {
    width: 80px;
    height: 80px;
    cursor: pointer;
  }

  div {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    color: #00ba91;
    text-align: left;
    cursor: pointer;
  }
`;

export const CategoryLink = styled.div`
  color: #ffffff;
  text-decoration: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  padding-right: 20%;
  cursor: pointer;
  &:hover {
    color: #00ba91;
  }
`;
