"use client";

import React, { useEffect, useState } from "react";
import styles from "../styles/FooterMain.module.css";
import {
  Phone,
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  YouTube,
} from "@mui/icons-material";
import FooterMainCarousel from "@/components/FotterMainCarousel";
import Image from "next/image";
import { usePathname } from "next/navigation";

const FooterMain = () => {
  const [isClient, setIsClient] = useState(false);

  const [isHomeRoute, setIsHomeRoute] = useState(false);
  const pathname = usePathname(); // Provides the current route

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSocialIconsClick = (link: string) => {
    if (isClient && typeof window !== "undefined") window.open(link, "_blank");
  };

  useEffect(() => {
    // Check if the current route is home
    setIsHomeRoute(pathname === "/");
  }, [pathname]);

  const quickLinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about-us" },
    { name: "MOU", link: "/mou" },
    { name: "Contact Us", link: "/contact-us" },
    {
      name: "Shipping, Return, Refund Policy",
      link: "/shipping-policy",
    },
    { name: "Terms And Conditions", link: "/terms&conditions" },
    { name: "Privacy Policy", link: "/privacy-policy" },
  ];

  const contactInfo = [
    { icon: Phone, text: "+91 9000 326 936" },
    { icon: Phone, text: "+91 9100 103 806" },
    { icon: Email, text: "info@technotran.in" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      color: "#1877F2",
      link: "https://www.facebook.com/technotran?mibextid=ZbWKwL",
    },
    {
      icon: Instagram,
      color: "#cd486b",
      link: "https://www.instagram.com/technotran/?igshid=OGQ5ZDc2ODk2ZA%3D%3D",
    },
    {
      icon: LinkedIn,
      color: "#0077B5",
      link: "https://www.linkedin.com/company/technotran/",
    },
    {
      icon: YouTube,
      color: "#FF0000",
      link: "https://www.youtube.com/@TechnoTran",
    },
  ];

  return (
    <footer id="Footer Main" className={styles.footerMainSection}>
      <section className={styles.footerCarouselSection}>
        <FooterMainCarousel />
      </section>
      <section className={styles.footerSubSection}>
        {/* Quick Links Section */}
        <div className={styles.quickLinksSection}>
          <h2 className={`${styles.title} josefin-sans-text`}>Quick Links</h2>
          <ul className={styles.quickLinksSubSection}>
            {quickLinks.map((link, index) => (
              <li key={index} className={styles.quickLinksItem}>
                <a
                  href={link.link}
                  className={`${styles.quickLinksTxt} josefin-sans-text`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Reach Us and Contact Us */}
        <div className={styles.footerSubContainer}>
          <div className={styles.footerSubContainerOne}>
            <div className={styles.reachUsSection}>
              <h2 className={`${styles.title} josefin-sans-text`}>Reach Us</h2>
              <div className={styles.reachUsSubSection}>
                {[
                  "Technotran office, Plot-24/2,",
                  "Near more supermarket,",
                  "beside Canara bank,",
                  "Magunta layout, Nellore, A.P - 524003",
                ].map((line, index) => (
                  <h3
                    key={index}
                    className={`${styles.reachUsTxt} quicksand-text`}
                  >
                    {line}
                  </h3>
                ))}
              </div>
            </div>

            <div className={styles.contactInfoSection}>
              <h2 className={`${styles.title} josefin-sans-text`}>
                Contact Us
              </h2>
              <div className={styles.contactInfoSubSection}>
                {contactInfo.map((info, index) => (
                  <div key={index} className={styles.contactInfoItems}>
                    <info.icon className={styles.contactIcons} />
                    <h2 className={`${styles.contactInfoTxt} quicksand-text`}>
                      {info.text}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Follow Us */}
          <div className={styles.followUsSection}>
            <h2 className={`${styles.title} josefin-sans-text`}>Follow Us</h2>
            <div className={styles.followUsIconsContainer}>
              {socialLinks.map(({ icon: Icon, color, link }, index) => (
                <Icon
                  key={index}
                  style={{ fill: color, fontSize: "3rem" }}
                  onClick={() => handleSocialIconsClick(link)}
                  className={styles.followUsSocialMediaIcons}
                />
              ))}
            </div>
            <Image
              src="/images/Technotran-logo.png"
              alt="Footer Logo"
              height={200}
              width={300}
              priority
              className={styles.footerLogo}
            />
          </div>
        </div>

        <div className={styles.copyRightsSection}>
          <h2 className={styles.footerTxt}>
            © 20xx - 2025 All rights reserved - Technotran Solutions Pvt. Ltd.
          </h2>
          {isHomeRoute && (
            <h3 className={styles.footerSubTxt}>Developed by CVS CHARAN</h3>
          )}
        </div>
      </section>
    </footer>
  );
};

export default FooterMain;
