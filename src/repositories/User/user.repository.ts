import { customAxios } from "../../libs/Axios/customAxios";
import { MyMemberType } from "../../types/member.type";
import { NickNameParam } from "./user.param";

class UserRepository {
  public async getMyInfo(): Promise<MyMemberType> {
    const { data } = await customAxios.get("/member/my");
    return data;
  }

  public async patchMyNickName(nickName: NickNameParam): Promise<void> {
    await customAxios.patch("/member/nickName", nickName);
  }
}

export default new UserRepository();