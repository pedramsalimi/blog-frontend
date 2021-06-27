import type { PageProps } from "@types";
import type { GetStaticProps, NextPage, GetStaticPaths } from "next";

import Post from "@templates/Post";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";

interface PostProps extends PageProps {}

const PostPage: NextPage<PostProps> = function () {
  const { query } = useRouter();
  const { id } = query;

  const t = useTranslations();
  return <Post title={(t("title") as string) + " " + id} />;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<PostProps> = async ({ locale }) => {
  return {
    props: {
      messages: {
        ...require(`../../locales/${locale}/posts.json`),
      },
    },
  };
};

export default PostPage;
