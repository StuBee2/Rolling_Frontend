import * as S from "./style";
import Logo from "@src/assets/icons/Logo/logo.png";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { StoryModifiableEventAtom } from "@src/stores/story/story.store";
import { StoryModifiableContentAtom } from "@src/stores/story/story.store";
import { StoryModifiableIdAtom } from "@src/stores/story/story.store";
import { useEditStory } from "@src/hooks/Story/useStoryModify";

interface Props {
  companyImgUrl?: string;
  companyName?: string;
  storyId?: string;
  writerId?: string;
  memberNickName?: string;
  memberSocialLoginId?: string;
  memberImageUrl?: string;
  companyId?: string;
  position: string;
  commuteTime: string;
  meal: string;
  welfare: string;
}

export default function CompanyInfo({ ...attr }: Props) {
  const navigate = useNavigate();
  const { handleChangeModifyStoryContent } = useEditStory();

  const isModifiableEvent = useRecoilValue(StoryModifiableEventAtom);
  const modifyStoryId = useRecoilValue(StoryModifiableIdAtom);
  const storyModifiableContent = useRecoilValue(StoryModifiableContentAtom);

  const renderModifyCompanyInfo = () => {
    if (modifyStoryId === attr.storyId) {
      return (
        <>
          <S.Info>
            <p>
              담당업무 ·{" "}
              <S.ModifyInput
                type="text"
                name="position"
                value={storyModifiableContent.position}
                onChange={(e) =>
                  handleChangeModifyStoryContent(e.target.name, e.target.value)
                }
              />
            </p>
          </S.Info>
        </>
      );
    } else {
      return renderCompanyInfo();
    }
  };

  const renderCompanyInfo = () => {
    return (
      <>
        <S.Info>
          <p>
            담당업무 · <span>{attr.position}</span>
          </p>
        </S.Info>
      </>
    );
  };

  const handleMovePage = () => {
    if (attr.memberSocialLoginId) {
      window.open(`https://github.com/${attr.memberSocialLoginId}`);
    } else {
      navigate(`/company/${attr.companyId}`);
    }
  };

  return (
    <S.Container>
      <S.CompanyLogo
        onClick={handleMovePage}
        isHaveSocialId={attr.memberSocialLoginId!!}
      >
        <img
          src={attr.companyImgUrl || attr.memberImageUrl || Logo}
          alt="이미지 없음"
        />
      </S.CompanyLogo>
      <S.Wrapper>
        <S.Title onClick={handleMovePage}>
          {attr.companyName || attr.memberNickName || attr.memberSocialLoginId}
        </S.Title>
        <S.Content>
          {isModifiableEvent ? renderModifyCompanyInfo() : renderCompanyInfo()}
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
}
