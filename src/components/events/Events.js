import React from "react";
import { Link } from "react-router-dom";
import "./events.css";

const Events = () => {
  return (
    <section className="events">
      <h2>Events</h2>
      <h1>Events of Healthy Food</h1>
      <div className="events-main">
        <article>
          <h3>25</h3>
          <h4>June</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut .
          </p>
        </article>

        <article>
          <h3>15</h3>
          <h4>August</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            voluptatibus cumque, nobis et similique corporis nemo excepturi
            tenetur, laudantium natus voluptates dolorem, ipsa quam dolor.
          </p>
        </article>

        <article>
          <h3>9</h3>
          <h4>December</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            voluptatibus cumque, nobis et similique corporis nemo excepturi
            tenetur, laudantium natus voluptates dolorem, ipsa quam dolor.
          </p>
        </article>
      </div>
      <Link className="events-btn" to="/events">
        READ MORE
      </Link>
    </section>
  );
};

export default Events;
