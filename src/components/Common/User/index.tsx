import CompanyList from "./Company";
import ReviewList from "./Review";
import * as S from "./style";

export default function User() {
  return (
    <S.UserContainer>
      <S.UserNameContainer>
        <img
          src="https://yt3.googleusercontent.com/ytc/AGIKgqOrkC7r6eXnPTlJlve9Ts_5zrXafqZN3a9acbYDOA=s900-c-k-c0x00ffffff-no-rj"
          alt=""
        />
      </S.UserNameContainer>

      <S.UserAbleContainer>
        <S.UserInfoContainer>
          <S.SkillsContainer />

          <S.RegisterContainer>
            <div>회사 리뷰하기</div>
            <div>회사 등록하기</div>
          </S.RegisterContainer>

          <S.RevieListContainer>
            <S.Wrap isCompany={true}>
              {Array.from({ length: 5 }).map((idx) => (
                <CompanyList />
              ))}
            </S.Wrap>
          </S.RevieListContainer>
        </S.UserInfoContainer>

        <S.UserReviewContainer>
          <S.Wrap isCompany={false}>
            {Array.from({ length: 5 }).map((idx) => (
              <ReviewList />
            ))}
          </S.Wrap>
        </S.UserReviewContainer>
      </S.UserAbleContainer>
    </S.UserContainer>
  );
}
