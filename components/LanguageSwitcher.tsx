import { Button, ButtonGroup } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { languageSelector } from "../store/selectors/languageSelector";
import { languageSelectActions } from "../store/slices/languageSlice";
import { Center, GridItem } from "../styles/LanguageSwitcher.styled";

const useLanguageSwitcher = () => {
  const languageSelect = useSelector(languageSelector);
  const dispatch = useDispatch();
  const language =
    typeof window !== "undefined"
      ? window.localStorage.getItem("language")
      : null;

  useEffect(() => {
    if (typeof window !== "undefined") {
      dispatch(languageSelectActions.langueageSwitcher(language));
    }
  });

  const languageHunSwitcher = () => {
    dispatch(languageSelectActions.langueageSwitcher("hun"));
    localStorage.setItem("language", "hun");
  };
  const languageEngSwitcher = () => {
    dispatch(languageSelectActions.langueageSwitcher("eng"));
    localStorage.setItem("language", "eng");
  };
  return { languageSelect, languageHunSwitcher, languageEngSwitcher };
};

const LanguageSwitcher = () => {
  const { languageSelect, languageHunSwitcher, languageEngSwitcher } =
    useLanguageSwitcher();

  return (
    <GridItem colStart={1}>
      <Center>
        <ButtonGroup size="sm" isAttached variant="outline">
          <Button
            isActive={languageSelect === "hun" && true}
            onClick={languageHunSwitcher}
          >
            HUN
          </Button>
          <Button
            isActive={languageSelect === "eng" && true}
            onClick={languageEngSwitcher}
          >
            ENG
          </Button>
        </ButtonGroup>
      </Center>
    </GridItem>
  );
};

export default LanguageSwitcher;
