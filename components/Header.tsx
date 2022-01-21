import { Heading } from "@chakra-ui/layout";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { languageSelector } from "../store/selectors/languageSelector";
import { texts } from "../languageTexts";

import LanguageSwitcher from "./LanguageSwitcher";
import SearchBar from "./SearchBar";
import SpinPicture from "./SpinPicture";
import ThemeSwitcher from "./ThemeSwitcher";
import { StyledBox, GridHeader } from "../styles/Header.styled";
import { countries } from "../countries";
import { covidStatActions } from "../store/slices/slice";
import { useRouter } from "next/router";

const Header = () => {
  const language = useSelector(languageSelector);
  const router = useRouter();
  const dispatch = useDispatch();
  useEffect(() => {
    countries.map((country) => {
      if (
        country.toLowerCase() === String(router.query.countries).toLowerCase()
      ) {
        dispatch(
          covidStatActions.AddCountryName(String(router.query.countries))
        );
        dispatch(covidStatActions.fetch());
      } else {
        dispatch(covidStatActions.AddCountryName(""));
      }
    });
  }, [dispatch, router.query.countries]);
  return (
    <StyledBox textAlign="center" mb="50px" mt="45px">
      <GridHeader>
        <LanguageSwitcher />
        <SpinPicture />
        <ThemeSwitcher />
      </GridHeader>
      <Heading mt="20px" size="xl">
        {language === "hun" ? texts.hun.welcome : texts.eng.welcome}
      </Heading>
      <StyledBox mt="10px" mb="30px">
        <SearchBar />
      </StyledBox>
    </StyledBox>
  );
};

export default Header;
