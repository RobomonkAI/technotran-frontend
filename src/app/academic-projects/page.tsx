import React from "react";
import styles from "./page.module.css";
import NavBar from "@/sections/NavBar";

const AcademicProjects = () => {
  return (
    <main id="Technotran Academic Projects">
      <NavBar />
      <div className={styles.mainBody}></div>
    </main>
  );
};

export default AcademicProjects;
