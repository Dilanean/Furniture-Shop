import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Stars = (raiting) => {
  return Array.from({ length: 5 }, (_, index) => {
    if (raiting >= index + 1) {
      return <BsStarFill fill="#fca903" />;
    } else if (raiting >= index + 0.5) {
      return <BsStarHalf fill="#fca903" />;
    } else {
      return <BsStar fill="#fca903" />;
    }
  });
};

export default Stars;
