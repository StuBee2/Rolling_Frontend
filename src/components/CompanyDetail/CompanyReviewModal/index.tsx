import { ReviewCompanyInfoType } from "@src/types/Review/review.type";
import { useCloseModal } from "@stubee2/stubee2-rolling-util";
import { Dispatch, SetStateAction, useState } from "react";
import * as S from "./style";
import logo from "@src/assets/Common/Logo.svg";
import close from "@src/assets/Review/close.svg";
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
  useCloseModal(setReviewModal);

  return (
    <S.ReviewModalContainer onClick={() => setReviewModal(false)}>
      <S.ReviewModalWrapper
        onClick={(e) => {
          e.stopPropagation();
          setShowPositionList(false);
        }}
      >
        <S.ReviewCloseIcon onClick={() => setReviewModal(false)}>
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
