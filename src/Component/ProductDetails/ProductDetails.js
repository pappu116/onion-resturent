import React, { useContext, useReducer, useState } from "react";
import { Link, useParams } from "react-router-dom";
import fakeData from "../../fakeData";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Typography from "@material-ui/core/Typography";
import "./ProductDetails.css";
import { Button, ButtonGroup } from "@material-ui/core";
import Cart from "../Cart/Cart";
import { CartContext, CountContext } from "../../App";
const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
    display: "flex",
  },
});
const ProductDetails = () => {
  const [count, setCount] = useContext(CountContext);
  const classes = useStyles();
  const { productKey } = useParams();
  //cart codes
  const [cart, setCart] = useContext(CartContext);
  //cart function
  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    // console.log(newCart);
  };
  const product = fakeData.find((pd) => pd.key === productKey);
  const { name, price, title, img, about } = product;
  return (
    <div className="pd-area">
      <div>
        <h4>Your Food Details</h4>
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <img src={img} alt="" />
            </CardContent>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {about}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                variant="h4"
                component="h4"
              >
                $ {product.price * count}
                <button className="btn-group">
                  <span onClick={() => setCount(count - 1)}>-</span>
                  <span>{count}</span>
                  <span onClick={() => setCount(count + 1)}>+</span>
                </button>
              </Typography>
              <Link to="/shipment">
                <button className="btn-add" onClick={() => addToCart(product)}>
                  <AddShoppingCartIcon />
                  Add
                </button>
              </Link>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetails;
