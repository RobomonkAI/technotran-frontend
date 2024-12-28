"use client";

import React from "react";
import styles from "../styles/TrainingServices.module.css";
import { trainingServicesData } from "@/utils/helpers";
import Image from "next/image";
import { motion } from "framer-motion";
import { headContentAnimation } from "@/utils/motion";

const TrainingServices = () => {
  // Fade-In animation for the entire section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  // Fade-In animation for each card with delay
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      id="Training Services"
      className={styles.trainingServicesMainContainer}
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.h2
        className={`${styles.trainingServicesTitle} cinzel-text`}
        initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and moved down
        animate={{ opacity: 1, y: 0 }} // When it comes into view, animate to full opacity
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 100,
          duration: 0.6,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeInOut",
          },
        }} // Trigger animation while element is in view
        viewport={{ once: false, amount: 0.3 }} // Ensure the animation can repeat
      >
        Our Training Services
      </motion.h2>

      <div className={styles.cardsMainContainer}>
        {trainingServicesData.map((item, index) => (
          <div key={index} className={styles.cardContainer}>
            <Image
              src={item.imgSrc}
              alt={`Training Services img${item.id}`}
              height={500}
              width={500}
              className={styles.cardImg}
            />
            <div className={styles.cardSubContainer}>
              <h2 className={`${styles.cardTxt} quicksand-text`}>
                {item.desc}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default TrainingServices;
