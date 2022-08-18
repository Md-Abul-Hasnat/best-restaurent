import React from "react";
import "./footer.css";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-main">
        <div className="footer-left">
          <div className="footer-info">
            <i class="fa-solid fa-location-dot"></i>
            <p>C-Block , Uposhohor , Sylhet</p>
          </div>
          <div className="footer-info">
            <i class="fa-solid fa-phone"></i>
            <p>012345678</p>
          </div>
          <div className="footer-info">
            <i class="fa-solid fa-envelope"></i>
            <p>webdevhasnat@gmail. com</p>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-about">
            <h3>About our restaurant</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              iusto itaque fuga repellendus non possimus quidem hic quia harum
              reprehenderit!
            </p>
            <div className="footer-socials">
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-linkedin-in"></i>
              <i class="fa-brands fa-instagram"></i>
              <Link className="go-up" to="hero">
                <i class="fa-solid fa-circle-up"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <small className="copywrite">
        © All rights reserved by WebDevHasnat | 2022 | Sylhet.
      </small>
    </section>
  );
};

export default Footer;
