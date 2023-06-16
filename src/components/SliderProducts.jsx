import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Furniture from "./Furniture";

const SliderProducts = ({ filteredProducts }) => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        grabCursor={true}
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 20,
          },

          481: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          1030: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {filteredProducts.map((furniture) => {
          return (
            <SwiperSlide>
              {<Furniture key={furniture.id} {...furniture} />}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SliderProducts;
