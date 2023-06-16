import React from "react";
import arrowImg from "./../images/arrow.png";

import { useGlobalContext } from "../context/context";

const MoreBtn = ({ text }) => {
  const { viewAll } = useGlobalContext();
  return (
    <button className="more_btn">
      {text}
      <img className="arrow-img" src={arrowImg} alt="arrow image" />
    </button>
  );
};

export default MoreBtn;
