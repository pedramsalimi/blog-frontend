import type { ErrorResponse } from "@types";

import axios from "axios";
import auth from "../api/auth";
import { defaultLocale } from "../../../i18n";
import store from "@store";
import { setIsLoggedIn } from "@slices/user";
import {
  COOKIE_ACCESS_TOKEN_KEY,
  COOKIE_LCOALE_KEY,
  COOKIE_REFRESH_TOKEN_KEY,
} from "@utils/constants";
import { getCookie, getLocale } from "@utils/Cookies";
import { isServer } from "@utils/helpers";

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  responseType: "json",
});

client.defaults.timeout = 10000;

client.interceptors.request.use(
  function (config) {
    const Cookies = getCookie();
    const token = Cookies.get(COOKIE_ACCESS_TOKEN_KEY);
    config.headers["Accept-Language"] =
      getLocale() || Cookies.get(COOKIE_LCOALE_KEY) || defaultLocale;
    config.headers["Authorization"] = token ? `Bearer ${token}` : "";

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
let refreshTokenPromise: Promise<string> | null = null;

// const refreshToken = Cookies.get(COOKIE_REFRESH_TOKEN_KEY);
const reGetToken = async (refreshToken: string): Promise<string> => {
  return auth
    .refresh({ refreshToken })
    .fetch()
    .then((res) => {
      const token = res.result.accessToken || "";
      getCookie().set(COOKIE_ACCESS_TOKEN_KEY, token);

      if (!isServer()) store.dispatch(setIsLoggedIn(true));
      return Promise.resolve(token);
    })
    .catch((err: ErrorResponse) => {
      return Promise.reject(err);
    });
};

client.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const originalRequest = error.config;
    const Cookies = getCookie();
    if (error.response?.status === 401) {
      const refreshToken = Cookies.get(COOKIE_REFRESH_TOKEN_KEY);
      if (refreshToken) {
        if (!refreshTokenPromise) {
          refreshTokenPromise = reGetToken(refreshToken)
            .then((token) => {
              return token;
            })
            .catch((err) => {
              return Promise.reject(err);
            })
            .finally(() => {
              refreshTokenPromise = null;
            });
        }
        return refreshTokenPromise
          .then((accessToken) => {
            client.defaults.headers.common["Authorization"] =
              "Bearer " + accessToken;
            return client(originalRequest);
          })
          .catch((err: ErrorResponse) => {
            if (err.error.code === 403 || err.error.code === 401) {
              Cookies.remove(COOKIE_REFRESH_TOKEN_KEY);
              if (!isServer()) store.dispatch(setIsLoggedIn(false));
            }
            return Promise.reject(err.error.details ? err.error.details : err);
          });
      } else if (!isServer()) store.dispatch(setIsLoggedIn(false));
    }
    return Promise.reject(error);
  }
);

export default client;
