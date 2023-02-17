import { takeLatest, call, all, put } from "redux-saga/effects";
import axios from "axios";

export function* fetchCoinList() {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true";

  try {
    const request = yield call(axios.get, url);
    const data = request.data;
    yield put({ type: "coins/setCoinListSuccess", payload: data });
  } catch (error) {
    // console.log(error);
    yield put({ type: "coins/setCoinListFailed", payload: error });
  }
}

export function* onSetCoinStart() {
  yield takeLatest("coins/setCoinListStart", fetchCoinList);
}

export function* coinSagas() {
  yield all([call(onSetCoinStart)]);
}
