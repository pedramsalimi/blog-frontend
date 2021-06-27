import React from "react";
import Link from "next/link";

interface Props {}

const Posts: React.FC<Props> = () => {
  return (
    <div>
      <Link href="/">Home</Link>
    </div>
  );
};

export default Posts;
