import * as S from "./style";
import blueHeart from "@src/assets/images/User/blueHeart.svg";
import redHeart from "@src/assets/images/User/redHeart.svg";
import { StoryItemType } from "@src/types/Review/review.type";
import { convertStoryItemsObject } from "@src/utils/Review/convertStoryItemsObject";

export default function CompanyContent({ ...attr }: StoryItemType) {
  return (
    <S.Container>
      {convertStoryItemsObject(attr).map((item) => (
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
    </S.Container>
  );
}
