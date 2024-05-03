import useAlumniCheck from "@src/hooks/Alumni/useAlumniCheck";
import useTokenCheck from "@src/hooks/Auth/useTokenCheck";
import {
  StoryCompanyIdAtom,
  StorySearchCompanyAtom,
} from "@src/stores/story/story.store";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import CompanyRegister from "./Company/Register";
import SearchCompany from "./Company/Search";
import StoryRegister from "./StoryRegister";
import * as S from "./style";

const Story = () => {
  useTokenCheck();
  useAlumniCheck();

  const [storySearchCompany, setStorySearchCompany] = useRecoilState(
    StorySearchCompanyAtom
  );
  const { companyName } = storySearchCompany;

  const [storyCompanyId, setStoryCompanyId] =
    useRecoilState(StoryCompanyIdAtom);

  useEffect(() => {
    // 기업정보 박스로 이동
    if (storyCompanyId === "" && companyName !== "") {
      window.scrollTo({
        top: 370,
        behavior: "smooth",
      });
    }

    // 스토리 남기기 박스로 이동
    if (storyCompanyId !== "" && companyName !== "") {
      window.scrollTo({
        top: 600,
        behavior: "smooth",
      });
    }
  }, [storyCompanyId, companyName]);

  useEffect(() => {
    // 전역 상태관리이므로 다른 페이지에 나갔다가 들어오면 데이터가 유지되는 것을 막기 위해 초기화
    return () => {
      setStorySearchCompany((prev) => ({
        ...prev,
        companyName: "",
        isExistSearchList: false,
      }));
      setStoryCompanyId("");
    };
  }, []);

  return (
    <S.Container>
      <S.Wrapper rowGap="10rem">
        <SearchCompany />
        <CompanyRegister
          storySearchCompany={storySearchCompany}
          storyCompanyId={storyCompanyId}
        />
        <StoryRegister
          storySearchCompany={storySearchCompany}
          storyCompanyId={storyCompanyId}
        />
      </S.Wrapper>
    </S.Container>
  );
};

export default Story;
