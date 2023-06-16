import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import { IoIosArrowBack } from "react-icons/io";
import { BsCartDashFill as DeleteAllIcon } from "react-icons/bs";
import { CartItem } from "../components/CartItem";
import Form from "../components/Form";
import Scroll from "../components/ScrollToTop";

const Cart = () => {
  const { cart, itemsCounter, deleteAll } = useGlobalContext();
  return (
    <div>
      <section className="cart">
        <div>
          <Link to="/">
            <div className="back_to-home">
              <IoIosArrowBack />
              <p>Continue shopping</p>
            </div>
          </Link>
          <button className="delete_all_btn" onClick={deleteAll}>
            <p>Delete All</p>
            <DeleteAllIcon className="delete_all_icon" />
          </button>
          <hr />

          <p className="cart_qty-info">
            You have {itemsCounter} items in you cart
          </p>
          {cart.map((item) => {
            if (item.qty > 0) {
              return <CartItem {...item} />;
            }
          })}
        </div>
        <Form />
        <Scroll />
      </section>
    </div>
  );
};

export default Cart;
