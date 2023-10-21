import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  white-space: nowrap;

  overflow-x: hidden;
  overflow-y: hidden;
  padding-bottom: 20px;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      overflow-x: scroll;
    }
  }
`;

export const CompanyLogo = styled.div<{ isHaveSocialId: string }>`
  width: 115px;
  height: 115px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    border-radius: ${({ isHaveSocialId }) => (isHaveSocialId ? "4rem" : "5px")};
    object-fit: cover;
    border: 1px solid #ddd;
  }
`;

export const Wrapper = styled.div`
  width: calc(100% - 115px);
  height: 115px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 20px;

  padding: 0.5rem 0 10px 2rem;
`;

export const Title = styled.p`
  font-size: 25px;
  font-family: "Pretendard-Bold" !important;
  cursor: pointer;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const Info = styled.div`
  display: flex;
  column-gap: 20px;
  color: rgba(29, 30, 90, 1);

  p {
    font-family: "Pretendard-Bold" !important;
    font-weight: 600;
    span {
      color: #000;
    }
  }
`;
