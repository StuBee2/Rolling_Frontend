import styled from "styled-components";

export const CmsContainer = styled.div`
  width: 97%;
  height: auto;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  padding-left: 3px;
`;

export const CmsTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 25px;
  column-gap: 5px;
  img {
    width: 27px;
    height: 28px;
  }
`;

export const CmsBoxContanier = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
`;

export const CmsBox = styled.div`
  width: 95%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const CmsImg = styled.div<{ image: string }>`
  width: 100%;
  height: 70%;
  background: url(${(props) => props.image}) no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #d9d9d9;
`;

export const ArrowImg = styled.img`
  width: 34px;
  height: 35px;
  position: absolute;
  left: 90%;
  top: 40%;
  cursor: pointer;
`;

export const CmsEtc = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  column-gap: 10px;
  background-color: #fff;
  img {
    width: 43px;
    height: 43px;
    object-fit: cover;
    border-radius: 10px;
    background-color: #d9d9d9;
  }
`;

export const CmsPosition = styled.p`
  font-weight: bold;
`;

export const CmsCompany = styled.p`
  font-size: 14px;
`;
