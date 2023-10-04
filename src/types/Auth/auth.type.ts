export type DecodeKeyType = "sub" | "authority" | "iat" | "exp";

export type DecodeType = {
  [key in DecodeKeyType]: string | number;
};
