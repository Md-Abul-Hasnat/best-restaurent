import React from "react";
import "./statistics.css";
import fish from "../../img/fish.jpg";
import chicken from "../../img/chicken-leg.jpg";
import rice from "../../img/rice.jpg";

const Statistics = () => {
  return (
    <section className="statistics">
      <div className="statistics-main">
        <div className="statistics-left">
          <article>
            <img src={chicken} alt="chicken" />
            <h1>800 +</h1>
            <h2>PEACE OF CHICKEN</h2>
          </article>
          <article>
            <img src={rice} alt="rice" />
            <h1>1000 +</h1>
            <h2>PLATE OF RICE</h2>
          </article>
          <article>
            <img src={fish} alt="fish" />
            <h1>400 +</h1>
            <h2>PEACE OF FISH</h2>
          </article>
        </div>
        <div className="statistics-right">
          <h1>WE COOK EVERYDAY</h1>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
