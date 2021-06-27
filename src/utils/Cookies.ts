import type { GetServerSidePropsContext, NextPageContext } from "next";
import type { AppContext } from "next/app";

import { Cookie } from "./Cookie";

type CookieContext = NextPageContext | GetServerSidePropsContext | undefined;
let ctx: CookieContext;
let cookie: Cookie | undefined;

export const getCookie = () => {
  return cookie || new Cookie();
};
export const getCookieFromContext = (
  ctxOrCookie?: GetServerSidePropsContext
) => {
  return new Cookie(ctxOrCookie);
};

export const setContext = (ctxOrCookie: CookieContext) => {
  ctx = ctxOrCookie;
  cookie = new Cookie(ctx);
};
export const getLocale = () => ctx?.locale || "";
