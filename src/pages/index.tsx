import type { PageProps } from "@types";
import type { GetServerSideProps, NextPage } from "next";

import Home from "@templates/Home";
import { useTranslations } from "next-intl";

interface HomeProps extends PageProps {}

const HomePage: NextPage<HomeProps> = function () {
  const t = useTranslations();
  return <Home title={t("title") as string} />;
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async ({
  locale,
}) => {
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
