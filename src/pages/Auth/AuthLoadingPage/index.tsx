import { useSocialLogin } from "@src/hooks/Auth/useSocialLogin";
import useHideHeader from "@src/hooks/Header/useHideHeader";

export default function AuthLoadingPage() {
  useHideHeader();
  useSocialLogin();
  return <div>로딩중</div>;
}
