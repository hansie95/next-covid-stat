import React from "react";
import { StyledBox } from "../styles/SearchBar.styled";

import AutoSuggestion from "./AutoSuggestion";

const SearchBar = () => {
  return (
    <StyledBox w="300px" m="auto">
      <AutoSuggestion />
    </StyledBox>
  );
};

export default SearchBar;
