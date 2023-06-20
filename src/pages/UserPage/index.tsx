import User from "../../components/User";
import Regist from "../../components/User/Company/Regist";
import Review from "../../components/User/Company/Review";
import Profile from "../../components/User/Profile";

interface Props {
  page: number;
}

export default function UserPage({ page }: Props) {
  return (
    <User>
      {page === 0 && <Profile />}
      {page === 1 && <Regist />}
      {page === 2 && <Review />}
    </User>
  );
}
