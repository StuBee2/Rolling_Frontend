import User from "@src/components/User";
import Review from "@src/components/User/Review";
import Profile from "@src/components/User/Profile";
import { useRecoilValue } from "recoil";
import { MyMemberInfo } from "@src/stores/member/member.store";

interface Props {
  page: number;
}

export default function UserPage({ page }: Props) {
  const myInfo = useRecoilValue(MyMemberInfo);
  const memberRole = myInfo?.memberDetails.memberRole;
  return (
    <User>
      {page === 0 && <Profile />}
      {page === 1 &&
        (memberRole === "MEMBER" ? (
          <Review />
        ) : (
          <p style={{ textAlign: "center" }}>동문인증이 필요한 기능입니다.</p>
        ))}
    </User>
  );
}
