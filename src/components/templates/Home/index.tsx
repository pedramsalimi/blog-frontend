import React from "react";

interface Props {
  title: string;
}

const Home: React.FC<Props> = ({ title }) => {
  return <div>{title}</div>;
};

export default Home;
