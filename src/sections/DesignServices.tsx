"use client";

import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useScroll } from "react-use-gesture";
import { motion } from "framer-motion";
import styles from "../styles/DesignServices.module.css";
import Link from "next/link";

const DesignServices = () => {
  // Scroll listener and animation
  const [{ y }, set] = useSpring(() => ({ y: 0 }));

  const bind = useScroll((state) => {
    set({ y: state.offset[1] }); // Update the Y-axis offset on scroll
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
    <section className={styles.designServicesSection} {...bind()}>
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
          className={`${styles.title} josefin-sans-text`}
        >
          Explore Our Design Services
        </motion.h2>
        <p className={`${styles.description} quicksand-text`}>
          {`Discover the power of creativity with our state-of-the-art design
          services. Leveraging advanced CNC machines, laser cutting technology,
          3D printing capabilities, and expert PCB design, we offer
          comprehensive solutions for your prototyping and manufacturing needs.
          From concept to creation, we're here to turn your vision into reality.`}
        </p>
        <Link href="/design-services" className={styles.exploreLink}>
          Explore more
        </Link>
      </motion.div>
    </section>
  );
};

export default DesignServices;
