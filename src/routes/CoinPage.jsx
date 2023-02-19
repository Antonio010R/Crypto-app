import React, { useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCoinDetails,
  selectCoinsIsLoading,
  setCoinDetailsStart,
} from "../redux/reducers/coins.reducer";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { FaTwitter, FaFacebook, FaReddit, FaGithub } from "react-icons/fa";
import DOMPurify from "dompurify";
import { useParams } from "react-router-dom";
import Loader from "../utils/Loader";

const CoinPage = () => {
  const dispatch = useDispatch();
  const getCoinDetails = useSelector(selectCoinDetails);
  const isLoading = useSelector(selectCoinsIsLoading);
  const param = useParams();
  console.log(param);

  useEffect(() => {
    dispatch(setCoinDetailsStart(param.coinId));
  }, [param.coinId]);

  const {
    image,
    name,
    symbol,
    market_data,
    market_cap_rank,
    hashing_algorithm,
    tickers,
    liquidity_score,
    description,
  } = getCoinDetails;

  return (
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="rounded-div my-12 py-8">
          <div className="flex py-8 gap-8">
            <img className="w-20 h-20" src={image?.large} alt="img/coin/" />
            <div className=" flex flex-col">
              <p className="text-3xl font-bold">{name} price</p>
              <p className="font-semibold">({symbol?.toUpperCase()} / USD)</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center justify-between">
                {market_data?.current_price ? (
                  <p className="text-3xl font-bold">
                    ${market_data?.current_price.usd.toLocaleString()}
                  </p>
                ) : (
                  "NaN"
                )}
                <p className="md:text-lg font-medium">7 Day</p>
              </div>
              <Sparklines data={market_data?.sparkline_7d.price}>
                <SparklinesLine color="teal" />
              </Sparklines>

              <div className="flex justify-between py-4">
                <div>
                  <p className="text-gray-500 text-sm">Market Cap</p>
                  {market_data?.market_cap ? (
                    <p>${market_data?.market_cap?.usd.toLocaleString()}</p>
                  ) : (
                    "NaN"
                  )}
                </div>

                <div>
                  <p className="text-gray-500 text-sm md:text-right">
                    Volume (24h)
                  </p>
                  {market_data?.market_cap ? (
                    <p>${market_data?.total_volume?.usd.toLocaleString()}</p>
                  ) : (
                    "NaN"
                  )}
                </div>
              </div>
              <div className="flex justify-between py-4">
                <div>
                  <p className="text-gray-500 text-sm">24h High</p>
                  {market_data?.high_24h ? (
                    <p> ${market_data?.high_24h.usd.toLocaleString()}</p>
                  ) : (
                    "NaN"
                  )}
                </div>

                <div>
                  <p className="text-gray-500 text-sm md:text-right">24h Low</p>
                  {market_data?.low_24h ? (
                    <p> ${market_data?.low_24h.usd.toLocaleString()}</p>
                  ) : (
                    "NaN"
                  )}
                </div>
              </div>
            </div>

            <div>
              <p className="text-xl font-bold md:text-2xl  md:mb-2">
                Market Stats
              </p>
              <div className="flex justify-between py-4">
                <div>
                  <p className="text-gray-500 text-sm">Market Rank</p>
                  <p>{market_cap_rank}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Hashing Algorithm</p>
                  {hashing_algorithm ? <p>{hashing_algorithm}</p> : "NaN"}
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Trust Score</p>
                  {tickers ? <p>{liquidity_score.toFixed(2)}</p> : "NaN"}
                </div>
              </div>

              <div className="flex justify-between py-4">
                <div>
                  <p className="text-gray-500 text-sm">Price Change (24h)</p>
                  {market_data ? (
                    <p
                      className={`${
                        market_data?.price_change_percentage_24h > 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {market_data?.price_change_percentage_24h.toFixed(2)}%
                    </p>
                  ) : (
                    "NaN"
                  )}
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Price Change (7d)</p>
                  {market_data ? (
                    <p
                      className={`${
                        market_data?.price_change_percentage_7d > 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {market_data?.price_change_percentage_7d.toFixed(2)}%
                    </p>
                  ) : (
                    "NaN"
                  )}
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Price Change (14d)</p>
                  {market_data ? (
                    <p
                      className={`${
                        market_data?.price_change_percentage_14d > 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {market_data?.price_change_percentage_14d.toFixed(2)}%
                    </p>
                  ) : (
                    "NaN"
                  )}
                </div>
              </div>
              <div className="flex justify-between py-4">
                <div>
                  <p className="text-gray-500 text-sm">Price Change (30d)</p>
                  {market_data ? (
                    <p
                      className={`${
                        market_data?.price_change_percentage_30d > 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {market_data?.price_change_percentage_30d.toFixed(2)}%
                    </p>
                  ) : (
                    "NaN"
                  )}
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Price Change (60d)</p>
                  {market_data ? (
                    <p
                      className={`${
                        market_data?.price_change_percentage_60d > 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {market_data?.price_change_percentage_60d.toFixed(2)}%
                    </p>
                  ) : (
                    "NaN"
                  )}
                </div>
                <div>
                  <p className="text-gray-500 text-sm">Price Change (1y)</p>
                  {market_data ? (
                    <p
                      className={`${
                        market_data?.price_change_percentage_1y > 0
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {market_data?.price_change_percentage_1y.toFixed(2)}%
                    </p>
                  ) : (
                    "NaN"
                  )}
                </div>
              </div>
              <div className="flex text-accent justify-around my-5 md:mt-7 ">
                <FaTwitter className="w-5 h-5" />
                <FaFacebook className="w-5 h-5" />
                <FaReddit className="w-5 h-5" />
                <FaGithub className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div className="py-5">
            <p className="text-xl md:text-2xl font-bold">About {name}</p>
            <p
              className="mt-4 md:mt-8 text-justify"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(description?.en),
              }}
            ></p>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default CoinPage;
