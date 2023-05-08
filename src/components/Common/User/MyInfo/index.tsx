import { MemberType } from "../../../../types/member.type";
import * as S from "./style";

interface Props {
  data: MemberType;
}

export default function MyInfo({ data }: Props) {
  return (
    <S.MyInfoContainer>
      <S.BasicInfo>
        <div>{data?.name}</div>
        <div>{data?.socialId}</div>
      </S.BasicInfo>
      <S.LoginTypeText>{data?.loginType}</S.LoginTypeText>
    </S.MyInfoContainer>
  );
}
