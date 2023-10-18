import styled from "styled-components";

export const MainContainer = styled.div`
  width: calc(100% - 290px);
  height: 100%;

  display: flex;
  flex-direction: column;
  row-gap: 3rem;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }

  @media screen and (max-width: 1105px) {
    width: 100%;
  }
`;

export const MainWrapper = styled.div<{ rowGap: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: ${({ rowGap }) => rowGap};
  overflow-y: hidden;
`;

export const MainTitle = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 25px;
  column-gap: 10px;
  img {
    width: 27px;
    height: 27px;
  }
  p {
    span {
      color: rgba(236, 106, 94, 1);
    }
  }
`;

export const MainItemContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const MainItemListContainer = styled.div`
  widht: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const MainItemWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  @media screen and (max-width: 703px) {
    justify-content: center;
  }
`;

export const MainItemBox = styled.div`
  width: 330px;
  height: 300px;
  border: 1px solid #ddd;

  border-radius: 10px;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  transform: scale(1);
  transition: all 0.1s ease-in-out;
  &:hover {
    transform: scale(0.99);
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.04);
  }

  @media screen and (max-width: 1105px) {
    flex-basis: 47%;
    height: 330px;
  }
  @media screen and (max-width: 710px) {
    flex-basis: auto;
    width: 98%;
    height: 450px;
  }
`;

export const CompanyLogoContainer = styled.div<{ image: string }>`
  width: 100%;
  height: 65%;

  background: url(${({ image }) => image}) no-repeat;
  background-size: 100%;
  background-position: center;
  border-bottom: 1px solid #ddd;

  @media screen and (max-width: 710px) {
    height: calc(100% - 121px);
  }
`;

export const CompanyContentContainer = styled.div`
  width: 100%;
  height: 35%;
  background: #fff;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 1rem 0.7rem 1rem;

  @media screen and (max-width: 710px) {
    height: 121px;
    justify-content: normal;
    row-gap: 1.5rem;
  }
`;

export const CompanyNameAndCreatedAt = styled.p`
  font-size: 18px;
  color: rgba(115, 123, 152, 1);
  font-weight: bold;
`;

export const CompanyDescriptionAndAddress = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6px;
`;

export const CompanyDescription = styled.p`
  font-size: 17px;
  font-weight: bold;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  height: 20px;
`;

export const CompanyAddress = styled.p`
  font-size: 15px;
  font-weight: bold;
  color: rgba(189, 194, 208, 1);

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
