import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext, CountContext } from "../../App";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";
const Cart = (props) => {
  const [count] = useContext(CountContext);
  // const cart = props.cart;
  const [cart] = useContext(CartContext);
  console.log(cart);
  const price = cart.reduce((price, prd) => price + prd.price, 0);

  const tax = price * 0.01;
  const formateNumber = (num) => {
    const percision = num.toFixed(2);
    return percision;
  };
  const fee = price / 95;
  const grandTotal = (price + Number(tax) + Number(fee)).toFixed(2);

  return (
    <div className="cart">
      {cart.map((prt) => (
        <CartItem item={prt}></CartItem>
      ))}
      <br />
      <p>SubTotal Item: {count < 0 ? cart.length : count}</p>
      <p>Price: ${formateNumber(price)}</p>
      <p>Commission: ${formateNumber(tax)}</p>
      <p>Delivery Fee: {formateNumber(fee)}</p>
      <h5>Grand Total:$ {grandTotal}</h5>
    </div>
  );
};

export default Cart;
