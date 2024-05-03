import { Dispatch, SetStateAction } from "react";
import * as S from "./style";

interface Props {
  positionList: string[];
  setShowPositionList: Dispatch<SetStateAction<boolean>>;
  setStoryRequiredElement: Dispatch<SetStateAction<Record<string, string>>>;
  positionTop: string;
}

const StoryPositionList = ({
  positionList,
  setShowPositionList,
  setStoryRequiredElement,
  positionTop,
}: Props) => {
  return (
    <>
      {positionList.length > 0 && (
        <S.Container positionTop={positionTop}>
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
};

export default StoryPositionList;
