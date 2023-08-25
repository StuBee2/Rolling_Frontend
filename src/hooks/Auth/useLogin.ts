import { useState } from "react";
import { useToastAlert } from "../Common/useToastAlert";

export function useLogin() {
  const { toastAlert } = useToastAlert();
  const [credentials, setCredentials] = useState<{ id: string; pw: string }>({
    id: "",
    pw: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { id, pw } = credentials;
    if (id.trim() === "") {
      return toastAlert("아이디를 입력해주세요", "warning");
    }
    if (pw.trim() === "") {
      return toastAlert("비밀헌호를 입력해주세요", "warning");
    }
    return toastAlert("깃허브를 로그인을 이용해주세요", "info");
  };

  return { handleChange, handleSubmit, ...credentials };
}
