export interface AuthRepository {
  postRefreshToken(
    refreshToken: RefreshTokenParam
  ): Promise<newAccessTokenResponse>;
}

export interface newAccessTokenResponse {
  accessToken: string;
}

export interface RefreshTokenParam {
  refreshToken: string;
}
