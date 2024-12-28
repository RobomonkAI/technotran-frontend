"use client";

import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "antd";
import styles from "../styles/Testimonials.module.css";
import { testimonialsCarouselData } from "@/utils/helpers";
import Image from "next/image";

const Testimonials = () => {
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
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      id="Testimonials"
      className={styles.testimonialsSection}
    >
      <motion.div className={styles.mainContainer}>
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
            style={{ height: "100%", width: "100%" }}
            arrows
            autoplay
            autoplaySpeed={2500}
            dots={false}
            slidesToShow={2}
            slidesToScroll={1}
          >
            {testimonialsCarouselData.map((item) => (
              <div key={item.id} className={styles.carouselItem}>
                <div className={styles.testimonialCard}>
                  <div className={styles.cardContent}>
                    <div className={styles.descriptionContainer}>
                      <p className={styles.description}>{item.desc}</p>
                    </div>
                    <div className={styles.authorInfo}>
                      <div className={styles.cardImage}>
                        <Image
                          height={150}
                          width={150}
                          src={item.imgSrc}
                          alt={`Testimonial from ${item.name}`}
                        />
                      </div>
                      <div className={styles.authorDetails}>
                        <h3 className={styles.authorName}>{item.name}</h3>
                        <p className={styles.authorDesignation}>
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
      </motion.div>
    </motion.section>
  );
};

export default Testimonials;
