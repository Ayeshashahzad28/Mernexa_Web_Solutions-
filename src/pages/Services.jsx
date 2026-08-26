import React from "react";
import { Link } from "react-router-dom";
import {
  FiCode,
  FiTrendingUp,
  FiShoppingBag,
  FiLayout,
  FiFilm,
  FiPenTool,
  FiVideo,
  FiCheck,
  FiArrowRight,
  FiCpu,
} from "react-icons/fi";
import "./Services.css";

const services = [
  {
    icon: <FiCode />,
    title: "Web Development",
    desc: "Modern, fast, and secure websites built with React, Node.js, and scalable backend systems.",
    features: [
      "Business websites",
      "MERN stack apps",
      "Landing pages",
      "Admin dashboards",
    ],
  },
  {
    icon: <FiTrendingUp />,
    title: "Digital Marketing",
    desc: "Growth-focused marketing campaigns that help your brand reach the right audience.",
    features: [
      "Meta Ads",
      "Google Ads",
      "Campaign strategy",
      "Lead generation",
    ],
  },
  {
    icon: <FiShoppingBag />,
    title: "E-Commerce Solutions",
    desc: "Professional online stores designed to convert visitors into paying customers.",
    features: [
      "Product pages",
      "Cart system",
      "Payment setup",
      "Order management",
    ],
  },
  {
    icon: <FiLayout />,
    title: "UI/UX Design",
    desc: "Clean, user-friendly interfaces that make your website easy and enjoyable to use.",
    features: [
      "Website layouts",
      "Wireframes",
      "Responsive design",
      "User experience improvement",
    ],
  },
  {
    icon: <FiFilm />,
    title: "Video Editing",
    desc: "High-quality reels, ads, and promotional videos for social media and brand campaigns.",
    features: [
      "Reels editing",
      "Ad creatives",
      "Motion graphics",
      "Brand videos",
    ],
  },
  {
    icon: <FiPenTool />,
    title: "Graphic Design",
    desc: "Creative visuals that make your brand look professional across every platform.",
    features: [
      "Social posts",
      "Ad banners",
      "Brand identity",
      "Marketing creatives",
    ],
  },
  {
    icon: <FiVideo />,
    title: "Ad Creatives",
    desc: "Create high-performing ad creatives using professional editing and AI-generated video content.",
    features: [
      "AI-generated videos",
      "Social media ad creatives",
      "Product promotional videos",
      "Video editing & motion graphics",
    ],
  },
  {
    icon: <FiCpu />,
    title: "AI-Powered Ad Creatives",
    desc: "Create intelligent, high-converting ad creatives using AI-generated visuals, videos, and creative automation.",
    features: [
      "AI-generated video ads",
      "AI-powered visuals",
      "AI product commercials",
      "Automated creative production",
    ],
  },
];

const whyChooseUs = [
  "Transparent pricing, no hidden costs",
  "Dedicated support throughout the project",
  "Modern tech stack built to scale",
  "On-time delivery, every time",
];

export default function Services() {
  return (
    <>
      <section className="section services-hero">
        <div className="container services-hero-inner">
          <span className="eyebrow">Our Services</span>
          <h1>Professional digital services for your business</h1>
          <p>
            From websites and online stores to marketing, design, SEO, and
            videos, Mernexa helps your brand grow with complete digital
            solutions.
          </p>
        </div>
      </section>

      <section className="section services-list-section">
        <div className="container">
          <div className="grid-3">
            {services.map((service) => (
              <div className="card service-detail-card" key={service.title}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>

                <ul className="feature-list">
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <FiCheck />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact" className="service-card-btn">
                  Contact Us <FiArrowRight />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section why-us-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why choose us</span>
            <h2>Built around your success</h2>
          </div>

          <div className="grid-2 why-grid">
            {whyChooseUs.map((item) => (
              <div className="why-item" key={item}>
                <FiCheck className="why-icon" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section services-cta-section">
        <div className="container services-cta-inner">
          <h2>Not sure which service fits your business?</h2>
          <p>
            Tell us about your goals and we'll recommend the right approach.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Talk to Us <FiArrowRight />
          </Link>
        </div>
      </section>
    </>
  );
}
