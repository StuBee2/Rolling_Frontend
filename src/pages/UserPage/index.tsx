import User from "../../components/Common/User";
import Regist from "../../components/Common/User/Company/Regist";
import Review from "../../components/Common/User/Company/Review";

interface Props {
  page: number;
}

export default function UserPage({ page }: Props) {
  return (
    <User page={page}>
      {page === 1 && <Regist />}
      {page === 2 && <Review />}
    </User>
  );
}
