import React, { useState } from "react";
import {
  FiPhone,
  FiMapPin,
  FiMail,
  FiClock,
  FiSend,
  FiMessageCircle,
  FiCheckCircle,
} from "react-icons/fi";
import "./Contact.css";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqpkzabj";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const err = {};

    if (!form.fullName.trim()) err.fullName = "Full Name is required.";

    if (!form.email.trim()) err.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      err.email = "Please enter a valid email.";

    if (!form.message.trim()) err.message = "Please enter your message.";

    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const err = validate();
    setErrors(err);

    if (Object.keys(err).length > 0) return;

    setSubmitting(true);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus({
          type: "success",
          message: "Thanks for reaching out! We'll get back to you soon.",
        });

        setForm(initialForm);
      } else {
        const data = await res.json().catch(() => null);

        setStatus({
          type: "error",
          message:
            data?.errors?.map((e) => e.message).join(", ") ||
            "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="contact-section section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Let's Build Something Amazing</span>

          <h2>Contact Us</h2>

          <p className="contact-subtitle">
            Have a project in mind? We'd love to hear from you. Fill out the
            form below and our team will get back to you soon.
          </p>
        </div>

        <div className="contact-grid">
          {/* FORM */}

          <div className="card contact-form-card">
            {status.message && (
              <div
                className={`alert ${
                  status.type === "success" ? "alert-success" : "alert-error"
                }`}
              >
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name *</label>

                <input
                  className={`form-control ${errors.fullName ? "error" : ""}`}
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                />

                {errors.fullName && <small>{errors.fullName}</small>}
              </div>

              <div className="grid-2">
                <div className="form-group">
                  <label>Email *</label>

                  <input
                    className={`form-control ${errors.email ? "error" : ""}`}
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="email@gmail.com"
                  />

                  {errors.email && <small>{errors.email}</small>}
                </div>

                <div className="form-group">
                  <label>Phone</label>

                  <input
                    className="form-control"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+92 300 1234567"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Service</label>

                <select
                  className="form-control"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                >
                  <option value="">Select Service</option>
                  <option>Web Development</option>
                  <option>WordPress Development</option>
                  <option>Shopify Development</option>
                  <option>SEO</option>
                  <option>Digital Marketing</option>
                  <option>Graphic Designing</option>
                  <option>Video Editing</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Message *</label>

                <textarea
                  rows="6"
                  className={`form-control ${errors.message ? "error" : ""}`}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                />

                {errors.message && <small>{errors.message}</small>}
              </div>

              <button
                className="btn btn-primary btn-block"
                disabled={submitting}
              >
                {submitting ? "Sending..." : "Send Message"}

                <FiSend />
              </button>
            </form>
          </div>

          {/* RIGHT SIDE */}

          <div className="contact-info">
            <div className="card info-item">
              <FiPhone className="info-icon" />

              <div>
                <h4>Phone Number</h4>
                <p>+92 316 4297755</p>
              </div>
            </div>

            <div className="card info-item">
              <FiMail className="info-icon" />

              <div>
                <h4>Email</h4>

                <p>mernexawebsolutions@gmail.com</p>
              </div>
            </div>

            <div className="card info-item">
              <FiMapPin className="info-icon" />

              <div>
                <h4>Office</h4>

                <p>Arfa Software Technology Park, Lahore</p>
              </div>
            </div>

            <div className="card info-item">
              <FiClock className="info-icon" />

              <div>
                <h4>Working Hours</h4>

                <p>Monday - Saturday | 10:00 AM - 7:00 PM</p>
              </div>
            </div>

            <a
              href="https://wa.me/923164297755"
              className="btn btn-outline whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiMessageCircle />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
