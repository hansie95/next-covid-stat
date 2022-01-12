import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Stack,
  Image,
} from "@chakra-ui/react";

import { Switch } from "@chakra-ui/switch";

import React, { useState } from "react";
import styles from "../styles/spinImage.module.css";

const SpinPicture = () => {
  const [light, setLight] = useState(true);

  const onSwitchChangeHandler = () => {
    setLight(!light);
  };

  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      <GridItem w="100%" h="10" />
      <GridItem w="100%" h="10" />
      <Center w="100%">
        <Image
          className={styles.covid_image}
          src="/covid.png"
          alt="covid bacterium"
          width="100px"
          height="100px"
        />
      </Center>
      <GridItem w="100%" h="10" />
      <Center>
        <Image
          src={light ? "/sun.png" : "/moon.png"}
          width="20px"
          height="20px"
          alt="sun"
        />
        <Switch onChange={onSwitchChangeHandler} size="md" />
      </Center>
    </Grid>
  );
};

export default SpinPicture;
