import axios from "axios";
import { getCookie, getLocale } from "@utils/Cookies";
import { COOKIE_LCOALE_KEY } from "@utils/constants";
import { defaultLocale } from "../../../i18n";

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,

  responseType: "json",
});
client.defaults.timeout = 10000;

client.interceptors.request.use(
  function (config) {
    config.headers["Accept-Language"] =
      getLocale() || getCookie().get(COOKIE_LCOALE_KEY) || defaultLocale;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default client;
