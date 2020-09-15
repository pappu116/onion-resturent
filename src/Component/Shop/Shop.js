import React, { useContext, useEffect, useState } from "react";
import { CartContext, CategoryContext, CountContext } from "../../App";
import fakeData from "../../fakeData";
import Button from "react-bootstrap/Button";
import Product from "../Product/Product";
import "./Shop.css";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [category, setCategory] = useContext(CategoryContext);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useContext(CartContext);
  const [count] = useContext(CountContext);
  if (cart.lengthy > 0) {
  }
  // product recived to cart

  const handelClick = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    // setCount(newCart);
    // console.log("item", product);
  };
  useEffect(() => {
    // console.log(category);
    const matchedProducts = fakeData.filter(
      (pd) => pd.category === category.toLowerCase()
    );
    setProducts(matchedProducts);
    console.log(matchedProducts);
  }, [category]);
  return (
    <div>
      {products.map((pd) => (
        <Product product={pd} handelClick={handelClick}></Product>
      ))}
      {cart.length > 0 ? (
        <Link to="/shipment">
          <button className="btn-Check-out1">
            CheckOut Your Food {cart.length}
          </button>
        </Link>
      ) : (
        <button className="btn-Check-out">CheckOut Your Food {count}</button>
      )}
    </div>
  );
};

export default Shop;
