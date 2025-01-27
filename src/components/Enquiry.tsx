"use client";

import React, { useState } from "react";
import styles from "../styles/Enquiry.page.module.css";

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    college: "",
    occupation: "",
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
      id="Enquiry Form"
      onSubmit={handleSubmit}
      className={styles.formContainer}
    >
      <div className={styles.formGroup}>
        <label className="quicksand-text" htmlFor="fullName">
          Full Name
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
        <label className="quicksand-text" htmlFor="fullName">
          College
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.college}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label className="quicksand-text" htmlFor="fullName">
          Occupation
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.occupation}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label className="quicksand-text" htmlFor="city">
          City
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
          Contact Number
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
          Email
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

      <div className={`${styles.formGroup} ${styles.fullWidth}`}>
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

export default EnquiryForm;
