import React, { useState } from "react";
import logo from "../assets/Mernexa.png";
import { Link } from "react-router-dom";
import {
  FiInstagram,
  FiLinkedin,
  FiFacebook,
  FiMapPin,
  FiPhone,
  FiMail,
} from "react-icons/fi";
import "./Footer.css";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) return;

    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="footer">
      {/* Top Section */}

      <div className="container footer-top">
        {/* Brand */}

        <div className="footer-brand">
          <div className="navbar-logo">
            <img src={logo} alt="Mernexa Logo" className="footer-logo" />

            <span className="logo-text">Mernexa Web Solutions</span>
          </div>

          <p className="footer-about">
            We create modern websites, digital marketing campaigns, graphic
            designs and engaging videos that help businesses grow online.
          </p>

          <div className="footer-socials">
            <a href="https://www.instagram.com/mernexa_web_solutions?igsh=MW5wdGh0Nzl0bTNlMA==">
              <FiInstagram />
            </a>

            <a href="#">
              <FiLinkedin />
            </a> 

            <a href="https://www.facebook.com/share/193HdXJAuo">
              <FiFacebook />
            </a>
          </div>
        </div>

        {/* Quick Links */}

        <div className="footer-col">
          <h3>Quick Links</h3>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
        </div>

        {/* Services */}

        <div className="footer-col">
          <h3>Services</h3>
            <Link to="/services">Web Development</Link>
            <Link to="/services">Digital Marketing</Link>
            <Link to="/services">Graphic Design</Link>
            <Link to="/services">Video Editing</Link>
        </div>

        {/* Contact */}

        <div className="footer-col">
          <h3>Contact Us</h3>

          <span>
            <FiMapPin />
            Lahore, Pakistan
          </span>

          <span>
            <FiPhone />
            +92 316 4297755
          </span>

          <span>
            <FiMail />
            mernexawebsolutions@gmail.com 
          </span>
        </div>
      </div>

      {/* Newsletter */}

      <div className="container">
        <div className="footer-newsletter">
          <h2>Subscribe to our newsletter</h2>

          <p>Get the latest updates and insights delivered to your inbox.</p>

          {subscribed ? (
            <p className="success-msg">Thank you for subscribing</p>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button type="submit">Subscribe</button>
            </form>
          )}
        </div>
      </div>

      {/* Copyright */}

      <div className="footer-bottom">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Mernexa Web Solutions. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
