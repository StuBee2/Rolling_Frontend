import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { useEffect, useState } from "react";
import StorySetUp from "@src/components/Common/StorySetUp";
import Star from "@src/components/Common/Star";
import CompanyContent from "@src/components/User/Story/StoryItem/CompanyContent";
import CompanyInfo from "@src/components/User/Story/StoryItem/CompanyInfo";
import { ACCESS_TOKEN_KEY } from "@src/constants/Auth/auth.constant";
import Token from "@src/libs/Token/Token";
import { StoryCommonType } from "@src/types/Story/story.type";
import { tokenDecode } from "@src/utils/Auth/tokenDecode";
import { getDateText } from "@stubee2/stubee2-rolling-util";
import * as S from "./style";
import { convertStarRatingObject } from "@src/utils/StarRating/convertRankingObject";
import {
  StoryModifiableIdAtom,
  StorySetupInitializationDotAtom,
} from "@src/stores/story/story.store";
import { StoryModifiableEventAtom } from "@src/stores/story/story.store";
import { useStoryModify } from "@src/hooks/Story/useStoryModify";
import RegistStarGrade from "@src/components/Story/StoryRegister/RegisterItem/StarGrade";

// 마이페이지와 회사단일 조회 페이지에서 같이 쓰이는 컴포넌트
export default function StoryItem({ ...attr }: StoryCommonType) {
  const {
    salaryAndBenefits,
    workLifeBalance,
    organizationalCulture,
    careerAdvancement,
  } = attr;

  // writerId가 없으면 마이페이지이고
  // 있다면 회사단일 조회 페이지이기에 jwt 디코딩해서 writerId랑 내 id를 비교
  const isCoincideMemberId =
    !attr.writerId || tokenDecode("access", "sub") === attr.writerId;

  const rankStatus = convertStarRatingObject(attr);

  const { ...hooks } = useStoryModify();

  const modifyStoryId = useRecoilValue(StoryModifiableIdAtom);
  const isCoincideStoryId = attr.storyId === modifyStoryId;

  const setIsClickDots = useSetRecoilState(StorySetupInitializationDotAtom);
  const [isModifiableEvent, setIsModifiableEvent] = useRecoilState(
    StoryModifiableEventAtom
  );
  const [modifyStroyCompanyId, setModifyStroyCompanyId] = useState("");

  // 담당업무를 리스트를 보여줄지 안보여줄지를 판단하는 state
  const [showPositionList, setShowPositionList] = useState(false);

  useEffect(() => {
    // setIsClickDots는 전역 상태관리이기에 다른 페이지 이동시
    // 값이 유지 되는것을 막기위해 사용
    return () => setIsClickDots(false);
  }, [setIsClickDots]);

  useEffect(() => {
    if (isCoincideStoryId && isModifiableEvent) {
      hooks.setPrevStoryModifyInfo({
        ...attr,
      });

      hooks.setStoryModifiableContent({
        ...attr,
      });

      hooks.setPrevStoryStarGrade((prev) => ({
        ...prev,
        salaryAndBenefits,
        workLifeBalance,
        organizationalCulture,
        careerAdvancement,
      }));

      hooks.setStoryStarGrade((prev) => ({
        ...prev,
        salaryAndBenefits,
        workLifeBalance,
        organizationalCulture,
        careerAdvancement,
      }));

      if (attr.companyId) {
        setModifyStroyCompanyId(attr.companyId);
      }

      return () => setIsModifiableEvent(false);
    }
  }, [isCoincideStoryId, isModifiableEvent]);

  return (
    <S.Container>
      <S.Wrapper onClick={() => showPositionList && setShowPositionList(false)}>
        <S.Content
          onSubmit={(e) =>
            hooks.handleModifyStorySubmit(e, modifyStroyCompanyId)
          }
        >
          <S.CompanyInfoContainer>
            <S.RegisteredAtAndDelEditContainer>
              <S.RegisteredDate>
                {getDateText(new Date(attr.storyModifiedAt))} 등록
              </S.RegisteredDate>

              {Token.getToken(ACCESS_TOKEN_KEY) && isCoincideMemberId && (
                <S.DelAndEditContainer>
                  <StorySetUp
                    storyId={attr.storyId}
                    companyId={attr.companyId!!}
                    isCoincideStoryId={isCoincideStoryId}
                  />
                </S.DelAndEditContainer>
              )}
            </S.RegisteredAtAndDelEditContainer>

            <S.ContentContainer>
              <CompanyInfo
                isCoincideStoryId={isCoincideStoryId}
                storyData={attr}
                showPositionList={showPositionList}
                setShowPositionList={setShowPositionList}
              />
              <CompanyContent
                isCoincideStoryId={isCoincideStoryId}
                storyData={attr}
              />
            </S.ContentContainer>
          </S.CompanyInfoContainer>

          {isModifiableEvent && isCoincideStoryId ? (
            <RegistStarGrade
              storyStarGrade={hooks.storyStarGrade}
              prevStarGarade={hooks.prevStoryStarGrade}
              handleStarGradeChange={hooks.handleStarGradeChange}
            />
          ) : (
            <Star
              rankStatus={rankStatus}
              width={20}
              height={20}
              fontSize={"15px"}
            />
          )}

          {isModifiableEvent && isCoincideMemberId && isCoincideStoryId && (
            <S.StoryModifySubmitBtnContainer>
              <S.StoryModifySubmitBtn
                isRequired={hooks.isStoryRequired || hooks.isStarGradeRequired}
                type="submit"
              >
                수정하기
              </S.StoryModifySubmitBtn>
            </S.StoryModifySubmitBtnContainer>
          )}
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
}
