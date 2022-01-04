import React, { FC, useCallback } from "react";
import { Box, Heading, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

import { testActions } from "../store/slices/slice";
import SearchBar from "../components/SearchBar";
import { Picture } from "../styles/SpinPicture.style";
import CountryDatas from "../components/CountryDatas";

const Home: FC = () => {
  const dispatch = useDispatch();

  const dataFetchHandler = useCallback(() => {
    dispatch(testActions.fetch());
  }, [dispatch]);

  return (
    <>
      <Box textAlign="center" my="50px">
        <Picture
          src="/covid.png"
          alt="covid bacterium"
          width="100px"
          height="100px"
        />
        <Heading mt="20px" size="xl">
          Welcome Covid Stat v1
        </Heading>
        <Box mt="10px" mb="30px">
          <SearchBar />
          <Button mt={2} size={"lg"} onClick={dataFetchHandler}>
            Load covid stats!
          </Button>
        </Box>
        <CountryDatas />
      </Box>
    </>
  );
};

export default Home;
