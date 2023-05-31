import { MemberType } from "../../types/member.type";
import { MemberNickNameParam } from "./member.param";

export interface MemberRepository {
  getMyInfo(): Promise<MemberType>;
  patchMyNickName(nickName: MemberNickNameParam): Promise<void>;
}
