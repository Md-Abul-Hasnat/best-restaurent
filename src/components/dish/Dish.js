import React from "react";
import "./dish.css";

const Dish = (props) => {
  return (
    <section className="dish">
      <h3 className="dish-title"> {props.data.title} </h3>
      <p> {props.data.text} </p>
    </section>
  );
};

export default Dish;
