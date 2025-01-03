"use client";

import React, { useState } from "react";
import styles from "./DSEnquiry.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    designation: "",
    category: "",
    city: "",
    contact: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form submitted:", formData);
  };

  return (
    <form
      id="Design-Services-Enquiry"
      onSubmit={handleSubmit}
      className={styles.formContainer}
    >
      <div className={styles.formGroup}>
        <label className="quicksand-text" htmlFor="fullName">
          Your Full Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label className="quicksand-text" htmlFor="designation">
          Your Designation
        </label>
        <input
          type="text"
          id="designation"
          name="designation"
          value={formData.designation}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label className="quicksand-text" htmlFor="category">
          Service
        </label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          required
        >
          <option value="" disabled>
            Choose one
          </option>
          <option value="Embedded software Development">
            Embedded software Development
          </option>
          <option value="IOT (internet of things)">
            IOT (internet of things)
          </option>
          <option value="Robotic Kit Manufacturing">
            Robotic Kit Manufacturing
          </option>
          <option value="PCB Design & Fabrication">
            PCB Design & Fabrication
          </option>
          <option value="3D-Printing">3D-Printing</option>
          <option value="Android / IOS App development">
            Android / IOS App development
          </option>
          <option value="Website development">Website development</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label className="quicksand-text" htmlFor="city">
          Your City
        </label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label className="quicksand-text" htmlFor="contact">
          Your Contact Number
        </label>
        <input
          type="tel"
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label className="quicksand-text" htmlFor="email">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label className="quicksand-text" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={2}
          value={formData.message}
          onChange={handleInputChange}
          required
        ></textarea>
      </div>

      <button type="submit" className={`${styles.submitButton} quicksand-text`}>
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
