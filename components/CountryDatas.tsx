import { Flex, Box, Heading, Center } from "@chakra-ui/layout";
import React from "react";
import { useSelector } from "react-redux";

import {
  testData2Selector,
  testDataSelector,
} from "../store/selectors/selector";

import MapChart from "./Map";
import StatisticCard from "./StatisticCard";

const CountryDatas = () => {
  const data = useSelector(testDataSelector);
  const data2 = useSelector(testData2Selector);

  if (data.errors?.country === "The country field cannot be empty.") {
    return (
      <Box>
        <Heading>The country field cannot be empty</Heading>
      </Box>
    );
  }

  if (data.results === 0) {
    return (
      <Box>
        <Heading>Wrong country name</Heading>
      </Box>
    );
  }

  if (data.length !== 0) {
    return (
      <Flex wrap="wrap-reverse">
        <Center mx="auto" w="710px" boxShadow="dark-lg" rounded="md" bg="white">
          <MapChart longitudeAndLatitude={data2} />
        </Center>
        <StatisticCard />
      </Flex>
    );
  }
  return <Box></Box>;
};

export default CountryDatas;
