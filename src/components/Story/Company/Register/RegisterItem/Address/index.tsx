import { useCompanyRegister } from "@src/hooks/Company/useCompanyRegister";
import { StoryAddressModalAtom } from "@src/stores/story/story.store";
import { turnOffModal } from "@src/utils/Modal/turnOnOffModal";
import { useCloseModal } from "@stubee2/stubee2-rolling-util";
import DaumPostcodeEmbed from "react-daum-postcode";
import { useSetRecoilState } from "recoil";
import * as S from "../../../style";

export default function Address() {
  const setStoryAddressModal = useSetRecoilState(StoryAddressModalAtom);
  useCloseModal(setStoryAddressModal);
  const { ...attr } = useCompanyRegister();

  const handleSelectAddress = (data: { address: string }) => {
    attr.setCompanyInfo((prev) => ({
      ...prev,
      address: data.address,
    }));
    turnOffModal(setStoryAddressModal);
  };

  return (
    <S.ModalContainer onClick={() => turnOffModal(setStoryAddressModal)}>
      <DaumPostcodeEmbed
        animation={true}
        onComplete={handleSelectAddress} // 값을 선택할 경우 실행되는 이벤트
        autoClose={false} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
        defaultQuery={attr.companyInfo.address}
        style={S.AddressStyle}
      />
    </S.ModalContainer>
  );
}
