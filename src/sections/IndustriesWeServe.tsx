"use client";

import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useScroll } from "react-use-gesture";
import { Carousel } from "antd";
import styles from "../styles/IndustriesWeServe.module.css";
import { motion } from "framer-motion";
import { industriesWeServeCarouselData } from "@/utils/helpers";
import Image from "next/image";

const IndustriesWeServe = () => {
  const [{ y }, set] = useSpring(() => ({ y: 0 }));

  const bind = useScroll((state) => {
    set({ y: state.offset[1] });
  });

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

  return (
    <section className={styles.industriesWeServeSection} {...bind()}>
      {/* Parallax Background */}
      <animated.div
        style={{
          transform: y.to((y) => `translateY(${y * 0.3}px)`),
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage:
            "url('https://github.com/CVSCharan/Technotran_Assets/blob/main/pattern1.jpg?raw=true')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          zIndex: -1,
        }}
      />
      {/* Content */}
      <div className={styles.overlay}></div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        className={styles.contentContainer}
      >
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          className={`${styles.title} cinzel-text`}
        >
          Industries We Serve
        </motion.h2>

        {/* Carousel */}
        <div className={styles.carouselContainer}>
          <Carousel
            arrows
            autoplay
            autoplaySpeed={2500}
            dots={false}
            slidesToShow={4} // Show 3 slides at a time
            slidesToScroll={1} // Scroll one slide at a time
          >
            {industriesWeServeCarouselData.map((item, index) => (
              <div key={index} className={styles.carouselItem}>
                <Image
                  height={200}
                  width={200}
                  src={item.imgSrc}
                  alt={item.title}
                  className={styles.carouselImage}
                />
                <div className={styles.carouselContent}>
                  <h3 className={`${styles.carouselTitle} quicksand-text`}>
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </motion.div>
    </section>
  );
};

export default IndustriesWeServe;
