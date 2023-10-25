import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 250px;
  background-color: #f3f4f5;
  border-radius: 15px;
  border: 1px solid #dddddd;
  padding: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-bottom: 20px;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const TextContainer = styled.div`
  font-size: 22px;
  width: 100%;
  height: 20px;
  margin-bottom: 18px;
`;

export const AbleContainer = styled.div`
  width: 100%;
  height: 200px;
  border-bottom: 2.5px solid rgba(189, 194, 208, 1);
  display: flex;
  align-items: center;
  column-gap: 20px;
  white-space: nowrap;
  overflow-x: auto;
  img {
    width: 85px;
    height: 85px;
    border-radius: 4rem;
    object-fit: cover;
    border: 1px solid #dddddd;
  }
`;

export const MyGitInfoLoginTypeText = styled.p`
  color: rgba(115, 123, 152, 1);
  margin-top: 5px;
  font-size: 14px;
`;

export const MyGitInfoContainer = styled.div`
  width: 100%;
  height: 30px;
  div {
    display: flex;
    align-items: center;
    column-gap: 5px;
    font-weight: 400;
    cursor: pointer;
  }
`;
