import { StoryCompanyInfoType } from "@src/types/Story/story.type";
import React, { Dispatch, SetStateAction, useState } from "react";
import * as S from "./style";
import logo from "@src/assets/icons/Logo/logo.png";
import close from "@src/assets/images/Story/close.svg";
import Form from "./Form";
import { turnOffModal } from "@src/utils/Modal/turnOnOffModal";
import wave from "@src/assets/images/Story/wave.svg";

interface Props {
  setStoryModal: Dispatch<SetStateAction<boolean>>;
  storyCompanyInfo: StoryCompanyInfoType;
}

function StoryRegistModal({ setStoryModal, storyCompanyInfo }: Props) {
  const [showPositionList, setShowPositionList] = useState(false);

  const handleCloseModal = () => {
    const answer = window.confirm("스토리 남기기를 취소하시겠습니까?");
    if (answer) {
      turnOffModal(setStoryModal);
    }
  };
  return (
    <S.Container>
      <S.Wrapper
        onClick={(e) => {
          e.stopPropagation();
          setShowPositionList(false);
        }}
      >
        <S.StoryCloseIcon onClick={handleCloseModal}>
          <img src={close} alt="이미지 없음" />
        </S.StoryCloseIcon>

        <S.Title>스토리 남기기</S.Title>
        <S.SubTitle>
          <p>내 기업에 대한 스토리를 작성하고 후배들에게 롤링해 주세요.</p>
          <p>수 많은 후배들이 기다리고 있습니다.</p>
        </S.SubTitle>

        <S.CompanyLogo>
          <img src={storyCompanyInfo.companyLogo || logo} alt="이미지 없음" />
          <p>{storyCompanyInfo.companyName}</p>
        </S.CompanyLogo>

        <Form
          companyId={storyCompanyInfo.companyId}
          showPositionList={showPositionList}
          setShowPositionList={setShowPositionList}
        />

        <S.Wave src={wave} alt="이미지 없음" />
      </S.Wrapper>
    </S.Container>
  );
}

export default React.memo(StoryRegistModal);
