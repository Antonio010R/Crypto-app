import React from "react";
import { CoinSearch, Trending } from "../components";
import { useSelector } from "react-redux";
import { selectCoinsIsLoading } from "../redux/reducers/coins.reducer";
import Loader from "../utils/Loader";
import { Fragment } from "react";

const Home = ({ coins }) => {
  const isCoinLoading = useSelector(selectCoinsIsLoading);
  
  const isLoading = isCoinLoading;

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
