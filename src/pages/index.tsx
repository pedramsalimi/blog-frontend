import type { PageProps } from "@types";
import type { GetServerSideProps, NextPage } from "next";

import Home from "@templates/Home";

interface HomeProps extends PageProps {}

const HomePage: NextPage<HomeProps> = function () {
  return <Home />;
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
