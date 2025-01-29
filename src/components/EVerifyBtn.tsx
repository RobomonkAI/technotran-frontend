"use client";
import React, { useEffect, useState } from "react";
import { Fab, Tooltip } from "@mui/material";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import { motion } from "framer-motion";

const EVerifyBtn = () => {
  const [isClient, setIsClient] = useState(false); // Track if the app is running on the client
  useEffect(() => {
    // Only run this code on the client side
    setIsClient(true);
  }, []);

  const handleBtnClick = () => {
    if (isClient && typeof window !== "undefined") {
      window.open("https://e-verify.technotran.in", "_blank");
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
        bottom: "100px",
        right: "20px",
        zIndex: "10000",
      }}
    >
      <Tooltip
        title={
          <span
            style={{ fontFamily: "Montserrat, Sans-serif", color: "white" }}
          >
            E - Verify Portal
          </span>
        }
        arrow
        placement="left"
      >
        <Fab
          color="success"
          aria-label="chat"
          onClick={handleBtnClick}
          sx={{ backgroundColor: "royalblue" }}
        >
          <VerifiedUserOutlinedIcon
            color="action"
            style={{ fill: "white", fontSize: "2rem" }}
          />
        </Fab>
      </Tooltip>
    </motion.div>
  );
};

export default EVerifyBtn;
