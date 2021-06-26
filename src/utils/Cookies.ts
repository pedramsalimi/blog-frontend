import type { GetServerSidePropsContext } from "next";
import type { AppContext } from "next/app";

import { Cookie } from "./Cookie";

let ctx: AppContext | undefined;
let cookie: Cookie | undefined;

export const getCookie = () => {
  return cookie || new Cookie();
};
export const getCookieFromContext = (
  ctxOrCookie?: GetServerSidePropsContext
) => {
  return new Cookie(ctxOrCookie);
};

export const setContext = (ctxOrCookie: AppContext | undefined) => {
  ctx = ctxOrCookie;
  cookie = new Cookie(ctx?.ctx);
};
export const getLocale = () => ctx?.router?.locale || "";
