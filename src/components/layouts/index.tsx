import type { DefaultLayoutProps, LayoutProps } from "@types";
import type { NextPage } from "next";

import DefaultLayout from "./DefaultLayout";

export type PageWithLayout<P = Record<string, never>> = NextPage<P> & {
  getLayout: (page: React.ReactNode, props?: LayoutProps) => JSX.Element;
};

export const getDefaultLayout = (
  page: React.ReactNode,
  props?: DefaultLayoutProps
) => <DefaultLayout {...props}>{page}</DefaultLayout>;
export const noLayout = (page: React.ReactNode) => page;
