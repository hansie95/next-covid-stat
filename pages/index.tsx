import { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Heading } from "@chakra-ui/layout";

import { testDataSelector } from "../store/selectors/selector";
import { testActions } from "../store/slices/slice";
import { Button } from "@chakra-ui/button";

const Home: FC = () => {
  const data = useSelector(testDataSelector);
  const dispatch = useDispatch();

  console.log(data);

  const dataFetchHandler = useCallback(() => {
    dispatch(testActions.fetch());
  }, [dispatch]);

  return (
    <>
      <Box textAlign="center" my="500px">
        <Heading as="h1" size="2xl">
          Welcome Covid Stat v1
        </Heading>
        <Button mt={10} size={"lg"} onClick={dataFetchHandler}>
          Load covid stats!
        </Button>
        {data ? (
          <Heading m={10} as="h3" size="xl">
            Data fetched! Check It in the console!
          </Heading>
        ) : (
          <Heading as="h3" size="xl">
            Problem with the data fetch!
          </Heading>
        )}
      </Box>
    </>
  );
};

export default Home;
