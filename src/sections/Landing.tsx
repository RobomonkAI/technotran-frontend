import React from "react";
import styles from "../styles/LandingStyles.module.css";
import WhatsAppBtn from "../components/WhatsAppBtn";
import PhoneBtn from "../components/PhoneBtn";

const Landing = () => {
  return (
    <section id="Landing" className={styles.landingMainContainer}>
      <video
        src="/videos/home-page-video-4k.mp4"
        autoPlay
        loop
        muted
        className={styles.videoPlayer}
      />
      <WhatsAppBtn />
      <PhoneBtn />
    </section>
  );
};

export default Landing;
