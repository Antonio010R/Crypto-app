import React from "react";
import { CoinSearch, Trending } from "../components";
import { useSelector } from "react-redux";
import { selectCoinsIsLoading } from "../redux/reducers/coins.reducer";
import { selectTrendingIsLoading } from "../redux/reducers/trending.reducer";
import Loader from "../utils/Loader";
import { Fragment } from "react";

const Home = ({ coins }) => {
  const isCoinLoading = useSelector(selectCoinsIsLoading);
  const isTrendingLoading = useSelector(selectCoinsIsLoading);
  const isLoading = isCoinLoading || isTrendingLoading;

  return (
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <CoinSearch coins={coins} />
          <Trending />
        </div>
      )}
    </Fragment>
  );
};

export default Home;
