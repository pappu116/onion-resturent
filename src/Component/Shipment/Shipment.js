import React, { useContext, useState } from "react";
import "./Shipment.css";
import { useForm } from "react-hook-form";
import Cart from "../Cart/Cart";
import { CartContext } from "../../App";
const Shipment = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [item, setItem] = useState([]);
  // //cart coding
  const [cart, setCart] = useContext(CartContext);

  const onSubmit = (data) => {
    const newItem = [...item, data];
    setItem(newItem);
    // console.log("data", data);
  };
  return (
    <div className="shipment">
      <div className="form-area">
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <input name="name" ref={register} placeholder="Your Name" />
          {errors.name && <span className="error">Name is required</span>}

          <input
            name="address1"
            ref={register({ required: true })}
            placeholder=" 107 Rd No 8"
          />
          {errors.Email && <span className="error">Email is required</span>}

          <input
            name="address2"
            ref={register({ required: true })}
            placeholder="Flat,suite or floor"
          />
          {errors.phone && <span className="error">Address 2 is required</span>}

          <input
            name="business"
            ref={register({ required: true })}
            placeholder="Business Name"
          />

          {errors.address && (
            <span className="error">Busness Name is required</span>
          )}
          <input
            name="delivery"
            ref={register({ required: true })}
            placeholder="Add delivery Instructor"
          />

          {errors.address && <span className="error">Address is required</span>}

          <input type="submit" />
        </form>
      </div>
      <div>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shipment;
