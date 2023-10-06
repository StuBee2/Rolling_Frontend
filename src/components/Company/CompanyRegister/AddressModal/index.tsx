import { useRegistCompany } from "@src/hooks/Company/useRegistCompany";
import { turnOffModal } from "@src/utils/Modal/turnOnOffModal";
import { useCloseModal } from "@stubee2/stubee2-rolling-util";
import { Dispatch, SetStateAction } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import * as S from "./style";

interface Props {
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}

export default function AddressModal({ setIsOpenModal }: Props) {
  const { companyInfo, setCompanyInfo } = useRegistCompany();
  const handleSelectAddress = (data: { address: string }) => {
    setIsOpenModal(false);
    setCompanyInfo((prev) => ({
      ...prev,
      address: data.address,
    }));
  };
  useCloseModal(setIsOpenModal);

  return (
    <S.AddressModalContainer onClick={() => turnOffModal(setIsOpenModal)}>
      <DaumPostcodeEmbed
        animation={true}
        onComplete={handleSelectAddress} // 값을 선택할 경우 실행되는 이벤트
        autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
        defaultQuery={companyInfo.address}
        style={S.AddressModalItem}
      />
    </S.AddressModalContainer>
  );
}
