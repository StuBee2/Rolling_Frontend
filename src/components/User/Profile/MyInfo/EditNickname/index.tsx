import { useEditNickName } from "@src/hooks/Common/useEditNickName";
import * as S from "./style";

interface Props {
  nickName: string;
}

export default function EditNickname({ nickName }: Props) {
  const { ...attr } = useEditNickName(nickName);
  return (
    <>
      {attr.isEditNickName ? (
        <S.AddNickNameForm onSubmit={attr.handleNickNameSubmit}>
          <input
            type="text"
            value={attr.editNickName || ""}
            onChange={attr.handleEditNickNameChange}
            placeholder="닉네임을 입력하세요."
          />
          <S.EditAndCancelContainer>
            <button type="submit">수정</button>
            <button onClick={attr.hanldeEditNickNameCancel}>취소</button>
          </S.EditAndCancelContainer>
        </S.AddNickNameForm>
      ) : (
        <S.AddNickNameBtn>
          <S.NickName isHaveNickName={nickName !== ""}>
            {nickName || "닉네임 추가하기"}
          </S.NickName>
          <S.EditNickNameHoverContainer
            onClick={attr.handleEditNickNameQuestion}
          >
            <S.EditNickIcon size={15} />
          </S.EditNickNameHoverContainer>
        </S.AddNickNameBtn>
      )}
    </>
  );
}
