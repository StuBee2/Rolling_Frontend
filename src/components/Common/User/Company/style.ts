import styled from "styled-components";

export const InfoContainer = styled.div<{ isRow: boolean }>`
  width: 93%;
  height: 48px;

  margin: 5px 0 0 10px;

  display: flex;
  flex-direction: ${(props) => (props.isRow ? "row" : "column")};
  margin-bottom: ${(props) => (props.isRow ? "" : "10px")};
  justify-content: space-between;

  white-space: nowrap;
  overflow: hidden;
`;

export const AbleContainer = styled.div`
  display: flex;
  white-space: nowrap;
  overflow: hidden;
`;

export const Profile = styled.img`
  width: 40px;
  height: 40px;

  border-radius: 6rem;
  object-fit: cover;
`;

export const CompanyName = styled.div`
  margin-left: 10px;
  line-height: 40px;
  text-overflow: ellipsis;
`;

export const CompanyDescription = styled.div`
  text-overflow: ellipsis;
  cursor: pointer;
`;

export const CompanyAddress = styled.div`
  text-align: right;
  font-size: 13px;
  color: #bbbbbb;
`;