import useAlumniCheck from "@src/hooks/Alumni/useAlumniCheck";
import useTokenCheck from "@src/hooks/Auth/useTokenCheck";
import { useState } from "react";
import Portal from "@src/components/Common/Portal";
import CompanyAddressModal from "@src/components/Common/Modal/CompanyAddress";
import ModifyItem from "./ModifyItem";
import * as S from "../../style";
import { useCompanyModify } from "@src/hooks/Company/useCompanyModify";
import { useAuthTopScroll } from "@stubee2/stubee2-rolling-util";

export default function CompanyModify() {
  useTokenCheck();
  useAlumniCheck();
  useAuthTopScroll();

  const { companyModifyInfo, setCompanyModifyInfo } = useCompanyModify();

  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <S.Container>
        <S.Wrapper rowGap="2rem">
          <S.TitleContainer>
            <S.Title>My Company 수정</S.Title>
            <S.SubTitle>
              해당 기업의 정보를 수정하여 후배들에게 더욱 더 좋은 정보를
              알려주세요!
            </S.SubTitle>
          </S.TitleContainer>

          <ModifyItem setIsOpenModal={setIsModalOpen} />
        </S.Wrapper>
      </S.Container>

      {isModalOpen && (
        <Portal>
          <CompanyAddressModal
            setIsOpenModal={setIsModalOpen}
            companyInfo={companyModifyInfo.address}
            setCompanyInfo={setCompanyModifyInfo}
          />
        </Portal>
      )}
    </>
  );
}
