import { Center, GridItem } from "@chakra-ui/layout";
import { Switch, useColorMode, Image } from "@chakra-ui/react";
import React from "react";

const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const light = "/sun.png";
  const dark = "/moon.png";
  return (
    <GridItem colStart={5} alignItems="center" my="auto">
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
