import React from "react";
import styles from "../styles/LandingStyles.module.css";

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
    </section>
  );
};

export default Landing;
