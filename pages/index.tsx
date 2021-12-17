import React, { FC, useCallback } from "react";
import { useSelector } from "react-redux";
import { Box, Heading, Button, Flex, Grid } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

import { testActions } from "../store/slices/slice";
import {
  testData2Selector,
  testDataSelector,
} from "../store/selectors/selector";
import SearchBar from "../components/SearchBar";
import { Picture } from "../styles/SpinPicture.style";
import MapChart from "../components/Map";
import StatisticCard from "../components/StatisticCard";

const Home: FC = () => {
  const data = useSelector(testDataSelector);
  const data2 = useSelector(testData2Selector);
  const dispatch = useDispatch();

  const dataFetchHandler = useCallback(() => {
    dispatch(testActions.fetch());
  }, [dispatch]);

  console.log(data);
  console.log(data2);

  return (
    <>
      <Box textAlign="center" my="50px">
        <Picture
          src="/covid.png"
          alt="covid bacterium"
          width="100px"
          height="100px"
        />
        <Heading as="h1" size="2xl">
          Welcome Covid Stat v1
        </Heading>
        <Box mt="10">
          <SearchBar />
          <Button mt={2} size={"lg"} onClick={dataFetchHandler}>
            Load covid stats!
          </Button>
        </Box>
        {data.length !== 0 && data.errors !== "undefined" ? (
          <Heading m={10} as="h3" size="xl">
            Data fetched! Check It in the console!
          </Heading>
        ) : (
          <Heading m={10} as="h3" size="xl">
            There is no data fetched!
          </Heading>
        )}

        <Flex>
          <Box mx="30px" w="50%" boxShadow="dark-lg" rounded="md" bg="white">
            <MapChart />
          </Box>
          <StatisticCard />
        </Flex>
      </Box>
    </>
  );
};

export default Home;
