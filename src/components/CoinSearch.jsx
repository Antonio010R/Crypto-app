import React, { useState } from "react";

import CoinItem from "./CoinItem";

const CoinSearch = ({ coins }) => {
  const [search, setSearch] = useState("");

  const onChangeHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="rounded-div my-4">
      {console.log(coins)}
      <div className="flex flex-col justify-between pt-4 pb-6 text-center md:text-right md:flex-row ">
        <h1 className="text-2xl my-2 font-bold ">Search Crypto</h1>
        <form>
          <input
            type="text"
            onChange={onChangeHandler}
            className="w-full bg-primary border border-input px-8 py-4 rounded-xl shadow-xl md:px-4 md:py-3"
            placeholder="Search a coin"
          />
        </form>
      </div>

      <table className="w-full border-collapse text-center whitespace-nowrap">
        <thead>
          <tr className="border-b">
            <th></th>
            <th className="px-4">#</th>
            <th className="text-left md:pl-3">Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th className="hidden md:table-cell">24h Volume</th>
            <th className="hidden sm:table-cell">Mkt</th>
            <th>Last 7 days</th>
          </tr>
        </thead>
        <tbody>
          {coins
            .filter((coin) => {
              if (search === "") {
                return true;
              } else if (
                coin.name
                  .toLocaleLowerCase()
                  .includes(search.toLocaleLowerCase())
              ) {
                return true;
              }
              return false;
            })
            .map((coin) => (
              <CoinItem key={coin.id} coin={coin} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinSearch;
