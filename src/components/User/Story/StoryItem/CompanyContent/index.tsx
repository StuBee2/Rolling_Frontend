import * as S from "./style";
import { useRecoilValue } from "recoil";
import { StoryItemType } from "@src/types/Story/story.type";
import { storyItemsObject } from "@src/utils/Story/storyItemsObject";
import { StoryModifiableEventAtom } from "@src/stores/story/story.store";
import { StoryModifiableContentAtom } from "@src/stores/story/story.store";
import { useStoryModify } from "@src/hooks/Story/useStoryModify";
import { TextInput } from "@stubee2/stubee2-rolling-ui";

interface Props {
  isCoincideStoryId: boolean;
  storyData: StoryItemType;
}

export default function CompanyContent({
  isCoincideStoryId,
  storyData,
}: Props) {
  const { handleChangeModifyStoryContent } = useStoryModify();
  const isModifiableEvent = useRecoilValue(StoryModifiableEventAtom);
  const storyModifiableContent = useRecoilValue(StoryModifiableContentAtom);

  const renderModifyCompanyContent = () => {
    if (isCoincideStoryId) {
      return (
        <>
          {storyItemsObject(storyData).map((item) => (
            <S.Wrapper key={item.id}>
              {item.id === 1 ? (
                <S.AdvantagesAndDisAdvantages>
                  <S.Advantages>
                    <S.Title>
                      <img src={item.prosIcon} alt="이미지 없음" />
                      <p>{item.prosTitle}</p>
                    </S.Title>
                    <TextInput
                      type="text"
                      autoComplete="off"
                      name={item.prosValueTitle}
                      placeholder={item.prosPlaceholder}
                      value={storyModifiableContent.pros}
                      customStyle={S.InputStyle}
                      handleChange={handleChangeModifyStoryContent}
                    />
                  </S.Advantages>

                  <S.Advantages>
                    <S.Title>
                      <img src={item.consIcon} alt="이미지 없음" />
                      <p>{item.consTitle}</p>
                    </S.Title>
                    <TextInput
                      type="text"
                      autoComplete="off"
                      name={item.consValueTitle}
                      placeholder={item.consPlaceholder}
                      value={storyModifiableContent.cons}
                      customStyle={S.InputStyle}
                      handleChange={handleChangeModifyStoryContent}
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
                    <TextInput
                      type="text"
                      autoComplete="off"
                      name={item.valueTitle}
                      placeholder={item.placeholder}
                      value={storyModifiableContent.welfare}
                      customStyle={S.InputStyle}
                      handleChange={handleChangeModifyStoryContent}
                    />
                  ) : (
                    <TextInput
                      type="text"
                      textType="textarea"
                      name={item.valueTitle}
                      placeholder={item.placeholder}
                      value={storyModifiableContent.etc}
                      customStyle={S.TextAreaStyle}
                      handleChange={handleChangeModifyStoryContent}
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
        {storyItemsObject(storyData).map((item) => (
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
