import React from "react";
import SubTitle from "./SubTitle";
import Title from "./Title";
import SliderTestimonials from "./SliderTestimonials";

const Testimonials = () => {
  return (
    <section className="testimonials_section" id="testimonials">
      <SubTitle subtitle="Testimonials" />
      <Title title="Our Client Reviews" />
      <SliderTestimonials />
    </section>
  );
};

export default Testimonials;
