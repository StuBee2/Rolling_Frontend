import * as S from "./style";
import readingGlasses from "@src/assets/icons/Search/readingGlasses.png";
import search3 from "@src/assets/icons/Search/search3.png";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  StorySearchCompanyAtom,
  StorySearchCompanyNameModalAtom,
} from "@src/stores/story/story.store";
import { turnOnModal } from "@src/utils/Modal/turnOnOffModal";
import { SubTitle, Title, TitleContainer } from "../../style";

export default function SearchCompany() {
  const setSearchCompanyModal = useSetRecoilState(
    StorySearchCompanyNameModalAtom
  );
  const storySearchCompany = useRecoilValue(StorySearchCompanyAtom);
  const companyName = storySearchCompany.companyName;

  return (
    <S.Container>
      <TitleContainer>
        <Title>My Company 찾기</Title>
        <SubTitle>
          잠깐! 기업을 등록하기 전에 해당회사가 존재하는지 찾아주세요!
        </SubTitle>
      </TitleContainer>
      <S.SearchContainer>
        <S.SearchTitle>
          <S.SearchCompany>
            <img src={readingGlasses} alt="이미지 없음" />
            <p>내 기업 찾기</p>
          </S.SearchCompany>
        </S.SearchTitle>

        <S.InputContainer onClick={() => turnOnModal(setSearchCompanyModal)}>
          <S.Input isCompanyName={companyName}>
            {companyName || "기업명"}
          </S.Input>
          <img src={search3} alt="이미지 없음" />
        </S.InputContainer>
      </S.SearchContainer>
    </S.Container>
  );
}
