import * as S from "./style";
import search1 from "@src/assets/icons/Search/search1.png";
import wave from "@src/assets/images/Search/wave.svg";
import { useSearchCompany } from "@src/hooks/Company/useSearchCompany";
import { useCloseModal } from "@stubee2/stubee2-rolling-util";
import { turnOffModal } from "@src/utils/Modal/turnOnOffModal";

export default function Search() {
  const { handleKeywordChange, handleKeywordSubmit, keyword, setIsCloseModal } =
    useSearchCompany();
  useCloseModal(setIsCloseModal);

  return (
    <S.SearchModalWrapper onClick={() => turnOffModal(setIsCloseModal)}>
      <S.SearchContainer onClick={(e) => e.stopPropagation()}>
        <S.InputContainer onSubmit={handleKeywordSubmit}>
          <button type="submit">
            <img src={search1} alt="이미지 없음" />
          </button>

          <input
            type="text"
            placeholder="어떤 걸 찾고 계세요?"
            onChange={handleKeywordChange}
            value={keyword}
          />
        </S.InputContainer>
        <S.Wave src={wave} alt="이미지 없음" />
      </S.SearchContainer>
    </S.SearchModalWrapper>
  );
}
