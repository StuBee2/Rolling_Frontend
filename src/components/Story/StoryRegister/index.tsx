import { Column } from "@src/styles/flex";
import { AddText, SubTitle, Title, TitleContainer } from "../style";
import StoryRegisterItem from "./RegisterItem";
import * as S from "./style";

interface Props {
  storySearchCompany: {
    companyName: string;
    isExistSearchList: boolean;
  };
  storyCompanyId: string;
}

function StoryRegister({ storySearchCompany, storyCompanyId }: Props) {
  const { companyName, isExistSearchList } = storySearchCompany;

  return (
    <Column $rowGap={"2rem"}>
      <TitleContainer>
        <Title>My Company 스토리</Title>
        <SubTitle>
          내 기업의 스토리를 작성하고 후배들에게 롤링해 주세요
        </SubTitle>
        {isExistSearchList && companyName !== "" && (
          <S.GuideText>
            이미 기업이 등록 되어있습니다. {companyName}의 스토리를 남겨주세요!
          </S.GuideText>
        )}
      </TitleContainer>

      <Column $rowGap={"15px"}>
        {storyCompanyId && companyName ? (
          <StoryRegisterItem
            storyCompanyId={storyCompanyId}
            companyName={companyName}
          />
        ) : (
          <AddText>
            {companyName
              ? `${companyName} 기업의 정보를 먼저 입력해주세요!`
              : "기업을 먼저 찾아주세요!"}
          </AddText>
        )}
      </Column>
    </Column>
  );
}

export default StoryRegister;
