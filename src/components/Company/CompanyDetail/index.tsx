import { CompanyStoryRegistModalAtom } from "@src/stores/company/company.store";
import { StoryCompanyInfoType } from "@src/types/Story/story.type";
import { useAuthTopScroll } from "@stubee2/stubee2-rolling-util";
import { Suspense, useState } from "react";
import { useRecoilState } from "recoil";
import ErrorBoundary from "../../Common/ErrorBoundary";
import Portal from "../../Common/Portal";
import CompanyDetailSkeleton from "../../Common/Skeleton/CompanyDetail";
import CompanyDetailItem from "./CompanyDetailItem";
import CompanyStoryRegistModal from "./CompanyStoryRegistModal";

import * as S from "./style";

interface Props {
  id: string;
}

export default function CompanyDetail({ id }: Props) {
  /** 리뷰등록 모달에서 쓰이는 useState */
  const [storyCompanyInfo, setStoryCompanyInfo] =
    useState<StoryCompanyInfoType>({
      companyId: "",
      companyName: "",
      companyLogo: "",
    });

  const [companyStoryRegisterModal, setCompanyStoryRegisterModal] =
    useRecoilState(CompanyStoryRegistModalAtom);

  useAuthTopScroll();
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
          <CompanyStoryRegistModal
            setStoryModal={setCompanyStoryRegisterModal}
            storyCompanyInfo={storyCompanyInfo}
          />
        </Portal>
      )}
    </>
  );
}
