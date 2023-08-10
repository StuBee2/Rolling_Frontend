import { useSetRecoilState } from "recoil";
import * as S from "./style";
import { SearchModal } from "../../../../store/common/common.store";
import semicircle2 from "../../../../assets/Search/semicircle2.svg";
import semicircle1 from "../../../../assets/Search/semicircle1.svg";
import Search2 from "../../../../assets/Search/Search2.svg";
import { useCloseModal } from "../../../../hooks/Common/useCloseModal";

export default function Search() {
  const setSearch = useSetRecoilState(SearchModal);

  useCloseModal(setSearch);
  return (
    <S.SearchModalWrapper onClick={() => setSearch(false)}>
      <S.SearchContainer onClick={(e) => e.stopPropagation()}>
        <S.Semicircle src={semicircle2} top={true} />
        <S.InputContainer>
          <img src={Search2} alt="" />
          <input type="text" placeholder="어떤 걸 찾고 계세요?" />
        </S.InputContainer>
        <S.Semicircle src={semicircle1} top={false} />
      </S.SearchContainer>
    </S.SearchModalWrapper>
  );
}
