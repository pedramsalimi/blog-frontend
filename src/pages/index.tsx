import type { PageProps } from "@types";
import type { GetServerSideProps, NextPage } from "next";

import Home from "@templates/Home";
import { useTranslations } from "next-intl";
import { getCookie, setContext } from "@utils/Cookies";
import { authApi, userApi } from "@gate";
import {
  COOKIE_ACCESS_TOKEN_KEY,
  COOKIE_REFRESH_TOKEN_KEY,
} from "@utils/constants";

interface HomeProps extends PageProps {}

const HomePage: NextPage<HomeProps> = function () {
  const t = useTranslations();
  return <Home title={t("title") as string} />;
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async (
  ctx
) => {
  const { locale } = ctx;

  return {
    props: {
      messages: {
        ...require(`../locales/${locale}/home.json`),
        ...require(`../locales/${locale}/common.json`),
      },
      now: new Date().getTime(),
    },
  };
};

export default HomePage;
