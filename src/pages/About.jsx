import React from "react";
import { Link } from "react-router-dom";
import Counter from "../components/counter";
import {
  FiInstagram,
  FiLinkedin,
  FiFacebook,
  FiAward,
  FiCheckCircle,
} from "react-icons/fi";
import "./About.css";

const values = [
  {
    title: "Integrity",
    desc: "We do what's right for our clients, even when no one is watching.",
  },
  {
    title: "Quality",
    desc: "We build every project with attention to detail and excellence.",
  },
  {
    title: "Client Satisfaction",
    desc: "Your success is our biggest achievement.",
  },
  {
    title: "Reliability",
    desc: "We deliver projects on time with complete professionalism.",
  },
  {
    title: "Innovation",
    desc: "Using modern technologies to create future-ready solutions.",
  },
  {
    title: "Collaboration",
    desc: "We work closely with every client to achieve shared goals.",
  },
];

const certificates = [
  {
    title: "Web Development Certificate",
    issuer: "Arfa Karim Technology Incubator (AKTI)",
  },
  {
    title: "Digital Marketing Certificate",
    issuer: "Arfa Karim Technology Incubator (AKTI)",
  },
  {
    title: "International Certificate in Web Development",
    issuer: "IQA Australia",
  },
  {
    title: "International Certificate in Digital Media Marketing",
    issuer: "IQA Australia",
  },
];

const technologies = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "WordPress",
  "Shopify",
  "SEO",
  "Canva",
];

export default function About() {
  const ref = null;
  const inView = true;

  return (
    <>
      {/* founder section */}

      <section className="section founder-section">
        <div className="container founder-grid">
          <div className="founder-image">
            <img src="#" alt="Ayesha Shahzad" />
          </div>

          <div className="founder-content">
            <span className="eyebrow">Meet Our Founder</span>

            <h2>Ayesha Shahzad</h2>

            <h4>Founder & CEO — Mernexa Web Solutions</h4>

            <p>
              Mernexa Web Solutions was founded with one clear mission — helping
              businesses establish a modern, professional and results-driven
              online presence.
            </p>

            <p>
              I specialize in Full Stack Web Development, Digital Marketing,
              Graphic Designing, Professional Video Editing and Brand Strategy.
            </p>

            <div className="founder-badges">
              <span>
                <FiCheckCircle />
                Full Stack Developer
              </span>

              <span>
                <FiCheckCircle />
                Digital Marketer
              </span>

              <span>
                <FiCheckCircle />
                Graphic Designer
              </span>

              <span>
                <FiCheckCircle />
                Video Editor
              </span>
            </div>

            <div className="about-socials">
              <a href="https://www.instagram.com/mernexa_web_solutions?igsh=MW5wdGh0Nzl0bTNlMA==">
                <FiInstagram />
              </a>

              <a href="#">
                <FiLinkedin />
              </a>

              <a href="www.facebook.com/share/193HdXJAuo">
                <FiFacebook />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* stats section */}

      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <h2>
                <Counter end={15} />+
              </h2>
              <p>Projects Completed</p>
            </div>

            <div className="stat-card">
              <h2>
                <Counter end={4} />
              </h2>
              <p>International Certificates</p>
            </div>

            <div className="stat-card">
              <h2>
                <Counter end={100} />%
              </h2>
              <p>Client Satisfaction</p>
            </div>

            <div className="stat-card">
              <h2>
                <Counter end={24} />
                /7
              </h2>
              <p>Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* mission and vision */}

      <section className="section mission-section">
        <div className="container grid-2">
          <div className="card mission-card">
            <h3>Our Mission</h3>

            <p>
              To empower startups, entrepreneurs and businesses with modern
              websites, digital marketing and creative branding solutions that
              generate real business growth.
            </p>
          </div>

          <div className="card mission-card">
            <h3>Our Vision</h3>

            <p>
              To become one of Pakistan's most trusted digital agencies by
              delivering innovation, quality and long-term client relationships.
            </p>
          </div>
        </div>
      </section>

      {/* why choose us? */}

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why Choose Us</span>

            <h2>
              Why Businesses Trust
              <br />
              Mernexa?
            </h2>
          </div>

          <div className="grid-3">
            <div className="card choose-card">
              <h4>Modern Design</h4>
              <p>Beautiful responsive UI with premium user experience.</p>
            </div>

            <div className="card choose-card">
              <h4>Fast Delivery</h4>
              <p>Projects delivered on time without compromising quality.</p>
            </div>

            <div className="card choose-card">
              <h4>AI-Powered Solutions</h4>
              <p>
                We use AI-driven tools and technologies to create smarter and
                more efficient digital solutions.
              </p>
            </div>

            <div className="card choose-card">
              <h4>Affordable Pricing</h4>
              <p>Professional services at competitive pricing.</p>
            </div>

            <div className="card choose-card">
              <h4>Latest Technologies</h4>
              <p>React, Node.js, MongoDB, Shopify & WordPress.</p>
            </div>

            <div className="card choose-card">
              <h4>Long-Term Support</h4>
              <p>We continue supporting clients after project completion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* our values */}

      <section className="section values-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">What Drives Us</span>

            <h2>Our Core Values</h2>
          </div>

          <div className="grid-3">
            {values.map((item) => (
              <div className="card value-card" key={item.title}>
                <h4>{item.title}</h4>

                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* technologies */}

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Technologies</span>

            <h2>Technologies We Work With</h2>
          </div>

          <div className="tech-grid">
            {technologies.map((tech) => (
              <div className="tech-card" key={tech}>
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* timeline */}

      <section className="section timeline-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our Journey</span>

            <h2>Milestones</h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <h4>2024</h4>
                <p>
                  Founded Mernexa Web Solutions with a mission to empower
                  businesses through technology.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <h4>AKTI Certifications</h4>
                <p>
                  Successfully completed Web Development and Digital Marketing
                  certifications from Arfa Karim Technology Incubator.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <h4>IQA Australia</h4>
                <p>
                  Achieved International Certifications in Web Development and
                  Digital Media Marketing.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <h4>Today</h4>
                <p>
                  Helping startups, brands and businesses build professional
                  websites and grow digitally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* certificates */}

      <section className="section certs-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Credentials</span>

            <h2>Professional Certifications</h2>
          </div>

          <div className="grid-2">
            {certificates.map((certificate) => (
              <div className="card cert-card" key={certificate.title}>
                <span className="cert-icon">🏆</span>

                <div>
                  <h4>{certificate.title}</h4>

                  <p>{certificate.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ready to grow */}

      <section className="section about-cta">
        <span className="eyebrow">Let's Build Together</span>
        <div className="container about-cta-inner">
          <h2>Ready to Grow Your Business?</h2>

          <p>
            Whether you need a modern website, digital marketing, branding or
            creative content, Mernexa Web Solutions is here to help you achieve
            your goals.
          </p>

          <Link to="/contact" className="btn btn-primary">
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  );
}
