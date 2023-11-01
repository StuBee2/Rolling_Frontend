import * as S from "./style";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import blueHeart from "@src/assets/icons/Story/blueHeart.png";
import redHeart from "@src/assets/icons/Story/redHeart.png";
import { StoryItemType } from "@src/types/Story/story.type";
import { storyItemsObject } from "@src/utils/Story/storyItemsObject";
import { StoryModifiableEventAtom } from "@src/stores/story/story.store";
import { StoryModifiableIdAtom } from "@src/stores/story/story.store";
import { StoryModifiableContentAtom } from "@src/stores/story/story.store";
import { useEditStory } from "@src/hooks/Story/useEditStory";

export default function CompanyContent({ ...attr }: StoryItemType) {
  const { handleModifyStoryContentValue, handleModifyStorySubmit } =
    useEditStory();
  const isModifiableEvent = useRecoilValue(StoryModifiableEventAtom);
  const changeElementId = useRecoilValue(StoryModifiableIdAtom);
  const [ischangeElementIdSame, setIschangeElementIdSame] = useState(false);

  const [storyModifiableContent, setStoryModifiableContent] = useRecoilState(
    StoryModifiableContentAtom
  );

  useEffect(() => {
    if (changeElementId === attr.storyId) {
      setStoryModifiableContent({
        schoolLife: attr.schoolLife,
        preparationCourse: attr.preparationCourse,
        employmentProcess: attr.employmentProcess,
        interviewQuestion: attr.interviewQuestion,
        mostImportantThing: attr.mostImportantThing,
        welfare: attr.welfare,
      });
      setIschangeElementIdSame(true);
    }
  }, [changeElementId, attr.storyId]);

  const renderModifyCompanyContent = () => {
    if (ischangeElementIdSame) {
      return (
        <>
          {storyItemsObject(attr).map((item) => (
            <S.Wrapper key={item.id}>
              <S.Title>
                <img src={item.icon} alt="이미지 없음" />
                <p>{item.title}</p>
              </S.Title>
              {item.id === 2 ? (
                <S.ModifyInput
                  type="text"
                  name={item.valueTitle}
                  value={storyModifiableContent.mostImportantThing}
                  onChange={(e) =>
                    handleModifyStoryContentValue(e.target.name, e.target.value)
                  }
                />
              ) : (
                <S.ModifyInput
                  type="text"
                  name={item.valueTitle}
                  value={storyModifiableContent[item.valueTitle]}
                  onChange={(e) =>
                    handleModifyStoryContentValue(e.target.name, e.target.value)
                  }
                />
              )}
            </S.Wrapper>
          ))}
        </>
      );
    } else {
      return renderCompanyContent();
    }
  };

  const renderCompanyContent = () => {
    return (
      <>
        {storyItemsObject(attr).map((item) => (
          <S.Wrapper key={item.id}>
            <S.Title>
              <img src={item.icon} alt="이미지 없음" />
              <p>{item.title}</p>
            </S.Title>
            {item.id === 2 ? (
              <S.Important>{attr.mostImportantThing}</S.Important>
            ) : (
              <S.Content>{item.content}</S.Content>
            )}
          </S.Wrapper>
        ))}
      </>
    );
  };

  return (
    <S.Container>
      ㅌ
      {isModifiableEvent
        ? renderModifyCompanyContent()
        : renderCompanyContent()}
      <S.AdvantagesAndDisAdvantages>
        <S.Advantages>
          <S.Title>
            <img src={blueHeart} alt="이미지 없음" />
            <p>우리 기업의 장점은</p>
          </S.Title>

          <S.AdvantagesContent isCons={true}>
            {attr.advantages}
          </S.AdvantagesContent>
        </S.Advantages>
        <S.Advantages>
          <S.Title>
            <img src={redHeart} alt="이미지 없음" />
            <p>우리 기업의 단점은</p>
          </S.Title>

          <S.AdvantagesContent>{attr.disAdvantages}</S.AdvantagesContent>
        </S.Advantages>
      </S.AdvantagesAndDisAdvantages>

      <button onClick={(e) => handleModifyStorySubmit(e)}>수정하기</button>
      {ischangeElementIdSame && <button>수정하기</button>}

    </S.Container>
  );
}
