"use client";
import React from "react";
import { Fab } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion } from "framer-motion";

const WhatsAppBtn = () => {
  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined") {
      window.open("https://wa.me/919000325936", "_blank");
    }
  };

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 0.7 }}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: "10000",
      }}
    >
      <Fab
        color="success"
        aria-label="chat"
        onClick={handleWhatsAppClick}
        sx={{ backgroundColor: "#25D366" }}
      >
        <WhatsAppIcon
          color="action"
          style={{ fill: "white", fontSize: "2rem" }}
        />
      </Fab>
    </motion.div>
  );
};

export default WhatsAppBtn;
