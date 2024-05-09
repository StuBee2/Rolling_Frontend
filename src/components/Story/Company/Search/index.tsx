import * as S from "./style";
import readingGlasses from "@src/assets/icons/Search/readingGlasses.svg";
import search3 from "@src/assets/icons/Search/search3.svg";
import { useRecoilValue } from "recoil";
import { StorySearchCompanyAtom } from "@src/stores/story/story.store";
import { SubTitle, Title, TitleContainer } from "../../style";
import { Portal } from "@stubee2/stubee2-rolling-ui";
import SearchCompanyModal from "./SearchCompanyModal";
import { useState } from "react";
import { turnOnOffModal } from "@src/utils/Modal/turnOnOffModal";
import { Column, Row } from "@src/styles/flex";

const SearchCompany = () => {
  const [searchCompanyModal, setSearchCompanyModal] = useState(false);
  const storySearchCompany = useRecoilValue(StorySearchCompanyAtom);
  const companyName = storySearchCompany.companyName;

  return (
    <>
      <Column $rowGap={"20px"}>
        <TitleContainer>
          <Title>My Company 찾기</Title>
          <SubTitle>
            잠깐! 기업을 등록하기 전에 해당회사가 존재하는지 찾아주세요!
          </SubTitle>
        </TitleContainer>
        <S.SearchContainer>
          <Row $alignItems={"center"} $justifyContent={"space-between"}>
            <Row $columnGap={"10px"} $alignItems={"center"}>
              <S.Image src={readingGlasses} alt="이미지 없음" />
              <S.FindMyCompany>내 기업 찾기</S.FindMyCompany>
            </Row>
          </Row>

          <S.InputContainer
            onClick={() => turnOnOffModal(setSearchCompanyModal, "on")}
          >
            <S.Input isCompanyName={companyName}>
              {companyName || "기업명"}
            </S.Input>
            <img src={search3} alt="이미지 없음" />
          </S.InputContainer>
        </S.SearchContainer>
      </Column>

      {searchCompanyModal && (
        <Portal id="modal">
          <SearchCompanyModal setSearchCompanyModal={setSearchCompanyModal} />
        </Portal>
      )}
    </>
  );
};

export default SearchCompany;
