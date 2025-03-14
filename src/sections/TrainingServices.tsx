"use client";

import React, { useEffect, useState } from "react";
import styles from "../styles/TrainingServices.module.css";
import { trainingServicesData } from "@/utils/helpers";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const TrainingServices = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false); // Track if the app is running on the client
  useEffect(() => {
    // Only run this code on the client side
    console.log(isClient);
    setIsClient(true);
  }, []);

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
  //   const cardVariants = {
  //     hidden: { opacity: 0, y: 50 },
  //     visible: {
  //       opacity: 1,
  //       y: 0,
  //       transition: {
  //         duration: 0.3,
  //         ease: "easeInOut",
  //       },
  //     },
  //   };

  const handleOnClick = (type: string) => {
    if (isClient) {
      if (type === "Internships") {
        // Opens the URL in a new tab
        if (typeof window !== "undefined") {
          window.open("https://internships.technotran.in/", "_blank");
        }
      } else if (type === "Workshops") {
        router.push("/workshops");
      } else {
        router.push("/job-oriented-courses");
      }
    }
  };

  return (
    <motion.section
      id="Training Solutions"
      className={styles.trainingServicesMainContainer}
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <motion.h2
        className={`${styles.trainingServicesTitle} josefin-sans-text`}
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
        Training Solutions
      </motion.h2>

      <div className={styles.cardsMainContainer}>
        {trainingServicesData.map((item, index) => (
          <div
            onClick={() => handleOnClick(item.type)}
            key={index}
            className={styles.cardContainer}
          >
            <Image
              priority
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
