import { customAxios } from "@src/libs/Axios/RollingAxios";

export interface newAccessTokenResponse {
  accessToken: string;
}

export interface RefreshTokenParam {
  refreshToken: string;
}

class AuthApi {
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

export default new AuthApi();
