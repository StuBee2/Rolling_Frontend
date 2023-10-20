import { MemberType } from "@src/types/Member/member.type";

export interface MemberRepository {
  getMyInfo(): Promise<MemberType>;
  getMemberInfoId(id: string): Promise<MemberType>;
  patchMyNickName(nickName: MemberNickNameParam): Promise<void>;
}

export interface MemberNickNameParam {
  nickName: string;
}
