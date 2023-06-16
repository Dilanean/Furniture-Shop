import React from "react";
import Title from "./Title";
import WhyComponent from "./WhyComponent";

const Why = () => {
  return (
    <section className="why_section">
      <Title title="Why Choose Us" />
      <WhyComponent
        title="Luxury facilities"
        description="The advantage of hiring a workspace with us is that givees service and all-around facilities."
      />
      <WhyComponent
        title="Affordable Price"
        description="You can get a workspace of the highst quality at an affordable enjoy the facilities that are olny."
      />
      <WhyComponent
        title="Many Choices"
        description="We provide many unique work space choices so that you can workspace to your liking."
      />
    </section>
  );
};

export default Why;
