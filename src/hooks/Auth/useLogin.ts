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
    if (id && pw) {
      window.alert("성공");
      setCredentials({ id: "", pw: "" });
    } else if (!id && !pw) {
      window.alert("아이디와 비밀번호를 입력해주세요!");
    } else if (!id) {
      window.alert("아이디를 입력해주세요!");
    } else {
      window.alert("비밀번호를 입력해주세요!");
    }
  };

  return { handleChange, handleSubmit, ...credentials };
}
