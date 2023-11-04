import * as S from "./style";
import { useRecoilValue } from "recoil";
import { StoryItemType } from "@src/types/Story/story.type";
import { storyItemsObject } from "@src/utils/Story/storyItemsObject";
import { StoryModifiableEventAtom } from "@src/stores/story/story.store";
import { StoryModifiableIdAtom } from "@src/stores/story/story.store";
import { StoryModifiableContentAtom } from "@src/stores/story/story.store";
import { useStoryModify } from "@src/hooks/Story/useStoryModify";
import { StoryModifiableContentPatchType } from "@src/types/Story/story.type";

export default function CompanyContent({ ...attr }: StoryItemType) {
  const { handleChangeModifyStoryContent } = useStoryModify();
  const isModifiableEvent = useRecoilValue(StoryModifiableEventAtom);
  const modifyStoryId = useRecoilValue(StoryModifiableIdAtom);
  const storyModifiableContent = useRecoilValue(StoryModifiableContentAtom);

  const renderModifyCompanyContent = () => {
    if (attr.storyId === modifyStoryId) {
      return (
        <>
          {storyItemsObject(attr).map((item) => (
            <S.Wrapper key={item.id}>
              {item.id === 1 ? (
                <S.AdvantagesAndDisAdvantages>
                  <S.Advantages>
                    <S.Title>
                      <img src={item.prosIcon} alt="이미지 없음" />
                      <p>{item.prosTitle}</p>
                    </S.Title>
                    <S.AdvantagesContentInput
                      type="text"
                      name={item.prosValueTitle}
                      value={storyModifiableContent.pros}
                      onChange={(e) =>
                        handleChangeModifyStoryContent(
                          e.target.name,
                          e.target.value
                        )
                      }
                    />
                  </S.Advantages>
                  <S.Advantages>
                    <S.Title>
                      <img src={item.consIcon} alt="이미지 없음" />
                      <p>{item.consTitle}</p>
                    </S.Title>
                    <S.AdvantagesContentInput
                      type="text"
                      name={item.consValueTitle}
                      value={storyModifiableContent.cons}
                      onChange={(e) =>
                        handleChangeModifyStoryContent(
                          e.target.name,
                          e.target.value
                        )
                      }
                    />
                  </S.Advantages>
                </S.AdvantagesAndDisAdvantages>
              ) : (
                <>
                  <S.Title>
                    <img src={item.icon} alt="이미지 없음" />
                    <p>{item.title}</p>
                  </S.Title>
                  {item.id === 0 ? (
                    <S.ModifyContentInput
                      type="text"
                      name={item.valueTitle}
                      value={
                        storyModifiableContent[
                          item.valueTitle as keyof StoryModifiableContentPatchType
                        ]
                      }
                      onChange={(e) =>
                        handleChangeModifyStoryContent(
                          e.target.name,
                          e.target.value
                        )
                      }
                    />
                  ) : (
                    <S.ModifyContentTextArea
                      name={item.valueTitle}
                      value={
                        storyModifiableContent[
                          item.valueTitle as keyof StoryModifiableContentPatchType
                        ]
                      }
                      onChange={(e) =>
                        handleChangeModifyStoryContent(
                          e.target.name,
                          e.target.value
                        )
                      }
                      isEtc={item.valueTitle}
                    />
                  )}
                </>
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
            {item.id === 1 ? (
              <S.AdvantagesAndDisAdvantages>
                <S.Advantages>
                  <S.Title>
                    <img src={item.prosIcon} alt="이미지 없음" />
                    <p>{item.prosTitle}</p>
                  </S.Title>
                  <S.AdvantagesContent isCons={true}>
                    {item.prosContent}
                  </S.AdvantagesContent>
                </S.Advantages>
                <S.Advantages>
                  <S.Title>
                    <img src={item.consIcon} alt="이미지 없음" />
                    <p>{item.consTitle}</p>
                  </S.Title>
                  <S.AdvantagesContent isCons={false}>
                    {item.consContent}
                  </S.AdvantagesContent>
                </S.Advantages>
              </S.AdvantagesAndDisAdvantages>
            ) : (
              <>
                <S.Title>
                  <img src={item.icon} alt="이미지 없음" />
                  <p>{item.title}</p>
                </S.Title>
                <S.Content isEtc={item.valueTitle}>{item.content}</S.Content>
              </>
            )}
          </S.Wrapper>
        ))}
      </>
    );
  };

  return (
    <S.Container>
      {isModifiableEvent
        ? renderModifyCompanyContent()
        : renderCompanyContent()}
    </S.Container>
  );
}
