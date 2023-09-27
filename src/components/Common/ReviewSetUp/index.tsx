import { BiDotsVerticalRounded } from "@react-icons/all-files/bi/BiDotsVerticalRounded";
import { USER_REVIEW_SETUP_ITEMS } from "@src/constants/User/user.constants";
import { useSetUpReview } from "@src/hooks/Reivew/useSetUpReview";
import * as S from "./style";

interface Props {
  reviewId: string;
  companyId: string;
}

export default function ReviewSetUp({ ...attr }: Props) {
  const { isClickDots, setIsClickDots, hanldeReviewSetUpClick } =
    useSetUpReview();
  const { reviewId, companyId } = attr;

  return (
    <>
      {isClickDots && reviewId !== "" ? (
        <>
          {USER_REVIEW_SETUP_ITEMS.map((item) => (
            <S.Icon
              key={item.id}
              src={item.image}
              onClick={() =>
                hanldeReviewSetUpClick(item.id, reviewId, companyId)
              }
              alt="이미지 없음"
            />
          ))}
        </>
      ) : (
        <S.SetUpIconContainer>
          <BiDotsVerticalRounded
            size={25}
            cursor="pointer"
            onClick={() => setIsClickDots(true)}
          />
        </S.SetUpIconContainer>
      )}
    </>
  );
}
