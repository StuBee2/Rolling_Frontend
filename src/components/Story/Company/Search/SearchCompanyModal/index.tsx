import * as S from "./style";
import search3 from "@src/assets/icons/Search/search3.svg";
import close from "@src/assets/images/Story/close.svg";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useSearchCompany } from "@src/hooks/Company/useSearchCompany";
import { useGetCompanySerachListQuery } from "@src/queries/Company/company.query";
import { useInView } from "react-intersection-observer";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  StoryCompanyIdAtom,
  StoryPagePathInflow,
  StorySearchCompanyAtom,
} from "@src/stores/story/story.store";
import { useEscCloseModal } from "@stubee2/stubee2-rolling-util";
import { ModalContainer } from "../../style";
import { TextInput } from "@stubee2/stubee2-rolling-ui";
import { turnOnOffModal } from "@src/utils/Modal/turnOnOffModal";

interface Props {
  setSearchCompanyModal: Dispatch<SetStateAction<boolean>>;
}

export default function SearchCompanyModal({ setSearchCompanyModal }: Props) {
  useEscCloseModal(setSearchCompanyModal);
  const { ...attr } = useSearchCompany();

  // 등록된 회사 아이디를 담아 스토리 남기기에 사용하는 state
  const setStoryCompanyId = useSetRecoilState(StoryCompanyIdAtom);

  // 회사 아이디를 담아서 setStoryCompanyId에 담는 state
  const [companyId, setCompanyId] = useState("");

  const setStorySearchCompany = useSetRecoilState(StorySearchCompanyAtom);

  const { data: searchList, fetchNextPage } = useGetCompanySerachListQuery({
    keyword: attr.keyword,
  });

  // 검색한 회사가 있는 회사인지 없는 회사인지 판단하여 setStorySearchCompany에 담는 state
  const [isExistSearchList, setIsExistSearchList] = useState(false);

  const [storyPagePathInflow, setStoryPagePathInflow] =
    useRecoilState(StoryPagePathInflow);

  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  const handleConfirmClick = () => {
    if (storyPagePathInflow === "detail") {
      setStoryPagePathInflow("header");
    }

    setStoryCompanyId(companyId);
    setStorySearchCompany((prev) => ({
      ...prev,
      companyName: attr.keyword,
      isExistSearchList,
    }));
    turnOnOffModal(setSearchCompanyModal, "off");
  };

  // 내가 검색한 회사가 없다면 직접 ~~ 등록하기 띄워주는 함수
  const isKeywordIncluded = searchList?.pages.some((data) =>
    data.data.some(
      (item) =>
        item.companyDetails.name.toLowerCase() === attr.keyword.toLowerCase()
    )
  );

  return (
    <ModalContainer>
      <S.CompanyNameForm>
        <S.Close
          src={close}
          onClick={() => turnOnOffModal(setSearchCompanyModal, "off")}
          alt="이미지 없음"
        />
        <S.Title>내 기업 찾기</S.Title>

        <S.InputContainer>
          <p>
            기업명 <span>*</span>
          </p>

          <S.InputWrapper>
            <TextInput
              placeholder="기업명을 입력해주세요"
              type="text"
              value={attr.keyword}
              handleChange={attr.handleCompanyChange}
              customStyle={S.InputStyle}
            />
            <S.SearchIcon src={search3} alt="이미지 없음" />
          </S.InputWrapper>

          <S.ConfirmButton
            isActive={!attr.isTyping && attr.keyword !== ""}
            onClick={() =>
              !attr.isTyping && attr.keyword !== "" && handleConfirmClick()
            }
          >
            확인
          </S.ConfirmButton>

          {attr.isTyping && attr.keyword !== "" && (
            <S.CompanyListContainer>
              <S.CompanyListUl>
                {!isKeywordIncluded && (
                  <li
                    onClick={() => {
                      setIsExistSearchList(false);
                      // 스토리를 남기려다가 회사 등록을 하려고 할때 companyId를 비워줌
                      setCompanyId("");
                      attr.setIsTyping(false);
                    }}
                  >
                    직접 "{attr.keyword}" 등록하기
                  </li>
                )}

                {searchList?.pages.map((data) =>
                  data.data.map((item) => (
                    <li
                      key={item.companyId.id}
                      onClick={() => {
                        setIsExistSearchList(true);
                        setCompanyId(item.companyId.id);
                        attr.setKeyword(item.companyDetails.name);
                        attr.setIsTyping(false);
                      }}
                    >
                      {item.companyDetails.name}
                    </li>
                  ))
                )}
                <div ref={ref} />
              </S.CompanyListUl>
            </S.CompanyListContainer>
          )}
        </S.InputContainer>
      </S.CompanyNameForm>
    </ModalContainer>
  );
}
