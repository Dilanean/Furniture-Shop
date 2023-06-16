import React from "react";
import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Shop from "../components/Shop";
import Testimonials from "../components/Testimonials";
import Why from "../components/Why";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="home">
        <h1 className="home_title">
          Make your interior more <br /> minimalistic & modern
        </h1>
        <p className="home_description">
          We love to put together different things and design interiors in a
          simple and unusual way. Good taste is our guide.
        </p>
      </div>
      <ScrollToTop />
      <Why />
      <Shop />
      <AboutUs />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
