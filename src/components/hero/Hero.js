import React from "react";
import "./hero.css";
import logo from "../../img/logo.png";

const Hero = () => {
  return (
    <header id="hero" className="hero">
      <div className="hero-main">
        <img src={logo} alt="logo" />
        <h1>One Step to Making a Good Start</h1>
        <p>
          A restaurant is known as a place where cooked food is sold to the
          public, and where people sit down to eat it. It is also a place where
          people go to enjoy the time and to eat a meal.A restaurant is known as
          a place where cooked food is sold to the public, and where people sit
          down to eat it. It is also a place where people go to enjoy the time
          and to eat a meal.
        </p>
      </div>

      <i class="fa-solid fa-caret-down"></i>
    </header>
  );
};

export default Hero;
