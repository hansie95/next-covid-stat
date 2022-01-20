import { Input } from "@chakra-ui/input";
import { Box, useColorMode, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { countries } from "../countries";
import { countryNameSelector } from "../store/selectors/selector";
import { covidStatActions } from "../store/slices/slice";
import styles from "../styles/suggestion.module.css";

const AutoSuggestion = () => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const input = useSelector(countryNameSelector);
  const dispatch = useDispatch();
  const router = useRouter();
  const toast = useToast();
  const { colorMode } = useColorMode();

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

  const onChange = useCallback(
    (e: any) => {
      const userInput = e.target.value;

      const unLinked: any = countries.filter(
        (suggestion) =>
          suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );
      dispatch(covidStatActions.AddCountryName(userInput));
      setFilteredSuggestions(unLinked);
      setActiveSuggestionIndex(0);
      setShowSuggestions(true);
    },
    [dispatch]
  );

  const onClick = (e: any) => {
    if (e.target.innerText === undefined) {
      dispatch(covidStatActions.AddCountryName(""));
      router.push("/" + "");
    }
    setFilteredSuggestions([]);
    dispatch(covidStatActions.AddCountryName(e.target.innerText));
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
    dispatch(covidStatActions.fetch());
    router.push("/" + e.target.innerText);
  };

  const onKeyDown = useCallback(
    (e: any) => {
      if (
        e.keyCode === 13 &&
        filteredSuggestions[activeSuggestionIndex] !== undefined
      ) {
        dispatch(covidStatActions.ClearCountryName());
        setFilteredSuggestions([]);
        dispatch(
          covidStatActions.AddCountryName(
            filteredSuggestions[activeSuggestionIndex]
          )
        );
        setActiveSuggestionIndex(0);
        setShowSuggestions(false);
        dispatch(covidStatActions.fetch());
        router.push("/" + filteredSuggestions[activeSuggestionIndex]);
      } else if (
        e.keyCode === 13 &&
        filteredSuggestions[activeSuggestionIndex] === undefined &&
        e.target.value !== ""
      ) {
        toast({
          title: "Wrong ountry name",
          description: "Please choose a from the list!",
          status: "warning",
          duration: 5000,
          isClosable: true,
        });
      } else if (
        e.keyCode === 13 &&
        filteredSuggestions[activeSuggestionIndex] === undefined &&
        e.target.value === ""
      ) {
        toast({
          title: "Empty country field!",
          description: "Please choose a country!",
          status: "warning",
          duration: 5000,
          isClosable: true,
        });
      } else if (e.keyCode === 38) {
        if (activeSuggestionIndex === 0) {
          return;
        }
        setActiveSuggestionIndex(activeSuggestionIndex - 1);
      } else if (e.keyCode === 40) {
        if (activeSuggestionIndex - 1 === filteredSuggestions.length) {
          return;
        }
        setActiveSuggestionIndex(activeSuggestionIndex + 1);
      }
    },
    [activeSuggestionIndex, dispatch, filteredSuggestions, router, toast]
  );

  const SuggestionsListComponent = () => {
    return filteredSuggestions.length ? (
      <ul
        className={
          colorMode === "light" ? styles.suggestions : styles.suggestions_dark
        }
      >
        {filteredSuggestions.map((suggestion, index) => {
          let className;

          if (index === activeSuggestionIndex) {
            className = styles.suggestion_active;
          }

          return (
            <li className={className} key={suggestion} onClick={onClick}>
              <Box>{suggestion}</Box>
            </li>
          );
        })}
      </ul>
    ) : (
      <div className={styles.no_suggestions}>
        <em>None found</em>
      </div>
    );
  };

  return (
    <>
      <Input
        placeholder="Country name"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={input}
      />
      {showSuggestions && input && <SuggestionsListComponent />}
    </>
  );
};

export default AutoSuggestion;
