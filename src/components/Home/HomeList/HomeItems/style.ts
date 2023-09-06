import styled from "styled-components";

export const HomeItemsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 30px;
`;

export const HomeItemWrapper = styled.div`
  width: 335px;
  height: 335px;
  @media screen and (max-width: 320px) {
    height: 290px;
  }
`;

export const CompanyImage = styled.div<{ image: string }>`
  width: 100%;
  height: 60%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  background: url(${(props) => props.image}) no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #d9d9d9;
  cursor: pointer;
`;

export const CompanyEtcContainer = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 20px;
`;

export const CompanyNameAndCreatedAt = styled.p`
  font-size: 18px;
  color: rgba(115, 123, 152, 1);
  font-weight: bold;
`;

export const CompanyDescription = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const CompanyAddress = styled.p`
  font-size: 15px;
  font-weight: bold;
  color: rgba(189, 194, 208, 1);
`;

export const CompanyTagUl = styled.ul`
  display: flex;
  column-gap: 10px;
  color: rgba(72, 105, 246, 1);
  font-weight: 600;
`;
