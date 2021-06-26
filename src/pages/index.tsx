import type { PageProps } from "@types";
import type { GetStaticProps, NextPage } from "next";

interface HomeProps extends PageProps {}

const Home: NextPage<HomeProps> = function () {
  return <div>Home</div>;
};

export const getStaticProps: GetStaticProps<HomeProps> = async ({ locale }) => {
  return {
    props: {
      messages: {
        ...require(`../../locales/${locale}/home.json`),
        ...require(`../../locales/${locale}/common.json`),
      },
      now: new Date(),
    },
  };
};

export default Home;
