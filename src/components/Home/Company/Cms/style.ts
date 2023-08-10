import styled from "styled-components";

export const CmsBox = styled.div`
  width: 95%;
  height: 310px;
  border-radius: 20px;
  position: relative;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

export const CmsImg = styled.div<{ image: string }>`
  width: 100%;
  height: 70%;
  background: url(${(props) => props.image}) no-repeat;
  background-size: cover;
  border-radius: 20px 20px 0 0;
`;

export const CmsEtcContainer = styled.div`
  width: 100%;
  height: 30%;
  padding-left: 20px;

  border-radius: 0 0 20px 20px;
  background-color: #ffffff;

  display: flex;
  align-items: center;
  column-gap: 10px;

  img {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    object-fit: cover;
  }
`;

export const CmsPosterPosition = styled.p`
  font-size: 17px;
  font-weight: bold;
`;

export const CmsCompany = styled.p`
  font-size: 15px;
  margin-top: 5px;
`;

export const NextCmsPostArrowBtn = styled.img`
  width: 45px;
  height: 45px;
  cursor: pointer;
  position: absolute;
  top: 40%;
  left: 93%;
`;
