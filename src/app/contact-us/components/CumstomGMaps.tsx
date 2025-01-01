import React from "react";
import styles from "../styles/CustomGMaps.module.css";

const CustomGoogleMap = () => {
  const PLACE_ID = "ChIJgcRYKt3zTDoRCrNSdvrGrcw";

  return (
    <div className={styles.gMapsContainer}>
      <iframe
        height={500}
        title="Google Map"
        className={styles.mapFrame}
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_APP_GOOGLE_MAPS_API_KEY}&q=place_id:${PLACE_ID}`}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default CustomGoogleMap;
