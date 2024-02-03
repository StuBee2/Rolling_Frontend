import axios from "axios";
import {
  ACCESS_TOKEN_KEY,
  REQUEST_TOKEN_KEY,
} from "@src/constants/Auth/auth.constant";
import Token from "../Token/Token";
import { responseHandler } from "./responseHandler";
import { requestHandler } from "./requestHandler";

export const customAxios = axios.create({
  baseURL: process.env.REACT_APP_ROLLING_API_KEY,
});

export const rollingAxios = axios.create({
  baseURL: process.env.REACT_APP_ROLLING_API_KEY,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${Token.getToken(ACCESS_TOKEN_KEY)}`,
  },
});

rollingAxios.interceptors.request.use(requestHandler, (response) => response);
rollingAxios.interceptors.response.use((response) => response, responseHandler);
