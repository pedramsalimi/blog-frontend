import type { PageProps, PageWithLayout } from "@types";
import type { GetStaticProps } from "next";

import About from "@templates/About";
import { noLayout } from "@layouts";

interface HomeProps extends PageProps {}

const AboutPage: PageWithLayout<HomeProps> = function () {
  return <About />;
};

export const getStaticProps: GetStaticProps<HomeProps> = async ({ locale }) => {
  return {
    props: {
      messages: {
        ...require(`../locales/${locale}/about.json`),
        ...require(`../locales/${locale}/common.json`),
      },
    },
  };
};

AboutPage.getLayout = (page) => noLayout(page);

export default AboutPage;
