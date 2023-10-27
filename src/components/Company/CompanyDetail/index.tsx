import { StoryCompanyInfoType } from "@src/types/Story/story.type";
import { useAuthTopScroll } from "@stubee2/stubee2-rolling-util";
import { Suspense, useState } from "react";
import { useRecoilState } from "recoil";
import ErrorBoundary from "../../Common/ErrorBoundary";
import Portal from "../../Common/Portal";
import CompanyDetailSkeleton from "../../Common/Skeleton/CompanyDetail";
import CompanyDetailItem from "./CompanyDetailItem";
import StoryRegistModal from "@src/components/Modal/Story";
import * as S from "./style";
import { StoryRegistModalAtom } from "@src/stores/story/story.store";
import { StoryisEditElementShowPageAtom } from "@src/stores/story/story.store";

interface Props {
  id: string;
}

export default function CompanyDetail({ id }: Props) {
  /** 스토리 등록 모달에서 쓰이는 useState */
  const [storyCompanyInfo, setStoryCompanyInfo] =
    useState<StoryCompanyInfoType>({
      companyId: "",
      companyName: "",
      companyLogo: "",
    });

  const [companyStoryRegisterModal, setCompanyStoryRegisterModal] =
    useRecoilState(StoryRegistModalAtom);

  useAuthTopScroll();

  const [isEditElementShowPageValue, setIsEditElementShowPageValue] =
    useRecoilState(StoryisEditElementShowPageAtom);
  setIsEditElementShowPageValue("기업_상세");

  return (
    <>
      <S.Container>
        <S.Wrapper>
          <ErrorBoundary fallback={<>회사정보를 갖고오지 못했습니다.</>}>
            <Suspense fallback={<CompanyDetailSkeleton />}>
              <CompanyDetailItem
                id={id}
                setStoryCompanyInfo={setStoryCompanyInfo}
              />
            </Suspense>
          </ErrorBoundary>
        </S.Wrapper>
      </S.Container>
      {companyStoryRegisterModal && (
        <Portal>
          <StoryRegistModal
            setStoryModal={setCompanyStoryRegisterModal}
            storyCompanyInfo={storyCompanyInfo}
          />
        </Portal>
      )}
    </>
  );
}
