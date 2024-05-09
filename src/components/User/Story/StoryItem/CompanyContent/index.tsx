import * as S from "./style";
import { useRecoilValue } from "recoil";
import { StoryItemType } from "@src/types/Story/story.type";
import { storyItemsObject } from "@src/utils/Story/storyItemsObject";
import { StoryModifiableEventAtom } from "@src/stores/story/story.store";
import { StoryModifiableContentAtom } from "@src/stores/story/story.store";
import { useStoryModify } from "@src/hooks/Story/useStoryModify";
import { TextInput } from "@stubee2/stubee2-rolling-ui";
import { Column } from "@src/styles/flex";

interface Props {
  isCoincideStoryId: boolean;
  storyData: StoryItemType;
}

const CompanyContent = ({ isCoincideStoryId, storyData }: Props) => {
  const { handleChangeModifyStoryContent } = useStoryModify();
  const isModifiableEvent = useRecoilValue(StoryModifiableEventAtom);
  const storyModifiableContent = useRecoilValue(StoryModifiableContentAtom);

  const renderModifyCompanyContent = () => {
    if (isCoincideStoryId) {
      return (
        <>
          {storyItemsObject(storyData).map((item) => (
            <Column
              $width={"100%"}
              $height={"100%"}
              $rowGap={"1.5rem"}
              key={item.id}
            >
              {item.id === 1 ? (
                <S.AdvantagesAndDisAdvantages>
                  <S.ProsAndCons>
                    <S.Title>
                      <S.Image src={item.prosIcon} alt="이미지 없음" />
                      <S.Text>{item.prosTitle}</S.Text>
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
                  </S.ProsAndCons>

                  <S.ProsAndCons>
                    <S.Title>
                      <S.Image src={item.consIcon} alt="이미지 없음" />
                      <S.Text>{item.consTitle}</S.Text>
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
                  </S.ProsAndCons>
                </S.AdvantagesAndDisAdvantages>
              ) : (
                <>
                  <S.Title>
                    <S.Image src={item.icon} alt="이미지 없음" />
                    <S.Text>{item.title}</S.Text>
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
            </Column>
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
          <Column
            $width={"100%"}
            $height={"100%"}
            $rowGap={"1.5rem"}
            key={item.id}
          >
            {item.id === 1 ? (
              <S.AdvantagesAndDisAdvantages>
                <S.ProsAndCons>
                  <S.Title>
                    <S.Image src={item.prosIcon} alt="이미지 없음" />
                    <S.Text>{item.prosTitle}</S.Text>
                  </S.Title>
                  <S.ProsAndConsContent isPros={true}>
                    {item.prosContent}
                  </S.ProsAndConsContent>
                </S.ProsAndCons>
                <S.ProsAndCons>
                  <S.Title>
                    <S.Image src={item.consIcon} alt="이미지 없음" />
                    <S.Text>{item.consTitle}</S.Text>
                  </S.Title>
                  <S.ProsAndConsContent isPros={false}>
                    {item.consContent}
                  </S.ProsAndConsContent>
                </S.ProsAndCons>
              </S.AdvantagesAndDisAdvantages>
            ) : (
              <>
                <S.Title>
                  <S.Image src={item.icon} alt="이미지 없음" />
                  <S.Text>{item.title}</S.Text>
                </S.Title>
                <S.Content isEtc={item.valueTitle}>{item.content}</S.Content>
              </>
            )}
          </Column>
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
};

export default CompanyContent;
