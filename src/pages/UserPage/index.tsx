import User from "@src/components/User";
import Review from "@src/components/User/Review";
import Profile from "@src/components/User/Profile";

interface Props {
  page: number;
}

export default function UserPage({ page }: Props) {
  return (
    <User>
      {page === 0 && <Profile />}
      {page === 1 && <Review />}
    </User>
  );
}
