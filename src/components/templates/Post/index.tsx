import React from "react";

interface Props {
  title: string;
}

const Post: React.FC<Props> = ({ title }) => {
  return <div>{title}</div>;
};

export default Post;
