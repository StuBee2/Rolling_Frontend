import { useGetMyInfo } from "../../../queries/User/user.query";
import CompanyList from "./Company";
import MyInfo from "./MyInfo";
import ReviewList from "./Review";
import * as S from "./style";
import useTokenCheck from "../../../hooks/Auth/useTokenCheck";
import { useLogging } from "../../../hooks/Log/useLogging";
import { LOG_ITEM } from "../../../constants/Log/log.constants";

export default function User() {
  const { data: myInfo } = useGetMyInfo();
  const { handleLoggingClick } = useLogging();

  useTokenCheck();
  return (
    <S.UserContainer>
      <S.UserNameContainer>
        <img src={myInfo?.member.imageUrl} alt="" />
      </S.UserNameContainer>
      <S.UserAbleContainer>
        <S.UserInfoContainer>
          <S.SkillsContainer>
            <MyInfo data={myInfo?.member!!} />
          </S.SkillsContainer>

          <S.RegisterContainer>
            <div onClick={() => handleLoggingClick(LOG_ITEM[2])}>
              기업 등록하기
            </div>
            <div onClick={() => handleLoggingClick(LOG_ITEM[3])}>
              기업 리뷰하기
            </div>
          </S.RegisterContainer>

          <S.RevieListContainer>
            <S.Wrap isCompany={true}>
              <CompanyList data={myInfo?.companyList!!} />
            </S.Wrap>
          </S.RevieListContainer>
        </S.UserInfoContainer>

        <S.UserReviewContainer>
          <S.Wrap isCompany={false}>
            <ReviewList data={myInfo?.reviewList!!} />
          </S.Wrap>
        </S.UserReviewContainer>
      </S.UserAbleContainer>
    </S.UserContainer>
  );
}
