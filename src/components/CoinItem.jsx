import React, { useState, useEffect } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserCredentials,
  setAddCoinToListStart,
  setRemoveCoinFromListStart,
} from "../redux/reducers/user.reducer";

const CoinItem = ({ coin, watchList }) => {
  const dispatch = useDispatch();
  const [saved, setSaved] = useState(false);
  const userCredential = useSelector(selectUserCredentials);

  const {
    id,
    symbol,
    name,
    image,
    current_price,
    market_cap,
    market_cap_rank,
    price_change_percentage_24h,
    total_volume,
    sparkline_in_7d,
  } = coin;

  useEffect(() => {
    if (userCredential) {
      watchList?.map((savedCoin) => {
        if (savedCoin.id === id) {
          setSaved(true);
        }
        return true;
      });
    } else {
      setSaved(false);
    }
  }, [watchList, userCredential]);

  const onClickHandlerAddCoin = () => {
    if (userCredential) {
      dispatch(
        setAddCoinToListStart({
          id,
          name,
          image,
          rank: coin.market_cap_rank,
          symbol,
        })
      );
      setSaved(true);
    } else {
      alert("Sign in create shortlist");
    }
  };

  const onClickHandlerRemoveCoin = () => {
    dispatch(
      setRemoveCoinFromListStart({
        id,
        name,
        image,
        rank: coin.market_cap_rank,
        symbol,
      })
    );
    setSaved(false);
  };
  return (
    <tr className="h-[82px] overflow-hidden border-b">
      {saved ? (
        <td onClick={onClickHandlerRemoveCoin}>
          <AiFillStar className="text-yellow-500" />
        </td>
      ) : (
        <td onClick={onClickHandlerAddCoin}>
          <AiOutlineStar />
        </td>
      )}

      <td>{market_cap_rank}</td>
      <td>
        <Link to={`/coin/${id}`}>
          <div className="flex items-center">
            <img
              className="w-7 h-7 mr-2 rounded-full"
              src={image}
              alt={`img/${id}`}
            />
            <p className="hidden sm:table-cell md:font-semibold">{name}</p>
          </div>
        </Link>
      </td>
      <td className="uppercase">{symbol}</td>
      <td>
        <span className="md:font-medium">$</span>
        {current_price.toLocaleString()}
      </td>
      <td
        className={`${
          price_change_percentage_24h > 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        {price_change_percentage_24h.toFixed(2)}%
      </td>
      <td className="w-[180px] hidden md:table-cell">
        <span className="md:font-medium">$</span>
        {total_volume.toLocaleString()}
      </td>
      <td className="w-[180px] hidden sm:table-cell">
        <span className="md:font-medium">$</span>
        {market_cap.toLocaleString()}
      </td>
      <td>
        <Sparklines data={sparkline_in_7d.price}>
          <SparklinesLine color="teal" />
        </Sparklines>
      </td>
    </tr>
  );
};

export default CoinItem;
