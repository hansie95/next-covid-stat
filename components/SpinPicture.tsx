import { Center, GridItem, Image } from "@chakra-ui/react";
import React from "react";

import styles from "../styles/spinImage.module.css";

const SpinPicture = () => {
  return (
    <GridItem colStart={3}>
      <Center width="100%" mx="auto">
        <Image
          className={styles.covid_image}
          src="/covid.png"
          alt="covid bacterium"
          minWidth="100px"
          minHeight="100px"
          width="100px"
          height="100px"
        />
      </Center>
    </GridItem>
  );
};

export default SpinPicture;
