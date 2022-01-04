import { Box, Center, Heading, Text, Wrap, WrapItem } from "@chakra-ui/layout";
import {
  Image,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

import { testDataSelector } from "../store/selectors/selector";

const StatisticCard = () => {
  const country = useSelector(testDataSelector);

  const deaths = country.response[0].deaths.total;
  const population = country.response[0].population;
  const totalCases = country.response[0].cases.total;
  const casesRatio = Math.round((totalCases / population) * 100);

  return (
    <Box mx="auto" mb="40px">
      <Box mt="40px">
        <Heading>{country.response[0].country.toUpperCase()}</Heading>
        <Text as="i">Latest update: {country.response[0].day}</Text>
      </Box>

      <Wrap>
        <WrapItem>
          <Center mt="30px" w="300px" h="80px" mr="100px">
            <Image src="/grow.png" alt="grave" w="70px" />
            <Heading ml="10px" size="lg">
              New deaths:{" "}
              {country.response[0].deaths.new === null
                ? 0
                : country.response[0].deaths.new}
            </Heading>
          </Center>
        </WrapItem>

        <WrapItem>
          <Center mt="30px" w="250px" h="80px">
            <Image src="/grave.png" alt="grave" w="70px" />
            <Heading ml="10px" size="lg">
              Deaths: {deaths.toLocaleString("en-US")}
            </Heading>
          </Center>
        </WrapItem>
      </Wrap>

      <Wrap>
        <WrapItem>
          <Center mt="40px" w="300px" h="80px" mr="100px">
            <Image src="/plus.png" alt="grave" w="70px" />
            <Heading ml="10px" size="lg">
              New cases:{" "}
              {country.response[0].cases.new === null
                ? 0
                : country.response[0].cases.new}
            </Heading>
          </Center>
        </WrapItem>

        <WrapItem>
          <Center mt="40px" w="300px" h="80px">
            <Image src="/spread.png" alt="grave" w="70px" />
            <Heading ml="10px" size="lg">
              Total cases: {totalCases.toLocaleString("en-US")}
            </Heading>
          </Center>
        </WrapItem>
      </Wrap>

      <Wrap>
        <WrapItem>
          <Center mt="40px" w="300px" h="80px" mr="85px">
            <Image src="/population.png" alt="grave" w="70px" />
            <Heading ml="10px" size="lg">
              Population: {population.toLocaleString("en-US")}
            </Heading>
          </Center>
        </WrapItem>

        <WrapItem w="270px" mt="40px">
          <CircularProgress
            mt="40px"
            size="110px"
            value={casesRatio}
            color="green.400"
          >
            <CircularProgressLabel>{casesRatio}%</CircularProgressLabel>
          </CircularProgress>
          <Heading mt="60px" size="20px" ml="10px">
            Total covid event in the population
          </Heading>
        </WrapItem>
      </Wrap>
    </Box>
  );
};

export default StatisticCard;
