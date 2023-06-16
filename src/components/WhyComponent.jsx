import React from "react";
import MoreBtn from "./MoreBtn";

const WhyComponent = ({ title, description }) => {
  return (
    <div className="why_component">
      <h4 className="why_component-title">{title}</h4>
      <p className="why_component-description">{description}</p>
      <MoreBtn text="More Info" />
    </div>
  );
};

export default WhyComponent;
