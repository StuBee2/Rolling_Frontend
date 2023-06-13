export interface AuthRepository {
  postRefreshToken(token: string): Promise<newAccessTokenParam>;
}

export interface newAccessTokenParam {
  accessToken: string;
}
