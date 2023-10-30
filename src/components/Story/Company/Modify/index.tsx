import useAlumniCheck from "@src/hooks/Alumni/useAlumniCheck";
import useTokenCheck from "@src/hooks/Auth/useTokenCheck";
import { useState } from "react";
import Portal from "../../../Common/Portal";
import AddressModal from "./ModifyItem/Address";
import ModifyItem from "./ModifyItem";
import * as S from "./style";
import { SubTitle, Title, TitleContainer } from "../../style";

export default function CompanyModify() {
  useTokenCheck();
  useAlumniCheck();

  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <TitleContainer>
            <Title>My Company 수정</Title>
            <SubTitle>
              해당 기업의 정보를 수정하여 후배들에게 더욱 더 좋은 정보를
              알려주세요!
            </SubTitle>
          </TitleContainer>

          <ModifyItem setIsOpenModal={setIsModalOpen} />
        </S.Wrapper>
      </S.Container>

      {isModalOpen && (
        <Portal>
          <AddressModal setIsOpenModal={setIsModalOpen} />
        </Portal>
      )}
    </>
  );
}
