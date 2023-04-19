import * as S from "./style";

export default function NotFound() {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <S.ErrorText isNumber={true}>404</S.ErrorText>
      <S.ErrorText isNumber={false}>페이지를 찾을 수 없습니다!</S.ErrorText>
    </div>
  );
}
