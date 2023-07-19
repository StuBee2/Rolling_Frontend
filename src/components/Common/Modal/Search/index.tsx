import { useSetRecoilState } from "recoil";
import * as S from "./style";
import { SearchModal } from "../../../../stores/common/common.store";
import semicircle2 from "../../../../assets/semicircle2.svg";
import semicircle1 from "../../../../assets/semicircle1.svg";
import Search2 from "../../../../assets/Search2.svg";
import { useCloseModal } from "../../../../hooks/Common/useCloseModal";
import { ModalWrap } from "../style";

export default function Search() {
  const setSearch = useSetRecoilState(SearchModal);

  useCloseModal(setSearch);
  return (
    <ModalWrap onClick={() => setSearch(false)} background="rgba(0, 0, 0, 0.4)">
      <S.SearchContainer onClick={(e) => e.stopPropagation()}>
        <S.Semicircle src={semicircle2} top={true} />
        <S.InputContainer>
          <img src={Search2} alt="" />
          <input type="text" placeholder="어떤 걸 찾고 계세요?" />
        </S.InputContainer>
        <S.Semicircle src={semicircle1} top={false} />
      </S.SearchContainer>
    </ModalWrap>
  );
}
