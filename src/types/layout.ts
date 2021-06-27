import type { NextPage } from "next";
import type { IntlMessages } from "next-intl";

export interface PageProps {
  user?: boolean;
  originalUrl?: string;
  messages?: IntlMessages;
  now?: number;
}

export interface LayoutProps {
  user?: boolean;
  bodyClassname?: string;
  mainClassName?: string;
}
export interface DefaultLayoutProps extends LayoutProps {}

export type PageWithLayout<P = Record<string, never>> = NextPage<P> & {
  getLayout: (page: React.ReactNode, props?: LayoutProps) => React.ReactNode;
};
