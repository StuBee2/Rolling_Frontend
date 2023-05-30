import { useSocialLogin } from "../../../hooks/Auth/useSocialLogin";


export default function AuthLoadingPage() {
  useSocialLogin();
  return <div>로딩중</div>;
}
