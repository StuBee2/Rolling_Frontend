import { IsCloseModalAtom } from "@src/stores/common/common.store";
import {
  CompanyAllAndSearchAtom,
  SearchCompanyAtom,
} from "@src/stores/company/company.store";
import { useRollingToast } from "@stubee2/stubee2-rolling-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

export const useSearchCompany = () => {
  const [keyword, setKeyword] = useState("");
  const setIsCloseModal = useSetRecoilState(IsCloseModalAtom);
  const setSearchApiUrl = useSetRecoilState(CompanyAllAndSearchAtom);
  const setSearchCompany = useSetRecoilState(SearchCompanyAtom);
  const navigate = useNavigate();
  const { rollingToast } = useRollingToast();

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
    // setSearchApiUrl(`search?name=${keyword}&`);
    setSearchCompany(keyword);
    setIsCloseModal(false);
    setKeyword("");
  };

  return {
    handleKeywordChange,
    handleKeywordSubmit,
    keyword,
    setIsCloseModal,
  };
};
