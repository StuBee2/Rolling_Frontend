import { RollingPalette } from "@stubee2/stubee2-rolling-design-token";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ImgContainer = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  z-index: 1;

  position: absolute;
  left: 0;
  border: 1px solid #d9d9d9;

  img {
    width: 105px;
    height: 105px;
    border-radius: 100%;
    object-fit: cover;
  }
`;

export const Content = styled.div<{
  nameLength: number;
}>`
  width: ${({ nameLength }) => (nameLength >= 13 ? "335px" : "300px")};
  height: 105px;

  padding-right: ${({ nameLength }) => nameLength >= 13 && "15px"};
  background-color: ${RollingPalette.main.Base};
  border-radius: 5px;

  position: absolute;
  left: 3.5rem;

  display: flex;
  flex-direction: column;
  row-gap: 12px;
  justify-content: center;

  padding-left: 5.5rem;
  white-space: nowrap;
  border: 1px solid #d9d9d9;
`;

export const NickName = styled.p`
  color: #f9fafb;
  font-size: 18px;
  font-weight: 700;
`;

export const GithubId = styled.div`
  color: ${RollingPalette.unEmphasize.Base};
  font-size: 15px;
  font-weight: 500;
  display: flex;
  column-gap: 5px;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
  p {
    margin-top: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
