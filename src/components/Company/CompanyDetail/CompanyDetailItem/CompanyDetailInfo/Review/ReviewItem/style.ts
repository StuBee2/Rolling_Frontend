import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 350px;
  background-color: #fff;
  border: 1px solid #dddddd;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 93%;
  height: 85%;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: calc(100% - 125px);
  display: flex;
  column-gap: 10px;
`;

export const UserInfo = styled.div`
  width: 220px;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const ImgUrl = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 4rem;
  border: 1px solid #dddddd;
`;

export const NickName = styled.p`
  font-weight: 500;
  font-size: 16px;
`;

export const PositionAndCareerPath = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 100px;
  row-gap: 5px;
  overflow-y: scroll;
  overflow-x: hidden;
  color: #999898;

  p {
    line-height: 22px;
    font-size: 14px;
    padding-right: 15px;
    span {
      color: #61677e;
      font-weight: 600;
    }
  }
`;

export const ContentWrapper = styled.div`
  width: calc(100% - 220px);
  display: flex;
  column-gap: 5px;
`;

export const Description = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  line-height: 23px;
  font-size: 15.5px;
  color: #72777a;
  white-space: pre-wrap;
`;

export const SetUp = styled.div`
  width: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const StarRatingContainer = styled.div`
  width: 100%;
  height: 115px;
  background-color: #f2f4f5;
  border-radius: 10px;
  display: flex;
  font-size: 17px;
  align-items: center;
`;
