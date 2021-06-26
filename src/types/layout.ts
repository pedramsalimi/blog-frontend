import type { IntlMessages } from "next-intl";

export interface PageProps {
  user?: boolean;
  originalUrl?: string;
  messages?: IntlMessages;
  now?: Date;
}

export interface LayoutProps {
  user?: boolean;
  bodyClassname?: string;
  mainClassName?: string;
}
export interface DefaultLayoutProps extends LayoutProps {}
