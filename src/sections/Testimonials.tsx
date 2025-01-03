/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Carousel } from "antd";
import styles from "../styles/Testimonials.module.css";
import { testimonialsCarouselData } from "@/utils/helpers";
import Image from "next/image";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Testimonials = () => {
  // Create refs for carousel controls
  const carouselRef = useRef<any>(null); // Ref for the Carousel component

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

  // Function to go to the previous slide
  const goToPrev = () => {
    carouselRef.current.prev();
  };

  // Function to go to the next slide
  const goToNext = () => {
    carouselRef.current.next();
  };

  // Settings for the carousel responsiveness
  const settings = {
    autoplay: true,
    autoplaySpeed: 2500,
    dots: false,
    arrows: false,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 1200, // Large screens
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768, // Tablets
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 480, // Mobile devices
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      id="Testimonials"
      className={styles.testimonialsSection}
    >
      <div className={styles.mainContainer}>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={headingVariants}
          className={`${styles.title} cinzel-text`}
        >
          Testimonials
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={cardVariants}
          className={styles.carouselContainer}
        >
          <Carousel
            ref={carouselRef} // Attach the ref to the Carousel component
            {...settings}
          >
            {testimonialsCarouselData.map((item) => (
              <div key={item.id} className={styles.carouselItem}>
                <div className={styles.testimonialCard}>
                  <div className={styles.cardContent}>
                    <div className={styles.descriptionContainer}>
                      <div className={styles.quoteIcon}>
                        <svg
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#810927"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 0 1-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
                        </svg>
                      </div>
                      <p className={`${styles.description} quicksand-text`}>
                        {item.desc}
                      </p>
                    </div>
                    <div className={styles.authorInfo}>
                      <div className={styles.cardImage}>
                        <Image
                          className={styles.cardImg}
                          priority
                          height={150}
                          width={150}
                          src={item.imgSrc}
                          alt={`Testimonial from ${item.name}`}
                        />
                      </div>
                      <div className={styles.authorDetails}>
                        <h3 className={`${styles.authorName} quicksand-text`}>
                          {item.name}
                        </h3>
                        <p
                          className={`${styles.authorDesignation} quicksand-text`}
                        >
                          {item.designation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </motion.div>

        {/* Custom Buttons */}
        <div className={styles.customControls}>
          <button className={styles.prevButton} onClick={goToPrev}>
            <ArrowBackIosNewIcon />
          </button>
          <button className={styles.nextButton} onClick={goToNext}>
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
