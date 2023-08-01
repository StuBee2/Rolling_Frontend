import { customAxios } from "../../libs/Axios/customAxios";
import { MemberType } from "../../types/member.type";
import { MemberNickNameParam, MemberRepository } from "./member.repository";

class MemberRepositoryImpl implements MemberRepository {
  public async getMyInfo(): Promise<MemberType> {
    const { data } = await customAxios.get("/member/my");
    return data;
  }

  public async getMemberInfoId(id: number): Promise<MemberType> {
    const { data } = await customAxios.get(`/member/${id}`);
    return data;
  }

  public async patchMyNickName(nickName: MemberNickNameParam): Promise<void> {
    await customAxios.patch("/member/nickName", nickName);
  }
}

export default new MemberRepositoryImpl();
