import * as S from "./style";
import Skill from "./Skill";
import MyInfo from "./MyInfo";

function Profile() {
  return (
    <>
      <S.ProfileContainer>
        <MyInfo />
      </S.ProfileContainer>
      <S.ProfileContainer>
        <Skill />
      </S.ProfileContainer>
    </>
  );
}
export default Profile;
