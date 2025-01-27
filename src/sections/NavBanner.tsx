"use client";

import React, { useEffect, useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import styles from "../styles/NavBanner.module.css";

const NavBanner = () => {
  const [isClient, setIsClient] = useState(false); // Track if the app is running on the client
  useEffect(() => {
    // Only run this code on the client side
    console.log(isClient);
    setIsClient(true);
  }, []);

  const handleSocialIconsClick = (link: string) => {
    if (isClient) {
      if (typeof window !== "undefined") {
        window.open(link, "_blank");
      }
    }
  };

  return (
    <section id="navBanner" className={styles.navBannerMainContainer}>
      {/* LMS and Certificate Verification Section */}
      <div className={styles.navBannerBtnContainer}>
        <div className={styles.navBannerBtn}>Events</div>
        <div className={styles.navBannerBtn}>Media</div>
        <div className={styles.navBannerBtn}>LMS Portal</div>
        <div className={styles.navBannerBtn}>E - Verify</div>
      </div>

      {/* Social Media Icons Section */}
      <div className={styles.navBannerIconsContainer}>
        <FacebookIcon
          onClick={() =>
            handleSocialIconsClick(
              "https://www.facebook.com/technotran?mibextid=ZbWKwL"
            )
          }
          className={styles.socialMediaIcons}
        />
        <InstagramIcon
          onClick={() =>
            handleSocialIconsClick(
              "https://www.instagram.com/technotran/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
            )
          }
          className={styles.socialMediaIcons}
        />
        <LinkedInIcon
          onClick={() =>
            handleSocialIconsClick(
              "https://www.linkedin.com/company/technotran/"
            )
          }
          className={styles.socialMediaIcons}
        />
        <YouTubeIcon
          onClick={() =>
            handleSocialIconsClick("https://www.youtube.com/@TechnoTran")
          }
          className={styles.socialMediaIcons}
        />
      </div>
    </section>
  );
};

export default NavBanner;
