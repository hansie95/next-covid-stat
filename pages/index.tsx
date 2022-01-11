import React, { FC } from "react";
import CountryData from "../components/CountryData";

import Header from "../components/Header";

const Home: FC = () => {
  return (
    <>
      <Header />
      <CountryData />
    </>
  );
};

export default Home;
