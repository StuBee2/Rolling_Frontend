import { IsCloseModalAtom } from "@src/stores/common/common.store";
import { CompanyAllAndSearchAtom } from "@src/stores/company/company.store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

export const useSearchKeyword = () => {
  const [keyword, setKeyword] = useState("");
  const setIsCloseModal = useSetRecoilState(IsCloseModalAtom);
  const setSearchApiUrl = useSetRecoilState(CompanyAllAndSearchAtom);
  const navigate = useNavigate();

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };
  const handleKeywordSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (keyword.trim() === "") {
      return window.alert("검색 키워드를 입력해주세요!");
    }

    navigate("/");
    setSearchApiUrl(`search?name=${keyword}&`);
    setIsCloseModal(false);
    setKeyword("");
  };

  return { handleKeywordChange, handleKeywordSubmit, keyword, setIsCloseModal };
};
