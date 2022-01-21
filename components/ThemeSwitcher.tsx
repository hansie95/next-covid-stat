import { Switch, useColorMode } from "@chakra-ui/react";
import React from "react";

import { Center, GridItem } from "../styles/ThemeSwitcher.styled";
import { Image } from "../styles/Image.styled";

const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const light = "/sun.png";
  const dark = "/moon.png";

  return (
    <GridItem colStart={5}>
      <Center>
        <Image
          src={colorMode === "light" ? light : dark}
          width="20px"
          mr="10px"
          height="20px"
          alt="sun"
        />
        <Switch onChange={toggleColorMode} size="md" />
      </Center>
    </GridItem>
  );
};

export default ThemeSwitcher;
