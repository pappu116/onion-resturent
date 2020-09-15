import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Logo from "../../Image/logo.png";
import "./Header.css";
import { CategoryContext } from "../../App";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
const Header = () => {
  const classes = useStyles();
  const [category, setCategory] = useContext(CategoryContext);
  return (
    <>
      {/* bar-code */}
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <img style={{ height: "50px" }} src={Logo} alt="" />
            </Typography>
            <AddShoppingCartIcon />
            <Link to="/login">
              <Button color="inherit">Login</Button>
            </Link>
            <Button color="inherit">SignUp</Button>
          </Toolbar>
        </AppBar>
      </div>
      {/* banner-area-code */}
      <div className="Banner " align="center">
        <h1>Best Food Waiting For Your Belly</h1>
        <form action="">
          <input type="text" placeholder="Please Find Your Food" />
          <button className="btn-search">Search</button>
        </form>
      </div>
      {/* sub-menu-code */}
      <nav className="nav-bar d-flex justify-content-center">
        <li onClick={() => setCategory("Breakfast")}> Breakfast</li>
        <li onClick={() => setCategory("Lunch")}>Lunch</li>
        <li onClick={() => setCategory("Dinner")}>Dinner</li>
      </nav>
    </>
  );
};

export default Header;
