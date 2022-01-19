import { Center, Heading } from "@chakra-ui/layout";
import React from "react";
import Header from "../components/Header";

const Custom404 = () => {
  return (
    <>
      <Header />
      <Center>
        <Heading>404 - Page not found</Heading>
      </Center>
    </>
  );
};

export default Custom404;
