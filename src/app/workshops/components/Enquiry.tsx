"use client";

import React, { useState } from "react";
import styles from "../styles/Enquiry.module.css";

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
      id="Workshops-Enquiry"
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
          Workshop
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
          <option value="PCB Design & Fabrication">
            PCB Design & Fabrication
          </option>
          <option value="Data Science">Data Science</option>
          <option value="Rocker Bogie 6 wheel Robot">
            Rocker Bogie 6 wheel Robot
          </option>
          <option value="IOT">IOT</option>
          <option value="Raspberry pi Pico with Python">
            Raspberry pi Pico with Python
          </option>
          <option value="Artificial Intelligence">
            Artificial Intelligence
          </option>
          <option value="Biped Robitics">Biped Robitics</option>
          <option value="Auto - Bots">Auto - Bots</option>
          <option value="Embedded Systems with AI">
            Embedded Systems with AI
          </option>
          <option value="Machine Learning">Machine Learning</option>
          <option value="Accele - Robotics">Accele - Robotics</option>
          <option value="IOT with Raspberry pi">IOT with Raspberry pi</option>
          <option value="Quadcopter">Quadcopter</option>
          <option value="IOT with Nodemcu">IOT with Nodemcu</option>
          <option value="3D - Printing">3D - Printing</option>
          <option value="Home Automation">Home Automation</option>
          <option value="Hands-on Ardunio">Hands-on Ardunio</option>
          <option value="Robotic ARM">Robotic ARM</option>
          <option value="Bluethooth Robotics with Python">
            Bluethooth Robotics with Python
          </option>
          <option value="Industrial IOT with ESP32">
            Industrial IOT with ESP32
          </option>
          <option value="Embedded wireless Communications">
            Embedded wireless Communications
          </option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label className="quicksand-text" htmlFor="city">
          Your College Name
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
