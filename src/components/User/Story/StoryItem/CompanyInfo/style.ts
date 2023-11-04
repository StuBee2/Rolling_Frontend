import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  white-space: nowrap;

  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 20px;
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
  justify-content: center;

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
`;

export const Info = styled.div`
  display: flex;
  color: rgba(29, 30, 90, 1);

  p {
    font-family: "Pretendard-Bold" !important;
    font-weight: 600;
    span {
      color: #000;
    }
  }
`;

export const ModifyInput = styled.input`
  width: 100%;
  height: 130%;
  border: 2px solid #f2f4f5;
  border-radius: 2px;
  background-color: white;
  outline-color: blue;
  color: #737b98;
  padding: 5px;
`;

export const PositionListUl = styled.ul`
  position: absolute;
  top: 95px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid rgba(189, 194, 208, 1);
  color: rgba(29, 30, 90, 1);
  width: 100%;
  height: auto;
  max-height: 300px;
  z-index: 3;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  li {
    cursor: pointer;
  }
`;
