import axios from "axios";
import {
  ACCESS_KEY,
  REFRESH_KEY,
  REQUEST_KEY,
} from "../../constants/Auth/auth.constant";
import Token from "../Token/Token";
import CONFIG from "../.././config/config.json";

export const customAxios = axios.create({
  baseURL: `${CONFIG.SERVER}`,
  headers: {
    [REQUEST_KEY]: `Bearer ${Token.getToken(ACCESS_KEY)}`,
  },
});

const errorInterceptor = async (config: {
  config: any;
  response: { status: any };
}) => {
  const refresh_token = localStorage.getItem(REFRESH_KEY);
  const { status } = config.response;

  if (status === 401) {
    const originalRequest = config.config;
    try {
      const { data } = await axios.get(`${CONFIG.SERVER}/auth/refresh`, {
        headers: {
          [REQUEST_KEY]: `Bearer ${refresh_token}`,
        },
      });
      localStorage.setItem(ACCESS_KEY, data.accessToken);

      customAxios.defaults.headers[
        REQUEST_KEY
      ] = `Bearer ${data.accessToken}`;

      originalRequest.headers[REQUEST_KEY] = `Bearer ${data.accessToken}`;
      return axios(originalRequest);
    } catch (error) {
      localStorage.removeItem(ACCESS_KEY);
      localStorage.removeItem(REFRESH_KEY);
    }
  }
};

customAxios.interceptors.response.use((response) => response, errorInterceptor);