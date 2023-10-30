import { useSetUpNickName } from "@src/hooks/NickName/useSetUpNickName";
import * as S from "./style";

interface Props {
  nickName: string;
}

export default function NickName({ nickName }: Props) {
  const { ...attr } = useSetUpNickName(nickName);
  const isEditing =
    nickName !== attr.setUpNickName && attr.setUpNickName !== "";

  return (
    <>
      <S.Form onSubmit={attr.handleNickNameSubmit} isEditing={isEditing}>
        <S.Input
          type="text"
          value={attr.setUpNickName}
          onChange={attr.handleNickNameChange}
          placeholder="닉네임 입력"
        />

        <S.SubmitButton type="submit" isEditing={isEditing}>
          {nickName === null ? "등록" : "수정"}
        </S.SubmitButton>
      </S.Form>
    </>
  );
}
