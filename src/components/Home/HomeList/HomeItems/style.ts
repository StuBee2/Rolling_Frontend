import styled from "styled-components";

export const HomeItemsContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
  row-gap: 40px;

  @media screen and (max-width: 1393px) {
    row-gap: 0;
  }
`;

export const HomeItemWrapper = styled.div`
  width: 335px;
  height: 380px;

  @media screen and (max-width: 740px) {
    width: 500px;
    height: 555px;
  }
  @media screen and (max-width: 450px) {
    width: 335px;
    height: 380px;
  }
`;

export const CompanyImage = styled.div<{ image: string }>`
  width: 100%;
  height: 60%;

  border-radius: 15px;
  cursor: pointer;

  background: url(${(props) => props.image}) no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #fff;
`;

export const CompanyEtcContainer = styled.div`
  width: 100%;
  height: 40%;

  display: flex;
  flex-direction: column;
  row-gap: 2rem;

  padding-top: 30px;
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
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CompanyTagUl = styled.ul`
  display: flex;
  column-gap: 10px;
  color: rgba(72, 105, 246, 1);
  font-weight: 600;
`;
