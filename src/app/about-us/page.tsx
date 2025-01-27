"use client";

import NavBar from "@/sections/NavBar";
import React from "react";
import styles from "./page.module.css";

const AboutUsPage = () => {
  return (
    <main id="About Us Page">
      <NavBar />
      <div className={styles.mainBody}></div>
    </main>
  );
};

export default AboutUsPage;
