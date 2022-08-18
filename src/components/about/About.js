import React from "react";
import "./about.css";
import img5 from "../../img/img5.jpg";
import img2 from "../../img/img2.jpg";
import img3 from "../../img/img3.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about">
      <div className="about-header">
        <h3>ABOUT OUR RESTAURANT</h3>
        <h1>
          Exclusive restaurant in <span>Bangladesh</span> , the ultimate way to
          get amazing food from the best chefs in the city. Great atmosphere
          included.
        </h1>
      </div>
      <div className="about-content">
        <img src={img5} alt="dish" />
        <div className="about-content-text">
          <h3>Tasty</h3>
          <h2>Strange story of the emergence of healthy food</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            aliquam ratione dolor doloribus facere labore quidem quis aliquid
            vel quibusdam.
          </p>
          <Link className="about-read-more" to="/about">
            READ MORE
          </Link>
        </div>
        <img src={img2} alt="dish" />
        <div className="about-content-text">
          <h3>Yummy</h3>
          <h2>Healthy food in social networks, with us interesting</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            aliquam ratione dolor doloribus facere labore quidem quis aliquid .
          </p>
          <Link className="about-read-more" to="/about">
            READ MORE
          </Link>
        </div>
        <img src={img3} alt="dish" />
        <div className="about-content-text">
          <h3>Spicy</h3>
          <h2>Only the best food, the best musicians the best guests</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            aliquam ratione dolor doloribus facere labore quidem quis .
          </p>
          <Link className="about-read-more" to="/about">
            READ MORE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
