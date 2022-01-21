import React from "react";
import { CenterSpin, GridItem } from "../styles/SpinPicure.styled";

import { SpinImage } from "../styles/Image.styled";

const SpinPicture = () => {
  return (
    <GridItem colStart={3}>
      <CenterSpin>
        <SpinImage
          src="/covid.png"
          alt="covid bacterium"
          width="100px"
          height="100px"
        />
      </CenterSpin>
    </GridItem>
  );
};

export default SpinPicture;
