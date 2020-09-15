import React, { useContext, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { CategoryContext, CountContext } from "../../App";
import "./Product.css";
import { Container } from "react-bootstrap";
const useStyles = makeStyles({
  root: {
    display: "block",
    float: "left",
    marginLeft: "120px ",
    marginBottom: "50px",
    minWidth: "25%",
  },
});
const Product = (props) => {
  //   console.log(props);
  const { name, title, img, price, key } = props.product;
  const [category, setCategory] = useContext(CategoryContext);
  const [cart, setCart] = useState([]);
  const handelClick = props.handelClick;
  const classes = useStyles();
  return (
    <div>
      <Card
        className={classes.root}
        align="center"
        onClick={() => setCart(cart)}
      >
        <CardActionArea onClick={() => handelClick(props.product)}>
          <Link to={"/product/" + key}>
            <CardContent align="center">
              <img style={{ height: "200px" }} src={img} alt="" />
            </CardContent>
          </Link>
          <CardContent align="center">
            <Typography gutterBottom variant="h5" component="h5">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              $ {price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Product;
