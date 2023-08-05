import { MemberType } from "../../types/Member/member.type";

export interface MemberRepository {
  getMyInfo(): Promise<MemberType>;
  getMemberInfoId(id: number): Promise<MemberType>;
  patchMyNickName(nickName: MemberNickNameParam): Promise<void>;
}

export interface MemberNickNameParam {
  nickName: string;
}
