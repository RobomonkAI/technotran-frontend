"use client";
import React from "react";
import { Fab } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import { motion } from "framer-motion";

const PhoneBtn = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.a
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.7 }} // Adjust duration as needed
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: "10000",
      }}
      href="tel:+91 9000325936"
    >
      <Fab
        color="success"
        aria-label="chat"
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          backgroundColor: "#25D366",
        }}
      >
        <PhoneIcon style={{ fill: "white", fontSize: "2rem" }} />
      </Fab>
    </motion.a>
  );
};

export default PhoneBtn;
