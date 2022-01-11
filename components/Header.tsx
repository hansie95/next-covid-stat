import { Box, Heading } from "@chakra-ui/layout";
import React from "react";

import SearchBar from "./SearchBar";
import SpinPicture from "./SpinPicture";

const Header = () => {
  return (
    <Box textAlign="center" mb="50px" mt="20px">
      <SpinPicture />
      <Heading mt="20px" size="xl">
        Welcome Covid Stat v1
      </Heading>
      <Box mt="10px" mb="30px">
        <SearchBar />
      </Box>
    </Box>
  );
};

export default Header;
