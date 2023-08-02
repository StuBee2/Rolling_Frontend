import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: calc(100% - 108px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9fafb;
  @media screen and (max-width: 740px) {
    flex-direction: column;
  }
  white-space: nowrap;
`;

export const HomeWrapper = styled.div`
  width: 1570px;
  height: 100%;
  display: flex;
  padding-top: 20px;

  @media screen and (max-width: 1620px) {
    width: 1270px;
  }
  @media screen and (max-width: 1355px) {
    width: 730px;
  }
  @media screen and (max-width: 740px) {
    width: 370px;
  }
  @media screen and (max-width: 380px) {
    width: 100%;
  }
`;

export const NavAndHomeItemContainer = styled.div`
  width: calc(100% - 390px);
  height: 100%;
  display: flex;
  @media screen and (max-width: 1355px) {
    width: 100%;
  }
`;

export const HomeItemContainer = styled.div`
  width: calc(100% - 320px);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 740px) {
    width: 100%;
  }
`;

export const HomeItemWrapper = styled.div`
  width: 90%;
  height: 100%;
  @media screen and (max-width: 1355px) {
    width: 100%;
  }
`;

export const HomeItemBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 30px;
  @media screen and (max-width: 1620px) {
    justify-content: center;
  }
`;

export const Title = styled.div`
  width: 100%;
  height: 30px;

  font-size: 25px;
  font-weight: bold;
  display: flex;
  align-items: center;

  img {
    width: 30px;
    height: 30px;
  }

  @media screen and (max-width: 1355px) and (min-width: 740px) {
    padding-left: 20px;
  }
`;

export const CmsContainer = styled.div`
  width: 390px;
  height: 100%;
  position: sticky;
  top: 10px;

  display: flex;
  flex-direction: column;
  row-gap: 40px;
  @media screen and (max-width: 1355px) {
    display: none;
  }
`;
