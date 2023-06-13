import axios from "axios";
import {
  ACCESS_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "../../constants/Auth/auth.constant";
import Token from "../Token/Token";
import CONFIG from "../../config/config.json";
import { requestHandler } from "./requestHandler";
import { responseHandler } from "./responseHandler";

export const customAxios = axios.create({
  baseURL: `${CONFIG.SERVER}`,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${Token.getToken(ACCESS_TOKEN_KEY)}`,
  },
});

// customAxios.interceptors.request.use(requestHandler, (response) => response);
customAxios.interceptors.response.use((response) => response, responseHandler);
