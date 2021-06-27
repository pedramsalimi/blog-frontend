import type { PageProps } from "@types";
import type { GetServerSideProps, NextPage } from "next";

import Posts from "@templates/Posts";

interface PostsProps extends PageProps {}

const PostsPage: NextPage<PostsProps> = function () {
  return <Posts />;
};

export const getServerSideProps: GetServerSideProps<PostsProps> = async (
  ctx
) => {
  return {
    props: {},
  };
};

export default PostsPage;
