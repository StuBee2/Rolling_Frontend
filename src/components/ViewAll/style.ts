import styled from "styled-components";

export const ViewAllContainer = styled.div<{ rowGap: string }>`
  width: 100%;
  height: 100%;

  padding-top: 90px;

  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: ${({ rowGap }) => rowGap};
  justify-content: center;

  background-color: #f9fafb;
  min-width: 500px;
`;

export const ViewAllWrapper = styled.div`
  width: 1200px;
  height: 100%;
  padding: 3rem 0 2rem 0;

  display: flex;
  flex-direction: column;
  row-gap: 5rem;

  @media screen and (max-width: 1215px) {
    width: 1000px;
  }
  @media screen and (max-width: 1031px) {
    width: 800px;
  }
  @media screen and (max-width: 850px) {
    width: 600px;
  }
  @media screen and (max-width: 650px) {
    width: 480px;
  }
`;

export const TitleContianer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 17px;
`;

export const Title = styled.p`
  font-size: 30px;
  font-weight: 700;

  span {
    font-size: 13px;
    margin-left: 10px;
    color: rgba(115, 123, 152, 1);
  }
`;

export const SubTitle = styled.p`
  color: #61677e;
  font-size: 17px;
  font-weight: 600;

  line-height: 25px;

  span {
    color: rgba(72, 105, 246, 1);
  }
`;

export const CompanyLogoContainer = styled.div<{ rgb: string }>`
  width: 100%;
  height: 60%;
  border-radius: 10px;

  //회사 랭킹 숫자 보여주기 위해서 사용함
  position: relative;

  display: flex;
  justify-content: center;
  border-bottom: 1px solid #ddd;

  background-color: ${({ rgb }) => rgb || "#fff"};
  overflow: hidden;

  border: 1px solid #ddd;
`;

export const LogoImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;

  transform: scale(1);
  transition: all 0.27s ease-in-out;
  &:hover {
    transform: scale(1.08);
  }
`;

export const CompanyContent = styled.div`
  width: 100%;
  height: 40%;

  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 1rem 1rem 0.7rem 0.3rem;
`;
