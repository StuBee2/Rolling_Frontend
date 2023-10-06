import styled from "styled-components";

export const CompanyDetailReviewContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const ReviewTitle = styled.div`
  font-size: 30px;
  font-weight: 700;
  display: flex;
  align-items: center;
  column-gap: 5px;
`;

export const ReviewCount = styled.p`
  color: #4869f6;
`;

export const CompanyDetailReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

export const ReviewItemContainer = styled.div`
  width: 100%;
  height: 350px;
  background-color: #fff;
  border: 1px solid #dddddd;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ReviewItemWrapper = styled.div`
  width: 93%;
  height: 85%;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const ReviewItemProfileInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const ReviewItemContentContainer = styled.div`
  width: 100%;
  height: calc(100% - 125px);
  display: flex;
  column-gap: 15px;
`;

export const ReviewItemUserInfo = styled.div`
  width: 220px;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const ReviewItemImgUrl = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 4rem;
  border: 1px solid #dddddd;
`;

export const ReviewItemNickName = styled.p`
  font-weight: 500;
  font-size: 16px;
`;

export const ReviewItemPositionAndCareerPath = styled.div`
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
    span {
      color: #61677e;
      font-weight: 600;
    }
  }
`;

export const ReviewItemContent = styled.div<{
  isCoincideMemberId: boolean;
}>`
  width: ${({ isCoincideMemberId }) =>
    isCoincideMemberId ? "calc(100% - 250px)" : "calc(100% - 220px)"};
  display: flex;
  column-gap: 5px;
`;

export const ReviewItemDescription = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  line-height: 23px;
  font-size: 15.5px;
  color: #72777a;
  white-space: pre-wrap;
`;

export const ReviewItemSetUp = styled.div`
  width: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const ReviewItemStarRatingContainer = styled.div`
  width: 100%;
  height: 115px;
  background-color: #f2f4f5;
  border-radius: 10px;
  display: flex;
  font-size: 17px;
  align-items: center;
`;
