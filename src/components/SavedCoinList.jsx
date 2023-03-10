import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectUserWatchList,
  setRemoveCoinFromListStart,
} from "../redux/reducers/user.reducer";

const SavedCoinList = () => {
  // const [coins, setCoins] = useState([]);
  const dispatch = useDispatch();
  const coins = useSelector(selectUserWatchList);
  return (
    <div>
      {coins?.length === 0 ? (
        <p>
          You don't have any coins saved.Please save a coin to add it to watch
          list. <Link to="/">Click here to search coins</Link>
        </p>
      ) : (
        <table className="w-full border-collapse text-center">
          <thead>
            <tr className="border-b">
              <th className="px-4">Rank #</th>
              <th className="text-left">Coin</th>
              <th className="text-left">Remove</th>
            </tr>
          </thead>
          <tbody>
            {coins
              ?.slice()
              .sort((coin1, coin2) => coin1.rank - coin2.rank)
              .map((coin, index) => (
                <tr key={index} className="h-[60px] overflow-hidden">
                  <td>{coin?.rank}</td>
                  <td>
                    <Link to={`/coin/${coin.id}`}>
                      <div className="flex  item-center">
                        <div className=" flex items-center justify-center">
                          <img
                            className="w-8 h-8 mr-4 rounded-full"
                            src={coin?.image}
                            alt={`img/${coin?.id}`}
                          />
                        </div>
                        <div className="flex flex-col justify-center">
                          <p className="hidden sm:table-cell">{coin?.name}</p>
                          <p className="sm:text-gray-500 text-sm text-left">
                            {coin?.symbol.toLocaleUpperCase()}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td className="pl-8">
                    <AiOutlineClose
                      onClick={() => {
                        dispatch(setRemoveCoinFromListStart(coin));
                      }}
                      className="cursor-pointer"
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SavedCoinList;
