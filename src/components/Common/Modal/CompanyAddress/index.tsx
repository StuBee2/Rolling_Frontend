import { useEscCloseModal } from "@stubee2/stubee2-rolling-util";
import { Dispatch, SetStateAction } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import * as S from "../../../Story/Company/style";
import { turnOnOffModal } from "@src/utils/Modal/turnOnOffModal";
import { CompanyParam } from "@src/services/Company/api";

interface Props {
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
  companyInfo: string;
  setCompanyInfo: Dispatch<SetStateAction<CompanyParam>>;
}

const CompanyAddressModal = ({ ...attr }: Props) => {
  useEscCloseModal(attr.setIsOpenModal);

  const handleSelectAddress = (data: { address: string }) => {
    attr.setCompanyInfo((prev) => ({
      ...prev,
      address: data.address,
    }));
    turnOnOffModal(attr.setIsOpenModal, "off");
  };

  return (
    <S.ModalContainer
      onClick={() => turnOnOffModal(attr.setIsOpenModal, "off")}
    >
      <DaumPostcodeEmbed
        animation={true}
        onComplete={handleSelectAddress} // 값을 선택할 경우 실행되는 이벤트
        autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
        defaultQuery={attr.companyInfo}
        style={S.AddressStyle}
      />
    </S.ModalContainer>
  );
};

export default CompanyAddressModal;
