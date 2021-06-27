import React from "react";
import Link from "next/link";

interface Props {
  title: string;
}

const Home: React.FC<Props> = ({ title }) => {
  return (
    <div>
      {title}
      <Link href="/post">Posts</Link>
    </div>
  );
};

export default Home;
