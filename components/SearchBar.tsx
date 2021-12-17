import React, { useCallback } from "react";
import { Input, Box, Tooltip } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import { testActions } from "../store/slices/slice";
import {
  countryIdSelector,
  testData2Selector,
} from "../store/selectors/selector";

const SearchBar = () => {
  const dispatch = useDispatch();
  const country = useSelector(countryIdSelector);
  const data2 = useSelector(testData2Selector);

  const countryIdChangeHandler = useCallback(
    (event) => {
      dispatch(testActions.AddCountryId(event.target.value));
    },
    [dispatch]
  );

  return (
    <Box w="30%" m="auto">
      <Tooltip label="Italy, Slovakia, Hungary etc..." placement="top">
        <Input
          placeholder="Country abbreviation or full country name"
          onChange={countryIdChangeHandler}
        />
      </Tooltip>
    </Box>
  );
};
export default SearchBar;
