import * as S from "./style";
import Logo from "@src/assets/icons/Logo/logo.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { StoryModifiableEventAtom } from "@src/stores/story/story.store";
import { StoryModifiableInfoAtom } from "@src/stores/story/story.store";
import { StoryModifiableIdAtom } from "@src/stores/story/story.store";
import { useEditStory } from "@src/hooks/Story/useEditStory";

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
  const { handleModifyStoryInfoValue } = useEditStory();

  const isModifiableEvent = useRecoilValue(StoryModifiableEventAtom);
  const changeElementId = useRecoilValue(StoryModifiableIdAtom);
  const [ischangeElementIdSame, setIschangeElementIdSame] = useState(false);

  const [storyModifiableInfo, setStoryModifiableInfo] = useRecoilState(
    StoryModifiableInfoAtom
  );

  useEffect(() => {
    setStoryModifiableInfo({
      position: attr.position,
      commuteTime: attr.commuteTime,
      meal: attr.meal,
    });
    setIschangeElementIdSame(true);
    console.log(storyModifiableInfo);
  }, [changeElementId, attr.storyId]);

  const renderModifyCompanyInfo = () => {
    if (changeElementId === attr.storyId && ischangeElementIdSame) {
      return (
        <>
          <S.Info>
            <p>
              포지션 ·{" "}
              <S.modifyInput
                type="text"
                name="position"
                value={storyModifiableInfo.position}
                onChange={(e) =>
                  handleModifyStoryInfoValue(e.target.name, e.target.value)
                }
              />
            </p>
            <p>
              출퇴근 시간 ·{" "}
              <S.modifyInput
                type="text"
                name="commuteTime"
                value={storyModifiableInfo.commuteTime}
                onChange={(e) =>
                  handleModifyStoryInfoValue(e.target.name, e.target.value)
                }
              />
            </p>
          </S.Info>
          <S.Info>
            <p>
              식사제공 ·{" "}
              <S.modifyInput
                type="text"
                name="meal"
                value={storyModifiableInfo.meal}
                onChange={(e) =>
                  handleModifyStoryInfoValue(e.target.name, e.target.value)
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
            포지션 · <span>{attr.position}</span>
          </p>
          <p>
            출퇴근 시간 · <span>{attr.commuteTime}</span>
          </p>
        </S.Info>
        <S.Info>
          <p>
            식사제공 · <span>{attr.meal}</span>
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
