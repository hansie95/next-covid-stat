import { Box, Heading } from "@chakra-ui/layout";
import { Grid } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

import { languageSelector } from "../store/selectors/languageSelector";
import { texts } from "../languageTexts";

import LanguageSwitcher from "./LanguageSwitcher";
import SearchBar from "./SearchBar";
import SpinPicture from "./SpinPicture";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  const language = useSelector(languageSelector);
  return (
    <Box textAlign="center" mb="50px" mt="45px">
      <Grid templateColumns="repeat(5, 1fr)">
        <LanguageSwitcher />
        <SpinPicture />
        <ThemeSwitcher />
      </Grid>
      <Heading mt="20px" size="xl">
        {language === "hun" ? texts.hun.welcome : texts.eng.welcome}
      </Heading>
      <Box mt="10px" mb="30px">
        <SearchBar />
      </Box>
    </Box>
  );
};

export default Header;
