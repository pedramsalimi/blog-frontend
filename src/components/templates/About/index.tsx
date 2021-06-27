import React from "react";

interface Props {
  title: string;
}

const About: React.FC<Props> = ({ title }) => {
  return <div>{title}</div>;
};

export default About;
