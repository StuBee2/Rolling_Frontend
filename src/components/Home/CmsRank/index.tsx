import styled from "styled-components";
import Cms from "./Cms";
import Rank from "./Rank";

export default function CmsRank() {
  return (
    <CmsRankContainer>
      <Cms />
      <Rank />
    </CmsRankContainer>
  );
}

export const CmsRankContainer = styled.div`
  width: 360px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 5px;
  row-gap: 3rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 1040px) {
    display: none;
  }
`;
