import { Center, GridItem } from "@chakra-ui/react";
import React from "react";

import { SpinImage } from "../styles/image";

const SpinPicture = () => {
  return (
    <GridItem colStart={3}>
      <Center width="100%" mx="auto">
        <SpinImage
          src="/covid.png"
          alt="covid bacterium"
          width="100px"
          height="100px"
        />
      </Center>
    </GridItem>
  );
};

export default SpinPicture;
