import { useSetUpNickName } from "@src/hooks/NickName/useSetUpNickName";
import * as S from "./style";

interface Props {
  nickName: string;
}

export default function NickName({ nickName }: Props) {
  const { ...attr } = useSetUpNickName(nickName);

  return (
    <>
      {attr.isEditNickName ? (
        <S.NickNameForm onSubmit={attr.handleNickNameSubmit}>
          <input
            type="text"
            value={attr.setUpNickName}
            onChange={attr.handleNickNameChange}
            placeholder="닉네임을 입력하세요."
          />
          <S.EditAndCancelContainer>
            <button type="submit">수정</button>
            <button onClick={attr.hanldeCancelClick}>취소</button>
          </S.EditAndCancelContainer>
        </S.NickNameForm>
      ) : (
        <S.SetUpNickNameBtn>
          <S.NickName isHaveNickName={nickName !== ""}>
            {nickName || "닉네임 설정하기"}
          </S.NickName>
          <S.HoverContainer onClick={attr.handleEditNickNameQuestion}>
            <S.EditNickIcon size={15} />
          </S.HoverContainer>
        </S.SetUpNickNameBtn>
      )}
    </>
  );
}
