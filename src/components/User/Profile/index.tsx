import { useRecoilValue } from "recoil";
import CompanyCount from "./CompanyCount";
import MyInfo from "./MyInfo";
import * as S from "./style";
import { MyMemberInfo } from "../../../store/member/member.store";

function Profile() {
  const myInfo = useRecoilValue(MyMemberInfo);
  return (
    <S.Container>
      <S.Title>
        <div style={{ fontSize: "30px" }}>롤링 Profile</div>
        <S.Explain>
          기본 정보와 서비스에서 이용되는 프로필을 설정할 수 있어요
        </S.Explain>
      </S.Title>
      <CompanyCount />
      <MyInfo data={myInfo!!} />
    </S.Container>
  );
}
export default Profile;
