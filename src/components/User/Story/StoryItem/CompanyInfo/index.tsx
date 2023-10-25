import * as S from "./style";
import Logo from "@src/assets/icons/Logo/logo.png";
import { useNavigate } from "react-router-dom";

interface Props {
  //내 정보 페이지에서 받는 타입
  companyImgUrl?: string;
  companyName?: string;

  //회사 단일 페이지에서 받는 타입
  storyId?: string;
  writerId?: string;
  memberNickName?: string;
  memberSocialLoginId?: string;
  memberImageUrl?: string;
  companyId?: string;

  position: string;
  commuteTime: string;
  meal: string;
  welfare: string;
}

export default function CompanyInfo({ ...attr }: Props) {
  const navigate = useNavigate();

  const handleMovePage = () => {
    if (attr.memberSocialLoginId) {
      window.open(`https://github.com/${attr.memberSocialLoginId}`);
    } else {
      navigate(`/company/${attr.companyId}`);
    }
  };

  return (
    <S.Container>
      <S.CompanyLogo
        onClick={handleMovePage}
        isHaveSocialId={attr.memberSocialLoginId!!}
      >
        <img
          src={attr.companyImgUrl || attr.memberImageUrl || Logo}
          alt="이미지 없음"
        />
      </S.CompanyLogo>
      <S.Wrapper>
        <S.Title onClick={handleMovePage}>
          {attr.companyName || attr.memberNickName || attr.memberSocialLoginId}
        </S.Title>
        <S.Content>
          <S.Info>
            <p>
              포지션<span> · {attr.position}</span>
            </p>
            <p>
              출퇴근 시간<span> · {attr.commuteTime}</span>
            </p>
          </S.Info>

          <S.Info>
            <p>
              식사제공<span> · {attr.meal}</span>
            </p>
          </S.Info>
        </S.Content>
      </S.Wrapper>
    </S.Container>
  );
}
