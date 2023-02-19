import React from "react";
import { CoinSearch, Trending } from "../components";
import CoinPage from "./CoinPage";

const Home = ({ coins }) => {
  return (
    <div>
      <CoinSearch coins={coins} />
      <Trending />
    </div>
  );
};

export default Home;
