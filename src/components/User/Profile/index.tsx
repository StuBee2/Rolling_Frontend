import { useRecoilValue } from "recoil";
import MyInfo from "./MyInfo";
import { MyMemberInfo } from "@src/stores/member/member.store";

function Profile() {
  const myInfo = useRecoilValue(MyMemberInfo);
  return <MyInfo data={myInfo!!} />;
}
export default Profile;
