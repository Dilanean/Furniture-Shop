import React, { useState } from "react";
import Visa from "./../images/payments/visa.png";
import PayPal from "./../images/payments/paypal.png";
import ApplePay from "./../images/payments/apple-pay.png";
import AmericanExpress from "./../images/payments/american-express.png";
import { useGlobalContext } from "../context/context";

const Form = () => {
  const { total } = useGlobalContext();

  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [buyers, setBuyers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && cardNumber && expirationDate && cvv) {
      setBuyers([
        ...buyers,
        {
          name,
          cardNumber,
          expirationDate,
          cvv,
        },
      ]);
      alert("Form sent");
      setName(""), setCardNumber("");
      setExpirationDate("");
      setCvv("");
    } else {
      alert("Complete the form");
    }
  };

  return (
    <div className="payment_card">
      <h2>Card Details</h2>
      <div className="payments">
        <img src={Visa} alt="visa" />
        <img src={PayPal} alt="paypal" />
        <img src={ApplePay} alt="apple pay" />
        <img src={AmericanExpress} alt="america express" />
      </div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="card_number">Card Number</label>
        <input
          id="card_number"
          name="card_number"
          type="text"
          placeholder="1111 2222 3333 4444"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />

        <div className="card_grid">
          <div>
            <label htmlFor="date">Expiration date</label>
            <input
              id="date"
              name="date"
              type="text"
              placeholder="mm/yy"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="cvv">CVV</label>
            <input
              id="cvv"
              name="cvv"
              type="text"
              placeholder="123"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
        </div>

        <div className="payments_line"></div>

        <div className="checkout_info">
          <div>
            <h6>Subtotal</h6>
            <p>$ {total}</p>
          </div>
          <div>
            <h6>Shipping</h6>
            <p>$ 10</p>
          </div>
          <div>
            <h6>Total</h6>
            <p>$ {total + 10}</p>
          </div>
        </div>

        <button className="checkout_btn" type="submit">
          Checkout
        </button>
      </form>
    </div>
  );
};

export default Form;
