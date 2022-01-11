import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/react";

import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { countries } from "../countries";
import { countryNameSelector } from "../store/selectors/selector";
import { covidStatActions } from "../store/slices/slice";
import styles from "../styles/suggestion.module.css";

const AutoComplete = () => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const dispatch = useDispatch();
  const [showSuggestions, setShowSuggestions] = useState(false);
  const input = useSelector(countryNameSelector);

  const dataFetchClickHandler = useCallback(() => {
    dispatch(covidStatActions.fetch());
  }, [dispatch]);

  const onChange = useCallback(
    (e: any) => {
      const userInput = e.target.value.toLowerCase();

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

  const onClick = useCallback(
    (e: any) => {
      setFilteredSuggestions([]);
      dispatch(
        covidStatActions.AddCountryName(
          filteredSuggestions[activeSuggestionIndex]
        )
      );
      setActiveSuggestionIndex(0);
      setShowSuggestions(false);
      dispatch(covidStatActions.fetch());
    },
    [activeSuggestionIndex, dispatch, filteredSuggestions]
  );

  const onKeyDown = useCallback(
    (e: any) => {
      if (e.keyCode === 13) {
        dispatch(
          covidStatActions.AddCountryName(
            filteredSuggestions[activeSuggestionIndex]
          )
        );

        setActiveSuggestionIndex(0);
        setShowSuggestions(false);
        dispatch(covidStatActions.fetch());
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
    [activeSuggestionIndex, dispatch, filteredSuggestions]
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
              {suggestion}
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
      <Button mt="10px" size={"lg"} onClick={dataFetchClickHandler}>
        Load covid stats!
      </Button>
    </>
  );
};
export default AutoComplete;
