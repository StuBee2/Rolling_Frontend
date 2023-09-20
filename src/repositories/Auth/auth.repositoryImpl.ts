import axios from "axios";
import {
  AuthRepository,
  RefreshTokenParam,
  newAccessTokenResponse,
} from "./auth.repository";
import CONFIG from "@src/config/config.json";

class AuthRepositoryImpl implements AuthRepository {
  public async postRefreshToken(
    refreshToken: RefreshTokenParam
  ): Promise<newAccessTokenResponse> {
    const { data } = await axios.post<newAccessTokenResponse>(
      `${CONFIG.SERVER}/auth/refresh`,
      refreshToken
    );
    return data;
  }
}

export default new AuthRepositoryImpl();
