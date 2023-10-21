import { StoryCompanyContentsType } from "@src/types/Story/story.type";
import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

interface Props {
  positionList: string[];
  setStoryContents: Dispatch<SetStateAction<StoryCompanyContentsType>>;
  setShowPositionList: Dispatch<SetStateAction<boolean>>;
}

export default function PositionList({ ...attr }: Props) {
  const { positionList, setStoryContents, setShowPositionList } = attr;
  return (
    <PositionListUl>
      {positionList.map((item, idx) => (
        <li
          key={idx}
          onClick={() => {
            setStoryContents((prev) => ({
              ...prev,
              position: item,
            }));
            setShowPositionList(false);
          }}
        >
          {item}
        </li>
      ))}
    </PositionListUl>
  );
}

const PositionListUl = styled.ul`
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
  overflow-y: scroll;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  li {
    cursor: pointer;
  }
`;
