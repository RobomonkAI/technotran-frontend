"use client";

import React from "react";
import styles from "../styles/FooterMain.module.css";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FooterMainCarousel from "@/components/FooterMainCarousel";
import Image from "next/image";

const FooterMain = () => {
  const handleSocialIconsClick = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <footer id="Footer Main" className={styles.footerMainSection}>
      <div className={styles.footerCarouselSection}>
        <FooterMainCarousel />
      </div>
      <div className={styles.footerSubSection}>
        <div className={styles.quickLinksSection}>
          <h2 className={`${styles.title} cinzel-text`}>Quick Links</h2>
          <ul className={styles.quickLinksSubSection}>
            <li className={styles.quickLinksItem}>
              <h2 className={`${styles.quickLinksTxt} quicksand-text`}>Home</h2>
            </li>
            <li className={styles.quickLinksItem}>
              <h2 className={`${styles.quickLinksTxt} quicksand-text`}>
                About US
              </h2>
            </li>
            <li className={styles.quickLinksItem}>
              <h2 className={`${styles.quickLinksTxt} quicksand-text`}>MOU</h2>
            </li>
            <li className={styles.quickLinksItem}>
              <h2 className={`${styles.quickLinksTxt} quicksand-text`}>
                Contact Us
              </h2>
            </li>
            <li className={styles.quickLinksItem}>
              <h2 className={`${styles.quickLinksTxt} quicksand-text`}>
                Shipping, Return, Refund Policy
              </h2>
            </li>
            <li className={styles.quickLinksItem}>
              <h2 className={`${styles.quickLinksTxt} quicksand-text`}>
                Terms And Conditions
              </h2>
            </li>
            <li className={styles.quickLinksItem}>
              <h2 className={`${styles.quickLinksTxt} quicksand-text`}>
                Privacy Policy
              </h2>
            </li>
          </ul>
        </div>
        <div className={styles.footerSubContainer}>
          <div className={styles.footerSubContainerOne}>
            <div className={styles.reachUsSection}>
              <h2 className={`${styles.title} cinzel-text`}>Reach Us</h2>
              <div className={styles.reachUsSubSection}>
                <h3 className={`${styles.reachUsTxt} quicksand-text`}>
                  Technotran office, Plot-24/2,
                </h3>
                <h3 className={`${styles.reachUsTxt} quicksand-text`}>
                  Near more supermarket,
                </h3>
                <h3 className={`${styles.reachUsTxt} quicksand-text`}>
                  beside Canara bank,
                </h3>
                <h3 className={`${styles.reachUsTxt} quicksand-text`}>
                  Magunta layout, Nellore, A.P - 524003
                </h3>
              </div>
            </div>
            <div className={styles.contactInfoSection}>
              <h2 className={`${styles.title} cinzel-text`}>Contact Us</h2>
              <div className={styles.contactInfoSubSection}>
                <div className={styles.contactInfoItems}>
                  <PhoneIcon className={styles.contactIcons} />
                  <h2 className={`${styles.contactInfoTxt} quicksand-text`}>
                    +91 9000 326 936
                  </h2>
                </div>
                <div className={styles.contactInfoItems}>
                  <PhoneIcon className={styles.contactIcons} />
                  <h2 className={`${styles.contactInfoTxt} quicksand-text`}>
                    +91 9100 103 806
                  </h2>
                </div>
                <div className={styles.contactInfoItems}>
                  <EmailIcon className={styles.contactIcons} />
                  <h2 className={`${styles.contactInfoTxt} quicksand-text`}>
                    info@technotran.in
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.followUsSection}>
            <h2 className={`${styles.title} cinzel-text`}>Follow Us</h2>
            {/* Social Media Icons Section */}
            <div className={styles.followUsIconsContainer}>
              <FacebookIcon
                style={{ fill: "#1877F2", fontSize: "3rem" }}
                onClick={() =>
                  handleSocialIconsClick(
                    "https://www.facebook.com/technotran?mibextid=ZbWKwL"
                  )
                }
                className={styles.followUsSocialMediaIcons}
              />
              <InstagramIcon
                style={{ fill: "#cd486b", fontSize: "3rem" }}
                onClick={() =>
                  handleSocialIconsClick(
                    "https://www.instagram.com/technotran/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
                  )
                }
                className={styles.followUsSocialMediaIcons}
              />
              <LinkedInIcon
                style={{ fill: "#0077B5", fontSize: "3rem" }}
                onClick={() =>
                  handleSocialIconsClick(
                    "https://www.linkedin.com/company/technotran/"
                  )
                }
                className={styles.followUsSocialMediaIcons}
              />
              <YouTubeIcon
                style={{ fill: "#FF0000", fontSize: "3rem" }}
                onClick={() =>
                  handleSocialIconsClick("https://www.youtube.com/@TechnoTran")
                }
                className={styles.followUsSocialMediaIcons}
              />
            </div>
            <Image
              src="/Images/Technotran-logo.png"
              alt="Footer Logo"
              height={200}
              width={300}
              priority
              className={styles.footerLogo}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;
