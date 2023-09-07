import * as S from "./style";
import semicircle2 from "@src/assets/Search/semicircle2.svg";
import semicircle1 from "@src/assets/Search/semicircle1.svg";
import Search2 from "@src/assets/Search/Search2.svg";
import { useSearchKeyword } from "@src/hooks/Company/useSearchKeyword";
import { useCloseModal } from "@stubee2/stubee2-rolling-util";

export default function Search() {
  const { handleKeywordChange, handleKeywordSubmit, keyword, setIsCloseModal } =
    useSearchKeyword();
  useCloseModal(setIsCloseModal);

  return (
    <S.SearchModalWrapper onClick={() => setIsCloseModal(false)}>
      <S.SearchContainer onClick={(e) => e.stopPropagation()}>
        <S.Semicircle src={semicircle2} top={true} alt="이미지 없음" />
        <S.InputContainer onSubmit={handleKeywordSubmit}>
          <button type="submit">
            <img src={Search2} alt="이미지 없음" />
          </button>
          <input
            type="text"
            placeholder="어떤 걸 찾고 계세요?"
            onChange={handleKeywordChange}
            value={keyword}
          />
        </S.InputContainer>
        <S.Semicircle src={semicircle1} top={false} alt="이미지 없음" />
      </S.SearchContainer>
    </S.SearchModalWrapper>
  );
}
