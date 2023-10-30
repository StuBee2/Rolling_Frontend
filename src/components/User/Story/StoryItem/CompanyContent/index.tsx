import * as S from "./style";
import blueHeart from "@src/assets/icons/Story/blueHeart.png";
import redHeart from "@src/assets/icons/Story/redHeart.png";
import { StoryItemType } from "@src/types/Story/story.type";
import { storyItemsObject } from "@src/utils/Story/storyItemsObject";

export default function CompanyContent({ ...attr }: StoryItemType) {
  return (
    <S.Container>
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

      <S.AdvantagesAndDisAdvantages>
        <S.Advantages>
          <S.Title>
            <img src={blueHeart} alt="이미지 없음" />
            <p>우리 기업의 장점은</p>
          </S.Title>

          <S.AdvantagesContent isCons={true}>
            {attr.pros}
          </S.AdvantagesContent>
        </S.Advantages>

        <S.Advantages>
          <S.Title>
            <img src={redHeart} alt="이미지 없음" />
            <p>우리 기업의 단점은</p>
          </S.Title>

          <S.AdvantagesContent>{attr.cons}</S.AdvantagesContent>
        </S.Advantages>
      </S.AdvantagesAndDisAdvantages>
    </S.Container>
  );
}
