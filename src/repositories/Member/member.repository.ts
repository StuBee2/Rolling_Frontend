import { customAxios } from "../../libs/Axios/customAxios";
import { MemberType } from "../../types/member.type";
import { MemberNickNameParam } from "./member.param";

class MemberRepository {
  public async getMyInfo(): Promise<MemberType> {
    const { data } = await customAxios.get("/member");
    return data;
  }

  public async patchMyNickName(nickName: MemberNickNameParam): Promise<void> {
    await customAxios.patch("/member/nickName", nickName);
  }
}

export default new MemberRepository();