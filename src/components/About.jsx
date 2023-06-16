import React from "react";
import SubTitle from "./SubTitle";
import Title from "./Title";

const About = ({ subtitle, title, text }) => {
  return (
    <div className="about_card">
      <SubTitle subtitle={subtitle} />
      <Title title={title} />
      <p className="about_description">{text}</p>
    </div>
  );
};

export default About;
