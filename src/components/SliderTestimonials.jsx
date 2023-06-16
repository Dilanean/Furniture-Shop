import React from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import testimonials from "../testimonials";
import { Swiper, SwiperSlide } from "swiper/react";
import Testimonial from "./Testimonial";

const SliderTestimonials = () => {
  return (
    <div className="slider_testimonials">
      <Swiper
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        grabCursor={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: true,
        }}
        loop={true}
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          750: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          1030: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {testimonials.map((testimonial) => {
          return (
            <SwiperSlide>
              <Testimonial key={testimonial.id} {...testimonial} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SliderTestimonials;
