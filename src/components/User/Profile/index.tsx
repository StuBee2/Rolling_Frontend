import { useRecoilValue } from "recoil";
import MyInfo from "./MyInfo";
import * as S from "./style";
import { MyMemberInfo } from "@src/stores/member/member.store";
import CompanyStatus from "./CompanyStatus";
import { FontSize } from "../style";

function Profile() {
  const myInfo = useRecoilValue(MyMemberInfo);
  return (
    <S.Container>
      <S.Title>
        <FontSize fontSize="30px">롤링 Profile</FontSize>
        <S.Explain>
          기본 정보와 서비스에서 이용되는 프로필을 설정할 수 있어요
        </S.Explain>
      </S.Title>
      <CompanyStatus />
      <MyInfo data={myInfo!!} />
    </S.Container>
  );
}
export default Profile;
