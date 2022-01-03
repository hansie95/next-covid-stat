import { Box, Center, Heading, Text } from "@chakra-ui/layout";
import { SimpleGrid, Image } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

import { testDataSelector } from "../store/selectors/selector";

const StatisticCard = () => {
  const country = useSelector(testDataSelector);

  return (
    <Box mx="auto">
      <Box>
        <Heading>{country.response[0].country.toUpperCase()}</Heading>
        <Text as="i">Latest update: {country.response[0].day}</Text>
      </Box>

      <SimpleGrid columns={2} spacing={5}>
        <Box justifyContent="center" height="110px" w="400px">
          <Center>
            <Image src="/grave.png" alt="grave" w="90px" />
            <Heading size="lg">
              Deaths: {country.response[0].deaths.total}
            </Heading>
          </Center>
        </Box>
        <Box height="110px">
          <Center>
            <Image src="/population.png" alt="population" w="110px" />
            <Heading size="lg">
              Pupulation: {country.response[0].population}
            </Heading>
          </Center>
        </Box>

        <Box height="110px"></Box>
        <Box height="110px"></Box>
        <Box height="110px"></Box>
      </SimpleGrid>
    </Box>
  );
};

export default StatisticCard;
