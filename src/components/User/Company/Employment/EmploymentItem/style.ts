import styled from "styled-components";

export const EmploymentItemContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
`;

export const EmploymentItemWrapper = styled.div`
  width: calc(100% - 40px);
  height: 100%;
  background-color: rgba(247, 249, 250, 1);
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EmploymentStatusAndRegisteredContainer = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 10px;
`;

export const EmploymenyCompanyAddress = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  color: #61677e;
`;

export const EmploymentStatusText = styled.p`
  font-size: 18px;
  font-weight: 400;
`;

export const EmploymentItem = styled.div`
  width: 90%;
  height: 70%;
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  white-space: nowrap;
  overflow-y: hidden;
  overflow-x: scroll;
`;

export const EmplymentInfoContainer = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  align-items: center;
  column-gap: 1.5rem;
  img {
    width: 110px;
    height: 110px;
    object-fit: cover;
    border-radius: 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
`;

export const EmployerName = styled.p`
  font-size: 30px;
  font-weight: bold;
`;

export const EmployerDescription = styled.p`
  color: rgba(115, 123, 152, 1);
  font-size: 15px;
  font-weight: 300;
`;
