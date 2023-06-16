import React from "react";
import Stars from "./Stars";
import { useGlobalContext } from "../context/context";
import { BsPlusCircleFill as AddBtn } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
const Furniture = ({ id, img, type, name, raiting, votes, price, qty }) => {
  const { increaseItemQty } = useGlobalContext();

  return (
    <div className="furniture-card">
      <div
        className="furniture-img"
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="furniture_details">
        <div className="furniture-description">
          <p className="furniture_type">{type}</p>
          <h5 className="furniture_name">{name}</h5>
          <div className="raiting">
            {Stars(raiting)}
            <p className="votes">({votes})</p>
          </div>
        </div>

        <div className="furniture-buy">
          <p className="furniture_price">$ {price}</p>
          <div
            className="buy_furniture-btn"
            onClick={() => increaseItemQty(id)}
          >
            {qty > 0 ? (
              <BsFillCartCheckFill className="shop_cart_icon" />
            ) : (
              <AddBtn />
            )}
            {qty > 0 && <p className="qty">({qty})</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Furniture;
