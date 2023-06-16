import React from "react";
import Title from "./Title";
import MoreBtn from "./MoreBtn";
import SliderProducts from "./SliderProducts";
import { RiSlideshow2Fill } from "react-icons/ri";
import { BsGrid3X3GapFill as Grid } from "react-icons/bs";
import { useGlobalContext } from "../context/context";
import { Link as LinkScroll } from "react-scroll";
import AllProducts from "./AllProducts";

const Shop = () => {
  let types = ["chairs", "beds", "sofas", "armchairs"];
  const {
    filterProducts,
    filteredProducts,
    selectedCategory,
    viewAll,
    viewAllProducts,
  } = useGlobalContext();
  return (
    <div className="shop-section" id="shop">
      <div className="shop_section-title">
        <Title title="Best Selling Product" />
      </div>
      <div className="shop_btns">
        {types.map((type, index) => {
          return (
            <button
              className={`furniture_type-btn ${
                type === selectedCategory ? "active" : " "
              }`}
              key={index}
              onClick={() => filterProducts(type)}
            >
              {type}
            </button>
          );
        })}
      </div>

      {!viewAll ? (
        <SliderProducts filteredProducts={filteredProducts} />
      ) : (
        <AllProducts />
      )}
      <div className="shop-viewAll-btn">
        <LinkScroll
          to="shop"
          smooth={true}
          duration={500}
          onClick={viewAllProducts}
        >
          <MoreBtn text={`${!viewAll ? "View All" : "View Slide"}`} />
          {viewAll ? (
            <RiSlideshow2Fill className="slide-icon" />
          ) : (
            <Grid className="grid-icon" />
          )}
        </LinkScroll>
      </div>
    </div>
  );
};

export default Shop;
