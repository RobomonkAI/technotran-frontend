"use client";

import NavBar from "@/sections/NavBar";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MouDataItem } from "@/utils/types";
import { mouData } from "@/utils/helpers";
import PhoneBtn from "@/components/PhoneBtn";
import WhatsAppBtn from "@/components/WhatsAppBtn";
import FooterMain from "@/sections/FooterMain";

const AboutUsPage = () => {
  const [imgSlideOne, setImgSlideOne] = useState<MouDataItem[]>([]);
  const [imgSlideTwo, setImgSlideTwo] = useState<MouDataItem[]>([]);
  const [currentBannerOneImage, setCurrentBannerOneImage] = useState(0);
  const [currentBannerTwoImage, setCurrentBannerTwoImage] = useState(0);

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

  useEffect(() => {
    const arrLen = mouData.length / 2;
    setImgSlideOne(mouData.slice(0, arrLen));
    setImgSlideTwo(mouData.slice(arrLen, mouData.length));

    const interval = setInterval(() => {
      setCurrentBannerOneImage((prev) => (prev + 1) % imgSlideOne.length); // Infinite loop for Banner One
      setCurrentBannerTwoImage((prev) => (prev + 1) % imgSlideTwo.length); // Infinite loop for Banner Two
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [mouData]);

  return (
    <main id="About Us Page">
      <NavBar />
      <div className={styles.mainBody}>
        <section
          id="About US Landing Img"
          className={styles.aboutUsMainContainer}
        >
          <Image
            src="/images/about-us-banner-image.png"
            alt="About Us Landing Img"
            height={700}
            width={1000}
            priority
            className={styles.aboutUsLandingImg}
          />
        </section>
        <section id="About Us Landing Section">
          <div className={styles.sectionOne}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              className={`${styles.subTitle} cinzel-text`}
            >
              About Us
            </motion.h2>
            <motion.h3
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: true, amount: 0.2 }}
              className={`${styles.sectionTxt} quicksand-text`}
            >
              Technotran, (an ISO 9001:2015 Certified Company), is a leading
              Educational Technology firm specializing in Embedded Systems, 3D
              Printing, Robotics, IoT, and Artificial Intelligence. We serve
              universities, colleges, and schools nationwide. Our unwavering
              commitment revolves around delivering top-tier services,
              encompassing DIY Robotic kit design, electronic product design,
              PCB Design, prototyping, and Manufacturing, all meticulously
              customized to precise specifications. Our ultimate mission is to
              empower both students and institutions with state-of-the-art
              technology solutions.
            </motion.h3>
            <Image
              src={
                "https://github.com/CVSCharan/Technotran_Assets/blob/main/About-us.png?raw=true"
              }
              alt={"About Us Img 1"}
              height={400}
              width={600}
              priority
              className={styles.imgOne}
            />
          </div>
        </section>
        <section id="Technotran About Us Content">
          <div className={styles.sectionOne}>
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <h2
                  style={{ color: "white" }}
                  className={`${styles.cardTitle} cinzel-text`}
                >
                  Mission
                </h2>
                <h3
                  style={{ color: "white" }}
                  className={`${styles.cardDesc} quicksand-text`}
                >
                  Technotran is driven by the mission of nurturing a skilled
                  workforce that complements the remarkable advancements
                  unfolding in our nation. Our commitment empowers us to
                  spearhead, promote, and disseminate educational reforms,
                  equipping individuals with the precise expertise and skills
                  demanded by the corporate landscape.
                </h3>
              </div>
              <div className={styles.card}>
                <h2
                  style={{ color: "white" }}
                  className={`${styles.cardTitle} cinzel-text`}
                >
                  Vision
                </h2>
                <h3
                  style={{ color: "white" }}
                  className={`${styles.cardDesc} quicksand-text`}
                >
                  Our vision is to be at the forefront of the educational
                  technology sector in India, specifically in the domains of
                  Robotics, AI, and Embedded Systems. By 2030, we aspire to
                  establish Robotics labs in more than 100 schools and
                  educational institutions, featuring our customized Robotics
                  kits.
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section id="About Us Content Section">
          <div className={styles.sectionOne}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              className={`${styles.subTitle} cinzel-text`}
            >
              Technotran Triumphs
            </motion.h2>
            <motion.ul
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: false, amount: 0.3 }}
              className={styles.list}
            >
              <li className={`${styles.sectionTxt} quicksand-text`}>
                Technotran company is approved by AICTE for Internships and
                training programs.
              </li>
              <li className={`${styles.sectionTxt} quicksand-text`}>
                Technotran is an ISO 9001:2015 Certified company.
              </li>
              <li className={`${styles.sectionTxt} quicksand-text`}>
                Conducted 100 + workshops on various technologies.
              </li>
              <li className={`${styles.sectionTxt} quicksand-text`}>
                Trained Over 10,000+ Students in 100+ Colleges across India.
              </li>
              <li className={`${styles.sectionTxt} quicksand-text`}>
                Two ongoing Research Projects.
              </li>
              <li className={`${styles.sectionTxt} quicksand-text`}>
                Recognized as an Industry by Ministry of MSME, Govt. of India.
              </li>
              <li className={`${styles.sectionTxt} quicksand-text`}>
                We Manufacturing our own Robotic kits from 2023
              </li>
            </motion.ul>
            <Image
              src={
                "https://github.com/CVSCharan/Technotran_Assets/blob/main/about-Technotran.png?raw=true"
              }
              alt={"About Us Img 2"}
              height={400}
              width={600}
              priority
              className={styles.imgOne}
            />
          </div>
          <div className={styles.sectionOne}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              className={`${styles.subTitle} cinzel-text`}
            >
              What Sets Us Apart
            </motion.h2>
            <div className={styles.cardContainer}>
              <div className={styles.cardOne}>
                <h2
                  style={{ color: "white" }}
                  className={`${styles.cardTitle} cinzel-text`}
                >
                  Manufacturing Excellence
                </h2>
                <h3
                  style={{ color: "white" }}
                  className={`${styles.cardDesc} quicksand-text`}
                >
                  At Technotran, we don’t just distribute; we create. Our
                  in-house manufacturing ensures that every product meets the
                  highest standards of quality and performance.
                </h3>
              </div>
              <div className={styles.cardOne}>
                <h2
                  style={{ color: "white" }}
                  className={`${styles.cardTitle} cinzel-text`}
                >
                  Innovative Solutions
                </h2>
                <h3
                  style={{ color: "white" }}
                  className={`${styles.cardDesc} quicksand-text`}
                >
                  Our team is constantly at the forefront of technological
                  advancements, ensuring our kits and products are always
                  up-to-date and relevant.
                </h3>
              </div>
            </div>
            <div className={styles.cardContainer}>
              <div className={styles.cardOne}>
                <h2
                  style={{ color: "white" }}
                  className={`${styles.cardTitle} cinzel-text`}
                >
                  Educational Focus
                </h2>
                <h3
                  style={{ color: "white" }}
                  className={`${styles.cardDesc} quicksand-text`}
                >
                  Understand the importance of hands-on learning. Our kits are
                  designed to offer both foundational knowledge and the
                  opportunity for creative exploration.
                </h3>
              </div>
              <div className={styles.cardOne}>
                <h2
                  style={{ color: "white" }}
                  className={`${styles.cardTitle} cinzel-text`}
                >
                  Dedicated Support
                </h2>
                <h3
                  style={{ color: "white" }}
                  className={`${styles.cardDesc} quicksand-text`}
                >
                  Our commitment to our customers goes beyond the sale. We offer
                  dedicated support, ensuring you make the most of your
                  Technotran experience.
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section id="Techtron About Us Hero Section">
          <div className={styles.container}>
            <div className={styles.imageWrapper}>
              <Image
                src="https://github.com/CVSCharan/Technotran_Assets/blob/main/R.Vikas-Reddy-hero-img.jpg?raw=true"
                alt="R. Vikas Reddy - Technotran Director"
                height={400}
                width={600}
                priority
                className={styles.heroImage}
              />
            </div>
            <div className={styles.textWrapper}>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                variants={headingVariants}
                viewport={{ once: false, amount: 0.2 }}
                className={styles.name}
              >
                R. Vikas Reddy
              </motion.h2>
              <h3 className={styles.role}>Director</h3>
              <p className={styles.description}>
                As the founder and managing director of TECHNOTRAN, R. Vikas
                Reddy brings over a decade of expertise in robotics and embedded
                systems. With a strong background in electronics circuit design,
                PCB design, and embedded C programming, he specializes in
                various microcontrollers and communication protocols. His
                achievements include conducting numerous workshops, training
                thousands of students, establishing robotics labs in schools,
                and collaborating with prestigious engineering colleges.
                Currently, he is overseeing two research projects aimed at
                further advancing technology education and innovation.
              </p>
            </div>
          </div>
          <div className={styles.containerOne}>
            <div className={styles.imageWrapper}>
              <Image
                src="https://github.com/CVSCharan/Technotran_Assets/blob/main/Yashika.K-hero-img.jpeg?raw=true"
                alt="Yashika K - Technotran Operations Head"
                height={400}
                width={600}
                priority
                className={styles.heroImage}
              />
            </div>
            <div className={styles.textWrapper}>
              <motion.h2
                initial="hidden"
                whileInView="visible"
                variants={headingVariants}
                viewport={{ once: false, amount: 0.2 }}
                className={styles.name}
              >
                Yashika K
              </motion.h2>
              <h3 className={styles.role}>Operations Head</h3>
              <p className={styles.description}>
                As the Operations Head at TECHNOTRAN, she brings a wealth of
                experience and expertise to ensure seamless operations and
                effective coordination within the company. With her strategic
                planning skills, she oversees logistics and streamlines
                processes, contributing to TECHNOTRAN’s ongoing success in the
                industry.
              </p>
            </div>
          </div>
        </section>
        <section id="About Us MOU Section">
          <div className={styles.sectionOne}>
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={headingVariants}
              viewport={{ once: false, amount: 0.2 }}
              className={`${styles.subTitle} cinzel-text`}
            >
              MOU With Various Institutions
            </motion.h2>
            <div className={styles.bannerContainer}>
              {/* Banner One - Slide Left on Change */}
              <div className={styles.imageWrapperOne}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentBannerOneImage} // Ensure re-render when image changes
                    src={imgSlideOne[currentBannerOneImage]?.imgSrc}
                    alt="DSN Events Intro Banner 1"
                    className={styles.bannerOne}
                    initial={{ x: "100%", opacity: 0 }}
                    animate={{ x: "0%", opacity: 1 }}
                    exit={{ x: "-100%", opacity: 0 }}
                    transition={{ duration: 1 }}
                  />
                </AnimatePresence>
              </div>

              {/* Banner Two - Slide Right on Change */}
              <div className={styles.imageWrapperOne}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentBannerTwoImage} // Ensure re-render when image changes
                    src={imgSlideTwo[currentBannerTwoImage]?.imgSrc}
                    alt="DSN Events Intro Banner 2"
                    className={styles.bannerTwo}
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={{ x: "0%", opacity: 1 }}
                    exit={{ x: "100%", opacity: 0 }}
                    transition={{ duration: 1 }}
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>
      </div>
      <FooterMain />
      <WhatsAppBtn />
      <PhoneBtn />
    </main>
  );
};

export default AboutUsPage;
