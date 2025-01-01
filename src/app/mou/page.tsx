"use client";

import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import NavBar from "@/sections/NavBar";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import PhoneBtn from "@/components/PhoneBtn";
import FooterMain from "@/sections/FooterMain";
import { motion } from "framer-motion";

const MOUPage = () => {
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
    <main id="MOU Page">
      <NavBar />
      <section
        id="MOU Landing Img"
        className={styles.jobOrientedCoursesMainContainer}
      >
        <Image
          src="/images/mou.png"
          alt="MOU Landing Img"
          height={700}
          width={1000}
          priority
          className={styles.jobOrientedCoursesLandingImg}
        />
      </section>
      <section id="MOU Landing Section">
        <div className={styles.sectionOne}>
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={headingVariants}
            viewport={{ once: false, amount: 0.2 }}
            className={`${styles.subTitle} cinzel-text`}
          >
            MOU
          </motion.h2>
          <motion.h3
            initial="hidden"
            whileInView="visible"
            variants={headingVariants}
            viewport={{ once: false, amount: 0.2 }}
            className={`${styles.sectionTxt} quicksand-text`}
          >
            {`Technotran is committed to fostering collaborative partnerships with organizations that share our vision of advancing technology education and innovation. Our Memorandum of Understanding (MOU) outlines the terms and conditions of collaboration between Technotran and partnering entities, establishing a framework for cooperation and support in achieving shared objectives.`}
          </motion.h3>
        </div>
      </section>
      <FooterMain />
      <WhatsAppBtn />
      <PhoneBtn />
    </main>
  );
};

export default MOUPage;
