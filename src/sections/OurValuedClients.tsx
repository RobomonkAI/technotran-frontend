"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles/OurValuedClients.module.css";
import { valuedClientsData } from "@/utils/helpers";

const OurValuedClients = () => {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // Staggered animation
        duration: 0.3,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      id="Our Valued Clients"
      className={styles.ourValuedClientsContainer}
    >
      <div className={styles.ourValuedClientsSubContainer}>
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          className={`${styles.title} cinzel-text`}
        >
          Our Valued Clients
        </motion.h2>
        <div className={styles.ourValuedClientsContentContainer}>
          {valuedClientsData.map((item, index) => (
            <motion.div
              className={styles.cardContainer}
              key={index}
              custom={index} // Pass index for staggered effect
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className={styles.cardImgContainer}>
                <Image
                  src={item.imgSrc}
                  height={300}
                  width={300}
                  alt={`valued clients img${item.id}`}
                  className={styles.cardImg}
                />
              </div>
              <div className={styles.cardSubContainer}>
                <h2 className={`${styles.cardTxt} quicksand-text`}>
                  {item.name}
                </h2>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default OurValuedClients;
