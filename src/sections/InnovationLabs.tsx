"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/InnovationLabsSection.module.css";

const InnovationLabsSection = () => {
  // Variants for animation
  const imageVariant = {
    hidden: { opacity: 0, x: -50 }, // Start off-screen to the left
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  const contentVariant = {
    hidden: { opacity: 0, x: 50 }, // Start off-screen to the right
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      id="Innovation Labs"
      className={styles.innovationLabsContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }} // Trigger animation when section is in the viewport
    >
      <div className={styles.innovationLabsSubContainer}>
        <motion.div
          className={styles.innovationLabsImgContainer}
          variants={imageVariant}
        >
          <Image
            src="https://github.com/CVSCharan/Technotran_Assets/blob/main/innovation-labs.png?raw=true"
            alt="Innovation Labs Img"
            className={styles.innovationLabsImg}
            height={700}
            width={700}
            priority
          />
        </motion.div>
        <motion.div
          className={styles.innovationLabsContentContainer}
          variants={contentVariant}
        >
          <h2 className={`${styles.innovationLabsTitle} cinzel-text`}>
            Innovation Labs
          </h2>
          <h3 className={`${styles.innovationLabsDesc} quicksand-text`}>
            Technotran specializes in providing comprehensive lab setup services
            for schools and colleges, ensuring that institutions can offer
            cutting-edge technology education to their students. Our services
            encompass the complete establishment of Robotics Labs, IoT Labs, and
            Embedded System Labs, including the provision of custom-designed
            robotics kits, student training, and ongoing support to ensure a
            seamless learning experience.
          </h3>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default InnovationLabsSection;
