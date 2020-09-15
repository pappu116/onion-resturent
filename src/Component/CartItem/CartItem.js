import React, { useContext } from "react";
import { CountContext } from "../../App";
import "./CartItem.css";
const CartItem = (props) => {
  const { img, name, price } = props.item;
  const [count, setCount] = useContext(CountContext);
  return (
    <div className="item-area">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <p>{name}</p>
        <p>
          ${(price * count).toFixed(2)}
          <button className="btn-cart">
            <span onClick={() => setCount(count - 1)}>-</span>
            <span>{count}</span>
            <span onClick={() => setCount(count + 1)}>+</span>
          </button>
        </p>
      </div>
    </div>
  );
};

export default CartItem;
