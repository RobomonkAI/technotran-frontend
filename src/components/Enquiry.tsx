"use client";

import React, { useState } from "react";
import styles from "../styles/Enquiry.page.module.css";
import { motion } from "framer-motion";
import SendIcon from "@mui/icons-material/Send";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import emailjs from "emailjs-com";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

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

  // Snackbar State
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success", // "success" or "error"
  });

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("Form submitted:", formData);

    // Ensure environment variables are defined, otherwise throw an error
    const service_id = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID;
    const template_id = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID;
    const public_key = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY;

    if (!service_id || !template_id || !public_key) {
      console.error("Missing EmailJS environment variables.");
      setSnackbar({
        open: true,
        message: "Configuration error. Please try again later.",
        severity: "error",
      });
      return;
    }

    try {
      await emailjs
        .send(
          service_id, // Service ID
          template_id, // Template ID
          {
            fullName: formData.fullName,
            college: formData.college,
            occupation: formData.occupation,
            city: formData.city,
            contact: formData.contact,
            email: formData.email,
            message: formData.message,
          },
          public_key // Public Key
        )
        .then(
          (response) => {
            console.log(response.text);
            setSnackbar({
              open: true,
              message: "Email sent successfully!",
              severity: "success",
            });
            setFormData({
              fullName: formData.fullName,
              college: formData.college,
              occupation: formData.occupation,
              city: formData.city,
              contact: formData.contact,
              email: formData.email,
              message: formData.message,
            });
          },
          (error) => {
            console.log("Error:", error);
            setSnackbar({
              open: true,
              message: "Failed to send email. Please try again.",
              severity: "error",
            });
          }
        );

      setFormData({
        fullName: "",
        college: "",
        occupation: "",
        city: "",
        contact: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error("EmailJS Error:", err);
    }
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
            id="college"
            name="college"
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
            id="occupation"
            name="occupation"
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
      {/* Snackbar for Notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbar.severity as "success" | "error"}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default EnquiryForm;
