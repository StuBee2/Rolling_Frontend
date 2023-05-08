import axios from "axios";
import { ACCESS_KEY, REQUEST_KEY } from "../../constants/Auth/auth.constant";
import Token from "../Token/Token";
import CONFIG from "../../config/config.json";

export const customAxios = axios.create({
  baseURL: `${CONFIG.SERVER}`,
  headers: {
    [REQUEST_KEY]: `Bearer ${Token.getToken(ACCESS_KEY)}`,
  },
});
