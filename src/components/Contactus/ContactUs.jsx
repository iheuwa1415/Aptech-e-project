// ContactUs.jsx

import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Message sent successfully!");

    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1 className="main-title">Share Your Insights</h1>

        <p className="description">
          Help us preserve the world's heritage through modern technology.
        </p>

        <h2 className="contact-title">CONTACT US</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          {/* FULL NAME */}
          <div className="form-group">
            <label>FULL NAME</label>

            <input
              type="text"
              name="fullName"
              placeholder="e.g. Dr. Alistair Thorne"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          {/* EMAIL */}
          <div className="form-group">
            <label>EMAIL ADDRESS</label>

            <input
              type="email"
              name="email"
              placeholder="heritage@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* SUBJECT */}
          <div className="form-group">
            <label>SUBJECT LINE</label>

            <input
              type="text"
              name="subject"
              placeholder="A brief summary of your message"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          {/* MESSAGE */}
          <div className="form-group">
            <label>MESSAGE</label>

            <textarea
              rows="5"
              name="message"
              placeholder="How can we help you?"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* BUTTON */}
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;