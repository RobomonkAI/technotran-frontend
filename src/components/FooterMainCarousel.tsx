/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Carousel } from "antd";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import styles from "../styles/FooterMain.module.css";
import Image from "next/image";
import { footerMainCarouselData } from "@/utils/helpers";

const FooterMainCarousel = () => {
  const carouselRef = useRef<any>(null); // Ref for the Carousel component

  // Custom functions to control the carousel
  const goToPrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const goToNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  return (
    <div className={styles.carouselContainer}>
      <Carousel
        ref={carouselRef}
        arrows={false}
        autoplay
        autoplaySpeed={2500}
        dots={false}
        slidesToShow={4}
        slidesToScroll={1}
      >
        {footerMainCarouselData.map((item, index) => (
          <div key={index} className={styles.carouselItem}>
            <Image
              src={item.imgSrc}
              alt={`Footer main carousel img${index}`}
              height={200}
              width={200}
              className={styles.carouselImage}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default FooterMainCarousel;
