import { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Heading } from "@chakra-ui/layout";

import { testNameSelector } from "../store/selectors/selector";
import { testActions } from "../store/slices/slice";

const Home: FC = () => {
  const name = useSelector(testNameSelector);
  const dispatch = useDispatch();

  const nameChangeHandler = useCallback(
    (event) => {
      dispatch(testActions.changeName(event.target.value));
    },
    [dispatch]
  );

  return (
    <>
      <Box textAlign="center" my="500px">
        <Heading as="h1" size="2xl">
          Welcome Covid Stat v1
        </Heading>
      </Box>
    </>
  );
};

export const getStaticProps = async () => {};

export default Home;
