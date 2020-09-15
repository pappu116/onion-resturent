import React from "react";
import Choose from "../Choose/Choose";
import Header from "../Header/Header";
import Shop from "../Shop/Shop";

const Home = () => {
  return (
    <div>
      <div>
        <Header></Header>
        <Shop></Shop>
      </div>
      <div>
        <Choose></Choose>
      </div>
    </div>
  );
};

export default Home;
