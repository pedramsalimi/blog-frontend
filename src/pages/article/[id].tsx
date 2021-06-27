import type { PageProps } from "@types";
import type { GetStaticProps, NextPage, GetStaticPaths } from "next";

import Post from "@templates/Post";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

interface ArticleProps extends PageProps {}

const ResolvedArticlePage: NextPage<ArticleProps & { id?: string }> =
  function ({ id }) {
    const t = useTranslations();
    return <Post title={(t("title") as string) + " " + id} />;
  };

const ArticlePage: NextPage<ArticleProps> = function () {
  const { query, isFallback } = useRouter();
  const { id } = query;

  if (isFallback) return <div>Loading...</div>;

  return <ResolvedArticlePage id={id as string} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true };
};

export const getStaticProps: GetStaticProps<ArticleProps> = async ({
  locale,
}) => {
  return {
    props: {
      messages: {
        ...require(`../../locales/${locale}/posts.json`),
      },
    },
  };
};

export default ArticlePage;
