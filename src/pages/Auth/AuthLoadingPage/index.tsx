import { useSocialLogin } from "../../../hooks/Auth/useSocialLogin";
import useHideHeader from "../../../hooks/Common/useHideHeader";

export default function AuthLoadingPage() {
  useHideHeader();
  useSocialLogin();
  return <div>로딩중</div>;
}
