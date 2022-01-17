import { Flex, Box, Center } from "@chakra-ui/layout";
import React from "react";
import { useSelector } from "react-redux";

import { covidDataSelector } from "../store/selectors/selector";

import MapChart from "./MapChart";
import StatisticCard from "./StatisticCard";

const CountryDatas = () => {
  const data = useSelector(covidDataSelector);

  if (data.results > 0) {
    return (
      <Flex wrap="wrap">
        <Center mx="auto" w="710px" boxShadow="dark-lg" rounded="md" bg="white">
          <MapChart />
        </Center>
        <StatisticCard country={data} />
      </Flex>
    );
  }
  return <Box></Box>;
};

export default CountryDatas;
