import { StoryRegistRequireType } from "@src/types/Story/story.type";
import { Dispatch, SetStateAction } from "react";
import * as S from "./style";

interface Props {
  positionList: string[];
  setShowPositionList: Dispatch<SetStateAction<boolean>>;
  setStoryRequiredElement: Dispatch<SetStateAction<StoryRegistRequireType>>;
}

export default function StoryPositionList({
  positionList,
  setShowPositionList,
  setStoryRequiredElement,
}: Props) {
  return (
    <>
      {positionList.length > 0 && (
        <S.Container>
          <S.Ul>
            {positionList.map((item, idx) => (
              <li
                key={idx}
                onClick={() => {
                  setStoryRequiredElement((prev) => ({
                    ...prev,
                    position: item,
                  }));
                  setShowPositionList(false);
                }}
              >
                {item}
              </li>
            ))}
          </S.Ul>
        </S.Container>
      )}
    </>
  );
}
