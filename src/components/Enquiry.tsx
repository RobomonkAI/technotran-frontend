"use client";

import React, { useState } from "react";
import styles from "../styles/Enquiry.page.module.css";
import { motion } from "framer-motion";
import SendIcon from "@mui/icons-material/Send";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

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

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form submitted:", formData);
  };

  return (
    <>
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

        <button
          type="submit"
          className={`${styles.submitButton} quicksand-text`}
        >
          Submit
        </button>
      </form>
      <div className={styles.btnContainer}>
        <motion.a
          variants={headingVariants}
          viewport={{ once: false, amount: 0.4 }}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className={styles.button}
          href="tel:+91 9000325936"
        >
          <PhoneInTalkIcon sx={{ fontSize: "20px", fill: "white" }} /> Enquire
        </motion.a>
        <motion.div
          variants={headingVariants}
          viewport={{ once: false, amount: 0.4 }}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          className={styles.button}
          onClick={() => (window.location.href = "mailto:info@technotran.in")}
          style={{ cursor: "pointer" }} // Ensures it's clickable
        >
          <SendIcon sx={{ fontSize: "20px", fill: "white" }} />
          Email
        </motion.div>
      </div>
    </>
  );
};

export default EnquiryForm;
