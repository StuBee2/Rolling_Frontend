import { useState } from "react";

export function useLogin() {
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
      return window.alert("아이디를 입력해주세요");
    }
    if (pw.trim() === "") {
      return window.alert("비밀헌호를 입력해주세요");
    }
    return window.alert("깃허브를 로그인을 이용해주세요");
  };

  return { handleChange, handleSubmit, ...credentials };
}
