import React from "react";
import styles from "./page.module.css";
import NavBar from "@/sections/NavBar";

const EventsPage = () => {
  return (
    <main id="Technotran Events">
      <NavBar />
      <div className={styles.mainBody}></div>
    </main>
  );
};

export default EventsPage;
