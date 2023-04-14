import * as S from "./style";

export default function User() {
  return (
    <S.UserContainer>
      <S.UserNameContainer>
        <img src="" alt="" />
        <div>닉네임</div>
      </S.UserNameContainer>

      <S.UserAbleContainer>
        <S.UserInfoContainer>
            <S.SkillsContainer />

            <S.AbleContainer />

            <S.RegisterContainer>
              <S.RegisterBtn>회사 등록하기</S.RegisterBtn>
              <S.RegisterBtn>회사 리뷰하기</S.RegisterBtn>
            </S.RegisterContainer>
        </S.UserInfoContainer>

        <S.UserReviewContainer>
          <S.ReviewWrap>
            {Array.from({ length: 3 }).map((idx) => (
              <div />
            ))}
          </S.ReviewWrap>
        </S.UserReviewContainer>
      </S.UserAbleContainer>
    </S.UserContainer>
  );
}
