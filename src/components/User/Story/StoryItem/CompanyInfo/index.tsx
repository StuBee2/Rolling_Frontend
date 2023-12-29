import * as S from "./style";
import Logo from "@src/assets/icons/Logo/logo.svg";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { StoryModifiableEventAtom } from "@src/stores/story/story.store";
import { StoryModifiableContentAtom } from "@src/stores/story/story.store";
import { useStoryModify } from "@src/hooks/Story/useStoryModify";
import { TextInput } from "@stubee2/stubee2-rolling-ui";
import { InputStyle } from "../CompanyContent/style";
import { searchPosition } from "@src/utils/Position/searchPosition";
import { Dispatch, SetStateAction } from "react";
import StoryPositionList from "@src/components/Story/StoryRegister/RegisterItem/PositionList";

interface Props {
  isCoincideStoryId: boolean;
  storyData: {
    companyImgUrl?: string;
    companyName?: string;
    storyId?: string;
    writerId?: string;
    memberNickName?: string;
    memberSocialLoginId?: string;
    memberImageUrl?: string;
    companyId?: string;
    position: string;
  };
  showPositionList: boolean;
  setShowPositionList: Dispatch<SetStateAction<boolean>>;
}

export default function CompanyInfo({ ...attr }: Props) {
  const navigate = useNavigate();
  const { handleChangeModifyStoryContent, setStoryModifiableContent } =
    useStoryModify();

  const isModifiableEvent = useRecoilValue(StoryModifiableEventAtom);
  const storyModifiableContent = useRecoilValue(StoryModifiableContentAtom);

  const positionList = searchPosition(storyModifiableContent.position);

  const renderModifyCompanyInfo = () => {
    if (attr.isCoincideStoryId) {
      return (
        <S.Info>
          <p>담당업무</p> ·
          <S.PositionContainer onClick={(e) => e.stopPropagation()}>
            <TextInput
              type="text"
              name="position"
              placeholder="ex) 프론트엔드 개발자"
              autoComplete="off"
              value={storyModifiableContent.position}
              handleChange={(e) => {
                handleChangeModifyStoryContent(e);
                !attr.showPositionList && attr.setShowPositionList(true);
              }}
              customStyle={InputStyle}
            />
            {attr.showPositionList && (
              <StoryPositionList
                positionList={positionList}
                setShowPositionList={attr.setShowPositionList}
                setStoryRequiredElement={
                  setStoryModifiableContent as unknown as Dispatch<
                    SetStateAction<Record<string, string>>
                  >
                }
                positionTop={"55px"}
              />
            )}
          </S.PositionContainer>
        </S.Info>
      );
    } else {
      return renderCompanyInfo();
    }
  };

  const renderCompanyInfo = () => {
    return (
      <S.Info>
        <p>담당업무</p> · <span>{attr.storyData.position}</span>
      </S.Info>
    );
  };

  const handleMovePage = () => {
    if (attr.storyData.memberSocialLoginId) {
      window.open(`https://github.com/${attr.storyData.memberSocialLoginId}`);
    } else {
      navigate(`/company/${attr.storyData.companyId}`);
    }
  };

  return (
    <S.Container
      onClick={() => attr.showPositionList && attr.setShowPositionList(false)}
    >
      <S.CompanyLogo
        onClick={handleMovePage}
        isHaveSocialId={attr.storyData.memberSocialLoginId!!}
      >
        <img
          src={
            attr.storyData.companyImgUrl ||
            attr.storyData.memberImageUrl ||
            Logo
          }
          alt="이미지 없음"
        />
      </S.CompanyLogo>
      <S.Wrapper>
        <S.Title onClick={handleMovePage}>
          {attr.storyData.companyName ||
            attr.storyData.memberNickName ||
            attr.storyData.memberSocialLoginId}
        </S.Title>
        <S.Content>
          {isModifiableEvent ? renderModifyCompanyInfo() : renderCompanyInfo()}
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
}
