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

  const handleBtnClick = (item: string) => {
    if (isClient && typeof window !== "undefined") {
      if (item === "LMS") {
        window.open("https://e-verify.technotran.in", "_blank");
      } else {
        window.open("https://e-verify.technotran.in", "_blank");
      }
    }
  };

  return (
    <section id="navBanner" className={styles.navBannerMainContainer}>
      {/* LMS and Certificate Verification Section */}
      <div className={styles.navBannerBtnContainer}>
        <a href="/events" className={styles.navBannerBtn}>
          Events
        </a>
        <a href="/media&awards" className={styles.navBannerBtn}>
          Media
        </a>
        <a
          href="https://lms.technotran.in/login"
          target="blank"
          className={styles.navBannerBtn}
        >
          LMS Portal
        </a>
        <a
          href="https://e-verify.technotran.in/"
          target="blank"
          className={styles.navBannerBtn}
        >
          E - Verify
        </a>
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
