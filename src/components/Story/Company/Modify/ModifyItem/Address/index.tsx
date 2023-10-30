import { useStoryCompanyModify } from "@src/hooks/Story/useStoryCompanyModify";
import { turnOffModal } from "@src/utils/Modal/turnOnOffModal";
import { useCloseModal } from "@stubee2/stubee2-rolling-util";
import { Dispatch, SetStateAction } from "react";
import DaumPostcodeEmbed from "react-daum-postcode";
import * as S from "../../../style";

interface Props {
  setIsOpenModal: Dispatch<SetStateAction<boolean>>;
}

export default function AddressModal({ setIsOpenModal }: Props) {
  const { companyModifyInfo, setCompanyModifyInfo } = useStoryCompanyModify();
  useCloseModal(setIsOpenModal);

  const handleSelectAddress = (data: { address: string }) => {
    setCompanyModifyInfo((prev) => ({
      ...prev,
      address: data.address,
    }));
    turnOffModal(setIsOpenModal);
  };

  return (
    <S.ModalContainer onClick={() => turnOffModal(setIsOpenModal)}>
      <DaumPostcodeEmbed
        animation={true}
        onComplete={handleSelectAddress} // 값을 선택할 경우 실행되는 이벤트
        autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
        defaultQuery={companyModifyInfo.address}
        style={S.AddressStyle}
      />
    </S.ModalContainer>
  );
}
