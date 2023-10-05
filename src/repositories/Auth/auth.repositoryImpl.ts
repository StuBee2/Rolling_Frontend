import {
  AuthRepository,
  RefreshTokenParam,
  newAccessTokenResponse,
} from "./auth.repository";
import { customAxios } from "@src/libs/Axios/customAxios";

class AuthRepositoryImpl implements AuthRepository {
  public async postRefreshToken(
    refreshToken: RefreshTokenParam
  ): Promise<newAccessTokenResponse> {
    const { data } = await customAxios.post<newAccessTokenResponse>(
      "/auth/refresh",
      refreshToken
    );
    return data;
  }
}

export default new AuthRepositoryImpl();
