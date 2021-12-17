import { Box, Center, Heading, Text } from "@chakra-ui/layout";
import {
  SimpleGrid,
  Flex,
  Image,
  Grid,
  GridItem,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import {
  testData2Selector,
  testDataSelector,
} from "../store/selectors/selector";

const StatisticCard = () => {
  const country = useSelector(testDataSelector);
  const countryPosition = useSelector(testData2Selector);

  if (country.length !== 0) {
    return (
      <Box mx="auto">
        <Box>
          <Heading>{country.response[0].country}</Heading>
          <Text as="i">Latest update: {country.response[0].day}</Text>
        </Box>

        <SimpleGrid columns={2} spacing={5}>
          <Box justifyContent="center" height="110px" w="400px">
            <Center>
              <Image src="/grave.png" alt="grave" w="90px" />
              <Heading>Deaths: </Heading>
              <Heading>{country.response[0].deaths.total}</Heading>
            </Center>
          </Box>
          <Box height="110px">
            <Center>
              <Image src="/population.png" alt="population" w="110px" />
              <Heading>Pupulation {country.response[0].population}</Heading>
            </Center>
          </Box>

          <Box height="110px"></Box>
          <Box height="110px"></Box>
          <Box height="110px"></Box>
        </SimpleGrid>
      </Box>
      /* <Box mx="30px" w="50%">
        <Box>
          
        </Box>

        <SimpleGrid spacing="40px">
          <Box bg="tomato" height="80px">
            <Image w="70px" borderRadius="50%" src="/grave.png" alt="Grave" />
          </Box>
          <Box bg="tomato" height="80px"></Box>
          <Box bg="tomato" height="80px"></Box>
        </SimpleGrid>
      </Box> */
      /* 
      <Grid
        h="200px"
        w="50%"
        mx="30px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
        > */

      /*  <GridItem rowSpan={2} colSpan={1} bg="tomato" /> */
      /*   <GridItem colSpan={6}>
          <Heading>{country.response[0].country}</Heading>
          <Text as="i">Latest update: {country.response[0].day}</Text>
        </GridItem>
        <Flex w="300px">
          <Center m="auto" mr="160px">
            <Image src="/grave.png" alt="grave" w="90px" />
            <Heading ml="20px">
              Deaths {country.response[0].deaths.total}
            </Heading>
          </Center>
          <Center>
            <Image src="/population.png" alt="population" w="110px" />
            <Heading ml="20px">
              Pupulation {country.response[0].population}
            </Heading>
          </Center>
        </Flex>
      </Grid> */
    );
  }

  return <Box></Box>;
};

export default StatisticCard;
