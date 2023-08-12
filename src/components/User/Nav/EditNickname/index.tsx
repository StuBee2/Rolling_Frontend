import styled from "styled-components";
import { useEditNickName } from "@src/hooks/Common/useEditNickName";
import { EditAndCancelContainer } from "../style";

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
        <form onSubmit={handleNickNameSubmit}>
          <input
            type="text"
            value={editNickName || ""}
            onChange={handleEditNickNameChange}
            placeholder="닉네임을 입력하세요."
          />
          <EditAndCancelContainer>
            <button type="submit">수정</button>
            <button onClick={hanldeEditNickNameCancel}>취소</button>
          </EditAndCancelContainer>
        </form>
      ) : (
        <AddNickNameBtn onClick={handleEditNickNameQuestion}>
          {nickName ? nickName : "닉네임 추가하기"}
        </AddNickNameBtn>
      )}
    </>
  );
}

const AddNickNameBtn = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  font-size: 15px;
`;
