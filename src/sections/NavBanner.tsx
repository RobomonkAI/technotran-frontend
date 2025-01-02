import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import styles from "../styles/NavBanner.module.css";

const NavBanner = () => {
  const handleSocialIconsClick = (link: string) => {
    if (typeof window !== "undefined") {
      window.open(link, "_blank");
    }
  };

  return (
    <section id="navBanner" className={styles.navBannerMainContainer}>
      {/* Contact Info Section */}
      <div className={styles.navBannerContactContainer}>
        <div className={styles.navBannerContactSubContainer}>
          <PhoneIcon className={styles.contactIcons} />
          <h2 className={styles.navBannerContact}>+91 9100 103 806</h2>
        </div>
        <div className={styles.navBannerContactSubContainer}>
          <EmailIcon className={styles.contactIcons} />
          <h2 className={styles.navBannerContact}>admin@technotran.in</h2>
        </div>
      </div>

      {/* LMS and Certificate Verification Section */}
      <div className={styles.navBannerBtnContainer}>
        <div className={styles.navBannerBtn}>LMS</div>
        <div className={styles.navBannerBtn}>Certificate Verification</div>
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
