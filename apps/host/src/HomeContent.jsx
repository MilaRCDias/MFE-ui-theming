import React from "react";
import Button from "ui_lib/Button";


const HomeContent = () => (
  <div className="container">
    <a href="/product">
      <p> link to PDP</p>
    </a>
    <a href="/product-list">
      <p> link to PLP</p>
    </a>
    <Button> button host</Button>
  </div>
);


export default HomeContent;