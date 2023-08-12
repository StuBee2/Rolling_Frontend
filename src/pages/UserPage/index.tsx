import User from "@src/components/User";
import Employment from "@src/components/User/Company/Employment";
import Review from "@src/components/User/Company/Review";
import Profile from "@src/components/User/Profile";

interface Props {
  page: number;
}

export default function UserPage({ page }: Props) {
  return (
    <User>
      {page === 0 && <Profile />}
      {page === 1 && <Employment />}
      {page === 2 && <Review />}
    </User>
  );
}
