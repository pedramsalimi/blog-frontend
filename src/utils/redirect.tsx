import type { GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import type { PageProps } from "@types";

import React, { Component } from "react";
import Router from "next/router";

type ServerRedirectMeta = {
  getUrl: (ctx: GetServerSidePropsContext) => string;
  external?: boolean;
  isAllowd?: (ctx: GetServerSidePropsContext) => boolean;
};
interface ClientRedirectMeta<T> {
  getUrl: (props: T) => string;
  asPath?: string;
  isAllowd?: (props: T) => boolean;
}

export function clientRedirect<T extends PageProps>(
  WrappedComponent: React.ComponentType<T>,
  redirect: ClientRedirectMeta<T>
) {
  return class Redirect extends Component<T, { loading: boolean }> {
    constructor(props: any) {
      super(props);
      this.state = { loading: false };
    }
    componentDidMount() {
      const { getUrl, asPath, isAllowd = () => true } = redirect;
      if (isAllowd(this.props)) {
        Router.replace(getUrl(this.props), asPath); // Router.replace might be better here? not sure
      }
    }

    render() {
      const { isAllowd = () => true } = redirect;
      if (this.state.loading)
        return (
          <div className="loader-wrapper">
            <div className="loader loader-primary w-8 h-8">Loading</div>
          </div>
        );
      return !isAllowd(this.props) && WrappedComponent ? (
        <WrappedComponent {...this.props} />
      ) : null;
    }
  };
}

export const serverRedirect = (
  ctx: GetServerSidePropsContext,
  redirect: ServerRedirectMeta
): GetServerSidePropsResult<PageProps> => {
  const { referer } = ctx.req.headers; // if there's no referer then it was a server request
  const { getUrl, external = false, isAllowd = () => true } = redirect;

  let originalUrl = "";
  if (referer) {
    originalUrl = ctx.resolvedUrl;
  }

  if (!referer || external) {
    if (isAllowd(ctx)) {
      return {
        props: {
          originalUrl,
        },
        redirect: { destination: getUrl(ctx), statusCode: 302 },
      };
    }
  }

  return {
    props: {
      originalUrl,
    },
  };
};
