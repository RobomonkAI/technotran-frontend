"use client";

import React, { useState } from "react";
import styles from "../styles/JCEnquiry.module.css";

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
      id="Job-Oriented-Courses-Enquiry"
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
          Course
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
          <option value="Full Stack Development">Full Stack Development</option>
          <option value="Data Science">Data Science</option>
          <option value="Embedded Systems">Embedded Systems</option>
          <option value="VLSI Design">VLSI Design</option>
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
