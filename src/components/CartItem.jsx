import React from "react";
import { BsArrowUpSquareFill } from "react-icons/bs";
import { BsArrowDownSquareFill } from "react-icons/bs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useGlobalContext } from "../context/context";

export const CartItem = ({ id, img, price, name, qty }) => {
  const { increaseItemQty, decreaseItemQty, removeItem } = useGlobalContext();

  return (
    <div className="cart_item">
      <div className="cart_item-img">
        <img src={img} alt="cart item image" />
      </div>

      <div className="cart_item-info">
        <p className="cart_item-name">{name}</p>
        <div className="cart_item-btns">
          <button
            className="btn cart_item-btn"
            onClick={() => increaseItemQty(id)}
          >
            <BsArrowUpSquareFill />
          </button>
          <p className="cart_item-count">{qty}</p>
          <button
            className="btn cart_item-btn"
            onClick={() => decreaseItemQty(id)}
          >
            <BsArrowDownSquareFill />
          </button>
        </div>
        <p className="cart_item-price">$ {price * qty}</p>
        <button className="btn remove_item-btn" onClick={() => removeItem(id)}>
          <RiDeleteBin5Line />
        </button>
      </div>
    </div>
  );
};
