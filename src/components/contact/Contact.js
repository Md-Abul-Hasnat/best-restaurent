import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <h2>CONTACT</h2>
      <h1>Get in touch</h1>
      <form
        action="https://formspree.io/f/mzbwbvbw"
        method="POST"
        className="contact-main"
      >
        <input type="text" name="Name" placeholder="Your name" required />{" "}
        <br />
        <input type="email" name="Email" placeholder="Your email" required />
        <br />
        <textarea
          rows="5"
          name="Message"
          placeholder="Your message"
          required
        ></textarea>
        <div className="checbox">
          <input type="checkbox" required />
          <small>I accept the term's of services</small> <br />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
};

export default Contact;
