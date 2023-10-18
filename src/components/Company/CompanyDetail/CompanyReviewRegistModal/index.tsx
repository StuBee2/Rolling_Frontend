import { ReviewCompanyInfoType } from "@src/types/Review/review.type";
import { Dispatch, SetStateAction, useState } from "react";
import * as S from "./style";
import logo from "@src/assets/images/Common/Logo.svg";
import close from "@src/assets/images/Review/close.svg";
import Form from "./Form";
import { turnOffModal } from "@src/utils/Modal/turnOnOffModal";

interface Props {
  setReviewModal: Dispatch<SetStateAction<boolean>>;
  reviewCompanyInfo: ReviewCompanyInfoType;
}

export default function CompanyReviewRegistModal({
  setReviewModal,
  reviewCompanyInfo,
}: Props) {
  const [showPositionList, setShowPositionList] = useState(false);
  const closeQuestion = "리뷰 작성을 취소하시겠습니까?";

  const handleCloseModal = () => {
    const answer = window.confirm(closeQuestion);
    if (answer) {
      turnOffModal(setReviewModal);
    }
  };

  return (
    <S.Container onClick={handleCloseModal}>
      <S.Wrapper
        onClick={(e) => {
          e.stopPropagation();
          setShowPositionList(false);
        }}
      >
        <S.ReviewCloseIcon onClick={handleCloseModal}>
          <img src={close} alt="이미지 없음" />
        </S.ReviewCloseIcon>
        <S.CompanyLogo>
          <img src={reviewCompanyInfo.companyLogo || logo} alt="이미지 없음" />
          <p>{reviewCompanyInfo.companyName}</p>
        </S.CompanyLogo>

        <Form
          companyId={reviewCompanyInfo.companyId}
          showPositionList={showPositionList}
          setShowPositionList={setShowPositionList}
        />
      </S.Wrapper>
    </S.Container>
  );
}
