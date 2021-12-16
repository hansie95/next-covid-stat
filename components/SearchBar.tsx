import React, { useCallback } from "react";
import { Input, Box, Tooltip, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { testActions } from "../store/slices/slice";
import { countryIdSelector } from "../store/selectors/selector";

const SearchBar = () => {
  const dispatch = useDispatch();
  const country = useSelector(countryIdSelector);

  const countryIdChangeHandler = useCallback(
    (event) => {
      dispatch(testActions.AddCountryId(event.target.value));
    },
    [dispatch]
  );

  const dataFetchHandler = useCallback(() => {
    dispatch(testActions.fetch());
  }, [dispatch]);

  console.log(country);

  return (
    <Box w="30%" m="auto">
      <Tooltip label="Italy, Slovakia, Hungary etc..." placement="top">
        <Input
          placeholder="Country abbreviation or full country name"
          onChange={countryIdChangeHandler}
        />
      </Tooltip>
      <Button mt={2} size={"lg"} onClick={dataFetchHandler}>
        Load covid stats!
      </Button>
    </Box>
  );
};
export default SearchBar;
