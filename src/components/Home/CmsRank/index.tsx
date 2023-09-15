import styled from "styled-components";
import Rank from "./Rank";

export default function CmsRank() {
  return (
    <CmsRankContainer>
      <Rank />
    </CmsRankContainer>
  );
}

export const CmsRankContainer = styled.div`
  width: 340px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 5px;
  row-gap: 3rem;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 740px) {
    display: none;
  }
`;
