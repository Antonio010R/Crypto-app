import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { Link } from "react-router-dom";

const CoinItem = ({ coin }) => {
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
  return (
    <tr className="h-[82px] overflow-hidden border-b">
      <td>
        <AiOutlineStar />
      </td>
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
