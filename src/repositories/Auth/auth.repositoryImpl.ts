import axios from "axios";
import { AuthRepository, newAccessTokenParam } from "./auth.repository";
import CONFIG from "../../config/config.json";
import { REQUEST_REFRESH_TOKEN_KEY } from "../../constants/Auth/auth.constant";

class AuthRepositoryImpl implements AuthRepository {
  public async postRefreshToken(token: string): Promise<newAccessTokenParam> {
    const { data } = await axios.get(`${CONFIG.SERVER}/auth/refresh`, {
      headers: {
        [REQUEST_REFRESH_TOKEN_KEY]: `Bearer ${token}`,
      },
    });

    return data;
  }
}

export default new AuthRepositoryImpl();
