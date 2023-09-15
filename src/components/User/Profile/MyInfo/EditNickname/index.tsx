import { useEditNickName } from "@src/hooks/Common/useEditNickName";
import * as S from "./style";

interface Props {
  nickName: string;
}

export default function EditNickname({ nickName }: Props) {
  const {
    handleEditNickNameQuestion,
    handleEditNickNameChange,
    handleNickNameSubmit,
    hanldeEditNickNameCancel,
    isEditNickName,
    editNickName,
  } = useEditNickName(nickName);
  return (
    <>
      {isEditNickName ? (
        <S.AddNickNameForm onSubmit={handleNickNameSubmit}>
          <input
            type="text"
            value={editNickName || ""}
            onChange={handleEditNickNameChange}
            placeholder="닉네임을 입력하세요."
          />
          <S.EditAndCancelContainer>
            <button type="submit">수정</button>
            <button onClick={hanldeEditNickNameCancel}>취소</button>
          </S.EditAndCancelContainer>
        </S.AddNickNameForm>
      ) : (
        <S.AddNickNameBtn onClick={handleEditNickNameQuestion}>
          {nickName ? (
            <>
              <S.NickName>{nickName}</S.NickName>
              <S.EditNickIcon size={15} />
            </>
          ) : (
            "닉네임 추가하기"
          )}
        </S.AddNickNameBtn>
      )}
    </>
  );
}
