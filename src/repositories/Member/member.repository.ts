import { MemberType } from "../../types/member.type";

export interface MemberRepository {
  getMyInfo(): Promise<MemberType>;
  getMemberInfoId(id: number): Promise<MemberType>;
  patchMyNickName(nickName: MemberNickNameParam): Promise<void>;
}

export interface MemberNickNameParam {
  nickName: string;
}
