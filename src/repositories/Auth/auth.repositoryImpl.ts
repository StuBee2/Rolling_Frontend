import axios from "axios";
import { AuthRepository, newAccessTokenParam } from "./auth.repository";
import CONFIG from "../../config/config.json";

class AuthRepositoryImpl implements AuthRepository {
  public async postRefreshToken(token: string): Promise<newAccessTokenParam> {
    const { data } = await axios.post(`${CONFIG.SERVER}/auth/refresh`, token);
    return data;
  }
}

export default new AuthRepositoryImpl();
