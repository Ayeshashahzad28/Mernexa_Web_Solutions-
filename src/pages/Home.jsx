import React from "react";
import { Link } from "react-router-dom";
import {
  FiCode,
  FiTrendingUp,
  FiVideo,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";
import "./Home.css";

const services = [
  {
    icon: <FiCode />,
    title: "Web Development",
    desc: "Fast, secure, and scalable websites built with React, Node.js and MongoDB.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Digital Marketing",
    desc: "Meta & Google Ads, plus social media management that brings real results.",
  },
  {
    icon: <FiVideo />,
    title: "Video & Graphic Design",
    desc: "Scroll-stopping reels, ads, and brand visuals that get noticed.",
  },
];

const reviews = [
  {
    name: "Ayesha K.",
    text: "Mernexa redesigned our website and our leads doubled in two months.",
  },
  {
    name: "Hamza R.",
    text: "Professional team, clear communication, and on-time delivery every time.",
  },
  {
    name: "Sara M.",
    text: "Our Instagram engagement tripled after they took over our social pages.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <span className="eyebrow">Mernexa Web Solutions</span>
          <h1 className="hero-title">
            We build websites and digital strategies{" "}
            <span className="text-accent">that grow your brand.</span>
          </h1>
          <p className="hero-subtitle">
            From web development to digital marketing, video editing and graphic
            design — Mernexa is the all-in-one partner for businesses that want
            to win online.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">
              Get Started <FiArrowRight />
            </Link>
            <Link to="/services" className="btn btn-primary">
              Our Services <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <section className="section services-preview">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What we offer</span>
            <h2>Services built around your growth</h2>
          </div>
          <div className="grid-3">
            {services.map((s) => (
              <div className="card service-card" key={s.title}>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link to="/services" className="learn-more">
                  Learn more <FiArrowRight />
                </Link>
              </div>
            ))}
          </div>
          <div className="services-cta">
            <Link to="/services" className="btn btn-outline">
              View all services
            </Link>
          </div>
        </div>
      </section>

      <section className="section promise-section">
        <div className="container promise-inner">
          <FiCheckCircle size={36} />
          <h2>On-time delivery, guaranteed.</h2>
          <p>
            We respect deadlines as much as we respect quality — every project,
            every time.
          </p>
        </div>
      </section>

      <section className="section reviews-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Client Reviews</span>
            <h2>What our clients say</h2>
          </div>
          <div className="grid-3">
            {reviews.map((r) => (
              <div className="card review-card" key={r.name}>
                <div className="review-stars">★★★★★</div>
                <p>"{r.text}"</p>
                <span className="review-name">{r.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container cta-inner">
          <h2>Ready to grow your brand with Mernexa?</h2>
          <p>Get a free consultation and a custom quote for your project.</p>
          <Link to="/contact" className="btn btn-primary">
            Get Consultation <FiArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
