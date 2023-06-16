import React from "react";
import About from "./About";
import MoreBtn from "./MoreBtn";
import aboutUSImg1 from "./../images/about1.png";
import aboutUSImg2 from "./../images/about2.jpg";
import aboutUSImg3 from "./../images/about3.jpg";
import aboutUSImg4 from "./../images/about4.jpg";
const AboutUs = () => {
  return (
    <section className="about_us-section" id="about_us">
      <div className="about_us-content ">
        <div className="about_us-img">
          <img src={aboutUSImg1} alt="furniture image" />
        </div>
        <div className="about_text">
          <About
            subtitle="experiences"
            title="we provide you the best experience"
            text="You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials"
          />
          <MoreBtn text="More info" />
        </div>
      </div>

      <div className="about_us-content-2">
        <div className="about_text">
          <About
            subtitle="Materials"
            title="Very serious materials for making furniture"
            text="Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price"
          />
          <MoreBtn text="More info" />
        </div>

        <div className="about_grid">
          <div className="about_grid-img">
            <img src={aboutUSImg2} alt="furniture image" />
          </div>
          <div className="about_grid-img">
            <img src={aboutUSImg3} alt="furniture image" />
          </div>
          <div className="about_grid-img">
            <img src={aboutUSImg4} alt="furniture image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
