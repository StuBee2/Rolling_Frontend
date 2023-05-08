import { useLogin } from "../../../hooks/Auth/useLogin";

export default function AuthLoadingPage() {
  useLogin();
  return <div>로딩중</div>;
}
