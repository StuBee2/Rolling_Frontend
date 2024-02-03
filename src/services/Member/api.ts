import { rollingAxios } from "@src/libs/Axios/RollingAxios";
import { MemberType } from "@src/types/Member/member.type";

export interface MemberNickNameParam {
  nickName: string;
}

class MemberApi {
  public async getMyInfo(): Promise<MemberType> {
    const { data } = await rollingAxios.get("/member/my");
    return data;
  }

  public async getMemberInfoId(id: string): Promise<MemberType> {
    const { data } = await rollingAxios.get(`/member/${id}`);
    return data;
  }

  public async patchMyNickName(nickName: MemberNickNameParam): Promise<void> {
    await rollingAxios.patch("/member/nickName", nickName);
  }
}

export default new MemberApi();
