import axios from "axios";
import {
  ACCESS_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "@src/constants/Auth/auth.constant";
import Token from "../Token/Token";
import CONFIG from "@src/config/config.json";
import { responseHandler } from "./responseHandler";

export const customAxios = axios.create({
  baseURL: CONFIG.SERVER,
});

const accessToken = Token.getToken(ACCESS_TOKEN_KEY);

if (accessToken) {
  customAxios.defaults.headers.common[
    REQUEST_TOKEN_KEY
  ] = `Bearer ${accessToken}`;
} else {
  delete customAxios.defaults.headers.common[REQUEST_TOKEN_KEY];
}

customAxios.interceptors.response.use((response) => response, responseHandler);
