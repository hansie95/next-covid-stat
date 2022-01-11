import Image from "next/image";
import React from "react";
import styles from "../styles/spinImage.module.css";

const SpinPicture = () => {
  return (
    <div>
      <Image
        className={styles.covid_image}
        src="/covid.png"
        alt="covid bacterium"
        width="100px"
        height="100px"
      />
    </div>
  );
};

export default SpinPicture;
