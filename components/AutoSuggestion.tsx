import { Input } from "@chakra-ui/input";
import { Box, Button, useToast } from "@chakra-ui/react";
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
  const dispatch = useDispatch();
  const [showSuggestions, setShowSuggestions] = useState(false);
  const input = useSelector(countryNameSelector);
  const router = useRouter();
  const { query } = useRouter();
  const toast = useToast();

  useEffect(() => {
    countries.map((country) => {
      if (country.toLowerCase() === String(query.countries).toLowerCase()) {
        dispatch(covidStatActions.AddCountryName(String(query.countries)));
        dispatch(covidStatActions.fetch());
      } else {
        dispatch(covidStatActions.AddCountryName(""));
      }
    });
  }, [dispatch, query.countries]);

  const onChange = useCallback(
    (e: any) => {
      const userInput = e.target.value;

      const unLinked: any = countries.filter(
        (suggestion) =>
          suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
      );
      dispatch(covidStatActions.AddCountryName(e.target.value));
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
    console.log(e.target.innerText);
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
        console.log(filteredSuggestions[activeSuggestionIndex]);
      } else if (
        e.keyCode === 13 &&
        filteredSuggestions[activeSuggestionIndex] === undefined
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
      <ul className={styles.suggestions}>
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
