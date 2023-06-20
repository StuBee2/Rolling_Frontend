import { useGetMyInfoQuery } from "../../../queries/Member/Member.query";
import * as S from "./style";
import { AiFillGithub } from "react-icons/ai";
import regist from "../../../assets/regist.svg";
import review from "../../../assets/review.svg";

function Profile() {
  const { data } = useGetMyInfoQuery();
  return (
    <S.Container>
      <S.Title>
        <div style={{ fontSize: "30px" }}>롤링 Profile</div>
        <S.Explain>
          기본 정보와 서비스에서 이용되는 프로필을 설정할 수 있어요
        </S.Explain>
      </S.Title>

      <S.CompanyStatusWrap>
        <S.CompanyStatusContainer>
          <S.CompanyStatus>
            <img src={regist} alt="" />
            <S.CompanyNumber>2</S.CompanyNumber>
          </S.CompanyStatus>
          <div>
            <S.CompanyNumberText>내가 등록한 기업의 수</S.CompanyNumberText>
            <S.StatusText>최근 업데이트 5개월 전</S.StatusText>
          </div>
        </S.CompanyStatusContainer>
        <S.CompanyStatusContainer>
          <S.CompanyStatus>
            <img src={review} alt="" />
            <S.CompanyNumber>2</S.CompanyNumber>
          </S.CompanyStatus>
          <div>
            <S.CompanyNumberText>내가 리뷰한 기업의 수</S.CompanyNumberText>
            <S.StatusText>최근 업데이트 5개월 전</S.StatusText>
          </div>
        </S.CompanyStatusContainer>
      </S.CompanyStatusWrap>

      <S.MyInfoContainer>
        <S.BasicInfoContainer>
          <S.Title>
            <div style={{ fontSize: "25px", color: "#000" }}>기본 정보</div>
            <S.Explain>
              롤링에서 제공되는 맞춤 콘텐츠의 기본 데이터로 활용됩니다
            </S.Explain>
          </S.Title>
          <S.GitUserContainer>
            <S.GitUserLogo src={data?.socialDetails.imageUrl} />
            <div>
              <S.GitUserName>{data?.socialDetails.name}</S.GitUserName>
              <S.GitUserEmail>{data?.socialDetails.email}</S.GitUserEmail>
            </div>
          </S.GitUserContainer>
        </S.BasicInfoContainer>

        <S.GitContainer>
          <S.GitLink
            onClick={() =>
              window.open(
                `https://github.com/${data?.socialDetails.socialId}`,
                "_blank"
              )
            }
          >
            <AiFillGithub size={25} />
            <div style={{ fontWeight: "500" }}>
              {data?.socialDetails.socialId}
            </div>
          </S.GitLink>
          <S.GitLoginType>
            {data?.socialDetails.loginType} 로그인 중
          </S.GitLoginType>
        </S.GitContainer>
      </S.MyInfoContainer>
    </S.Container>
  );
}
export default Profile;
