import { rollingAxios } from "@src/libs/Axios/customAxios";
import { MemberType } from "@src/types/Member/member.type";
import { MemberNickNameParam, MemberRepository } from "./member.repository";

class MemberRepositoryImpl implements MemberRepository {
  public async getMyInfo(): Promise<MemberType> {
    const { data } = await rollingAxios.get("/member/my");
    return data;
  }

  public async getMemberInfoId(id: number): Promise<MemberType> {
    const { data } = await rollingAxios.get(`/member/${id}`);
    return data;
  }

  public async patchMyNickName(nickName: MemberNickNameParam): Promise<void> {
    await rollingAxios.patch("/member/nickName", nickName);
  }
}

export default new MemberRepositoryImpl();
