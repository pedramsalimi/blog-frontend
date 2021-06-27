import type { DefaultLayoutProps } from "@types";

import DefaultLayout from "./DefaultLayout";

export const getDefaultLayout = (
  page: React.ReactNode,
  props?: DefaultLayoutProps
) => <DefaultLayout {...props}>{page}</DefaultLayout>;
export const noLayout = (page: React.ReactNode) => page;
