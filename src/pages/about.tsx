import type { PageProps, PageWithLayout } from "@types";
import type { GetStaticProps } from "next";

import About from "@templates/About";
import { noLayout } from "@layouts";
import { useTranslations } from "next-intl";

interface HomeProps extends PageProps {}

const AboutPage: PageWithLayout<HomeProps> = function () {
  const t = useTranslations();
  return <About title={t("title") as string} />;
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
