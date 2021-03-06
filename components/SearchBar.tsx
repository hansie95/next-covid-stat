import React from "react";
import { Box } from "@chakra-ui/react";

import AutoSuggestion from "./AutoSuggestion";

const SearchBar = () => {
  return (
    <Box w="300px" m="auto">
      <AutoSuggestion />
    </Box>
  );
};

export default SearchBar;
