import { Box, Center, Heading, Text, Wrap } from "@chakra-ui/layout";
import {
  Image,
  CircularProgress,
  CircularProgressLabel,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { useSelector } from "react-redux";

import { texts } from "../languageTexts";
import { languageSelector } from "../store/selectors/languageSelector";

const StatisticCard: FC<any> = ({ country }) => {
  const deaths = country.response[0].deaths.total;
  const population = country.response[0].population;
  const totalCases = country.response[0].cases.total;
  const casesRatio = parseFloat(((totalCases / population) * 100).toFixed(2));
  const language = useSelector(languageSelector);
  const { colorMode } = useColorMode();

  return (
    <Box mx="auto">
      <Box ml="10px">
        <Heading>{country.response[0].country.toUpperCase()}</Heading>
        <Text as="i">
          {language === "hun" ? texts.hun.date : texts.eng.date}
          {country.response[0].day}
        </Text>
      </Box>

      <Wrap align="center" my="40px" ml="10px">
        <Center w="400px" h="80px">
          <Image
            src={colorMode === "light" ? "/grow.png" : "/grow_dark.png"}
            alt="grave"
            w="70px"
            ml="2px"
          />
          <Stack w="250px" mx="auto" ml="30px">
            <Heading size="lg">
              {language === "hun" ? texts.hun.newDeath : texts.eng.newDeath}
            </Heading>
            <Heading size="lg">
              {country.response[0].deaths.new === null
                ? 0
                : country.response[0].deaths.new}
            </Heading>
          </Stack>
        </Center>
        <Center w="300px" h="80px">
          <Image
            src={colorMode === "light" ? "/grave.png" : "/grave_dark.png"}
            alt="grave"
            w="70px"
            ml="-1px"
          />
          <Stack w="250px" mx="auto" ml="30px">
            <Heading size="lg">
              {language === "hun" ? texts.hun.death : texts.eng.death}
            </Heading>
            <Heading size="lg">
              {deaths === null ? 0 : deaths.toLocaleString("en-US")}
            </Heading>
          </Stack>
        </Center>
      </Wrap>

      <Wrap my="40px" ml="10px">
        <Center w="400px" mt="30px" h="80px">
          <Image
            src={colorMode === "light" ? "/plus.png" : "/plus_dark.png"}
            alt="grave"
            w="70px"
            ml="2px"
          />
          <Stack w="250px" mx="auto" ml="30px">
            <Heading size="lg">
              {language === "hun" ? texts.hun.newCase : texts.eng.newCase}{" "}
            </Heading>
            <Heading size="lg">
              {country.response[0].cases.new === null
                ? 0
                : country.response[0].cases.new}
            </Heading>
          </Stack>
        </Center>

        <Center mt="40px" w="300px" h="80px">
          <Image
            src={colorMode === "light" ? "/spread.png" : "/spread_dark.png"}
            alt="grave"
            w="70px"
            ml="1.4px"
          />
          <Stack w="250px" mx="auto" ml="30px">
            <Heading size="lg">
              {language === "hun" ? texts.hun.cases : texts.eng.cases}
            </Heading>
            <Heading size="lg">{totalCases.toLocaleString("en-US")}</Heading>
          </Stack>
        </Center>
      </Wrap>

      <Wrap ml="10px">
        <Center mt="40px" w="400px" h="80px">
          <Image
            src={
              colorMode === "light" ? "/population.png" : "/population_dark.png"
            }
            alt="grave"
            w="70px"
            ml="-1.3px"
          />
          <Stack w="250px" mx="auto" ml="33px">
            <Heading size="lg">
              {language === "hun" ? texts.hun.population : texts.eng.population}
            </Heading>
            <Heading size="lg">{population?.toLocaleString("en-US")}</Heading>
          </Stack>
        </Center>

        <Center w="300px" mt="30px" h="80px">
          <CircularProgress
            size="80px"
            value={casesRatio}
            color="green.400"
            thickness="7px"
            ml="-2px"
          >
            <CircularProgressLabel>{casesRatio}%</CircularProgressLabel>
          </CircularProgress>
          <Heading ml="23px" size="md">
            {language === "hun" ? texts.hun.event : texts.eng.event}
          </Heading>
        </Center>
      </Wrap>
    </Box>
  );
};

export default StatisticCard;
