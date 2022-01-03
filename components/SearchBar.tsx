import React, { useCallback } from "react";
import { Input, Box, Tooltip } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

import { testActions } from "../store/slices/slice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const countryIdChangeHandler = useCallback(
    (event) => {
      dispatch(testActions.AddCountryId(event.target.value));
    },
    [dispatch]
  );

  return (
    <Box w="30%" m="auto">
      <Tooltip label="Italy, Slovakia, Hungary etc..." placement="top">
        <Input placeholder="Country name" onChange={countryIdChangeHandler} />
      </Tooltip>
    </Box>
  );
};
export default SearchBar;
