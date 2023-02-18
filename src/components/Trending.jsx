import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTrendingList,
  setTrendingListStart,
} from "../redux/reducers/trending.reducer";

const Trending = () => {
  const dispatch = useDispatch();
  const getTrending = useSelector(selectTrendingList);

  useEffect(() => {
    dispatch(setTrendingListStart());
  }, [dispatch]);

  return (
    <div className="rounded-div my-12 py-8 text-primary">
      <h2 className="text-2xl font-bold py-4">Trending coins</h2>
      {/* {console.log(getTrending)} */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {getTrending.map((coin) => (
          <div className="rounded-div p-4 flex justify-between transition-all hover:scale-105 ease-in-out duration-300">
            <div className="w-full flex items-center justify-between">
              <div className="flex gap-3">
                <img
                  className="rounded-full"
                  src={coin.item.small}
                  alt="img/trending"
                />
                <div>
                  <p className="font-bold">{coin.item.name}</p>
                  <p>{coin.item.symbol}</p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  className="w-4 h-4 mr-2"
                  src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                  alt="img/bitcoin"
                />
                <p>{coin.item.price_btc.toFixed(7)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
