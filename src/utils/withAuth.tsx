import type { GetServerSideProps, GetServerSidePropsContext } from "next";
import React from "react";
import { PageProps } from "@types";

import {  COOKIE_REFRESH_TOKEN_KEY } from "./constants";
import { getCookieFromContext } from "./Cookies";
import { clientRedirect, serverRedirect } from "./redirect";

export function withAuth<T extends PageProps>(
  WrappedComponent: React.ComponentType<T>,
  nextUrl: string
) {
  return clientRedirect((props: T) => <WrappedComponent {...props} />, {
    isAllowd: (props) => {
      const { user } = props;
      return !user;
    },
    getUrl: ({ originalUrl }) => {
      return originalUrl
        ? `${nextUrl}?next=${encodeURIComponent(originalUrl)}`
        : nextUrl;
    },
  });
}

export function withAuthServerSideProps<T>(
  getServerSidePropsFunc: GetServerSideProps<T>,
  nextUrl: string
) {
  return async (context: GetServerSidePropsContext) => {
    const cookies = getCookieFromContext(context);
    const token = cookies.get(COOKIE_REFRESH_TOKEN_KEY);

    if (context.req && !token) {
      return serverRedirect(context, {
        getUrl: (ctx) => {
          const { url = "/" } = ctx.req;
          return `${nextUrl}?next=${encodeURIComponent(url)}`;
        },
      });
    }

    if (getServerSidePropsFunc) {
      return await getServerSidePropsFunc(context);
    }
    return { props: {} };
  };
}
