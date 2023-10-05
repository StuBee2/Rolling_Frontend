import { ReviewCompanyInfoType } from "@src/types/Review/review.type";
import { Dispatch, SetStateAction, useState } from "react";
import * as S from "./style";
import logo from "@src/assets/images/Common/Logo.svg";
import close from "@src/assets/images/Review/close.svg";
import ReviewForm from "./ReviewForm";

interface Props {
  setReviewModal: Dispatch<SetStateAction<boolean>>;
  reviewCompanyInfo: ReviewCompanyInfoType;
}

export default function CompanyReviewModal({
  setReviewModal,
  reviewCompanyInfo,
}: Props) {
  const [showPositionList, setShowPositionList] = useState(false);
  const closeQuestion = "리뷰 작성을 취소하시겠습니까?";

  const handleCloseModal = () => {
    const answer = window.confirm(closeQuestion);
    if (answer) {
      setReviewModal(false);
    }
  };

  return (
    <S.ReviewModalContainer onClick={handleCloseModal}>
      <S.ReviewModalWrapper
        onClick={(e) => {
          e.stopPropagation();
          setShowPositionList(false);
        }}
      >
        <S.ReviewCloseIcon onClick={handleCloseModal}>
          <img src={close} alt="이미지 없음" />
        </S.ReviewCloseIcon>

        <S.ReviewCompanyInfo>
          <img src={reviewCompanyInfo.companyLogo || logo} alt="이미지 없음" />
          <p>{reviewCompanyInfo.companyName}</p>
        </S.ReviewCompanyInfo>

        <ReviewForm
          companyId={reviewCompanyInfo.companyId}
          showPositionList={showPositionList}
          setShowPositionList={setShowPositionList}
        />
      </S.ReviewModalWrapper>
    </S.ReviewModalContainer>
  );
}
