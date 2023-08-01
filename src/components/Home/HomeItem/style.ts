import styled from "styled-components";

export const CompanyItemContainer = styled.div`
  width: 370px;
  height: 380px;
`;

export const CompanyImageContainer = styled.div`
  width: 100%;
  height: 254px;
  position: relative;
  cursor: pointer;
`;

export const CompanyImage = styled.div<{ image: string }>`
  width: 100%;
  height: 90%;
  background: url(${(props) => props.image}) no-repeat;
  background-size: cover;
  border-radius: 15px;
  box-shadow: 1px 3px 2px rgba(0, 0, 0, 0.2);
  background-color: yellow;
  transform: scale(1);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.03);
  }
`;

export const CompanyRegister = styled.img`
  width: 60px;
  height: 60px;
  box-shadow: 1px 3px 2px rgba(0, 0, 0, 0.2);

  object-fit: cover;
  border-radius: 4rem;
  border: 5px solid #ffffff;

  position: absolute;
  right: 20px;
  bottom: 0;
`;

export const CompanyEtcContainer = styled.div`
  width: 90%;
  height: 32%;
  font-weight: bold;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ul {
    display: flex;
    color: #4869f6;
    column-gap: 15px;
  }
`;

export const RegisterNameAndCreatedAt = styled.p`
  font-size: 17px;
  color: #61677e;
`;

export const CompanyIntroduce = styled.p`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const CompanyDescription = styled.p`
  color: #737b98;
  font-size: 14px;
`;
