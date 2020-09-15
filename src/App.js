import React, { createContext, useState } from "react";
import "./App.css";
import Header from "./Component/Header/Header";
import Shop from "./Component/Shop/Shop";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotFound from "./Component/NotFound/NotFound";
import ProductDetails from "./Component/ProductDetails/ProductDetails";
import Home from "./Component/Home/Home";
import Shipment from "./Component/Shipment/Shipment";
import Login from "./Component/Login/Login";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
export const CategoryContext = createContext();
export const CountContext = createContext();
export const CartContext = createContext();
export const UserContext = createContext();
function App() {
  const [category, setCategory] = useState("Lunch");
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      <CountContext.Provider value={[count, setCount]}>
        <CartContext.Provider value={[cart, setCart]}>
          <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <Router>
              <Switch>
                <Route exact path="/">
                  <Home></Home>
                </Route>
                <PrivateRoute path="/shipment">
                  <Shipment></Shipment>
                </PrivateRoute>
                <Route path="/product/:productKey">
                  <ProductDetails></ProductDetails>
                </Route>
                <Route path="/login">
                  <Login></Login>
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </Router>
          </UserContext.Provider>
        </CartContext.Provider>
      </CountContext.Provider>
    </CategoryContext.Provider>
  );
}

export default App;
