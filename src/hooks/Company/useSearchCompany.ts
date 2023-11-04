import { IsCloseModalAtom } from "@src/stores/common/common.store";
import { SearchCompanyAtom } from "@src/stores/company/company.store";
import { useRollingToast } from "@stubee2/stubee2-rolling-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

export const useSearchCompany = () => {
  const [keyword, setKeyword] = useState("");
  const setIsCloseModal = useSetRecoilState(IsCloseModalAtom);
  const setSearchCompany = useSetRecoilState(SearchCompanyAtom);

  const [isTyping, setIsTyping] = useState(false);
  const navigate = useNavigate();
  const { rollingToast } = useRollingToast();

  // 메인 회사검색 onChange
  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleKeywordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (keyword.trim() === "") {
      return rollingToast("검색 키워드를 입력해주세요!", "warning");
    }

    navigate("/");
    window.scrollTo(0, 0);
    setSearchCompany(keyword);
    setIsCloseModal(false);
    setKeyword("");
  };

  // 스토리 등록 회사검색 onChange
  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setIsTyping(!!inputValue);
    setKeyword(inputValue);
  };

  return {
    handleKeywordChange,
    handleKeywordSubmit,
    keyword,
    setKeyword,
    setIsCloseModal,
    handleCompanyChange,
    isTyping,
    setIsTyping,
  };
};
