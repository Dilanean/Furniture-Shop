import React from "react";
import { useGlobalContext } from "../context/context";
import Furniture from "./Furniture";

const AllProducts = () => {
  const { filteredProducts } = useGlobalContext();
  return (
    <div className="all-products">
      {filteredProducts.map((product) => {
        return <Furniture {...product} />;
      })}
    </div>
  );
};

export default AllProducts;
