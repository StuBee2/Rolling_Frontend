import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100%;
  height: calc(100vh - 63px);

  position: absolute;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const LoginBox = styled.div`
  width: 714px;
  height: 737px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 50px;
`;

export const Logo = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
`;

export const LoginBtn = styled.div<{ isGoogle: boolean }>`
  width: 592px;
  height: 72px;

  background-color: ${(props) => (props.isGoogle ? "#D9D9D9" : "#000000")};

  margin-top: 20px;
  border-radius: 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  line-height: 80px;
  padding: 0 20px 0 20px;
  cursor: pointer;

  img {
    width: 33px;
    height: 33px;
    vertical-align: middle;
    margin-top: 18px;
  }

  span {
    color: ${(props) => (props.isGoogle ? "#000000" : "#FFFFFF")};
    font-size: 23px;
    font-weight: bold;
  }
`;
