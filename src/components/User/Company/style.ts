import styled from "styled-components";

export const FontSize = styled.p<{ fontSize: string }>`
  font-size: ${(props) => props.fontSize};
`;

export const CompanyStatus = styled.div`
  width: 45%;
  height: 125px;
  background-color: #4869f6;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  color: #f9fafb;
  img {
    width: 45px;
    height: 45px;
  }
  @media screen and (max-width: 1355px) {
    width: 80%;
  }
`;

export const ContentGap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const CompanyAndWriteText = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const ListWrap = styled.div`
  width: 100%;
  padding-top: 20px;

  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const DelAndEditContainer = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;
  img {
    cursor: pointer;
    width: 90%;
    height: 40px;
  }
`;
