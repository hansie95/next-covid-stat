import { useColorMode } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

import { covidDataSelector } from "../store/selectors/selector";
import { Box, CenterMap, Flex } from "../styles/CountryData.styled";

import MapChart from "./MapChart";
import StatisticCard from "./StatisticCard";

const CountryDatas = () => {
  const data = useSelector(covidDataSelector);
  const { colorMode } = useColorMode();

  if (data.results > 0) {
    return (
      <Flex>
        <CenterMap
          mx="auto"
          w="710px"
          bg={colorMode === "light" ? "white" : "#548CA8"}
          mb="50"
        >
          <MapChart />
        </CenterMap>
        <StatisticCard country={data} />
      </Flex>
    );
  }
  return <Box></Box>;
};

export default CountryDatas;
