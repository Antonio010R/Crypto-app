import { takeLatest, call, all, put } from "redux-saga/effects";
import axios from "axios";

export function* fetchCoinList() {
  const url = process.env.REACT_APP_COIN_LIST_API;

  try {
    const request = yield call(axios.get, url);
    const data = request.data;
    yield put({ type: "coins/setCoinListSuccess", payload: data });
  } catch (error) {
    // console.log(error);
    yield put({ type: "coins/setCoinListFailed", payload: error });
  }
}

export function* fetchCoinDetails({ payload }) {
  // console.log(payload);
  const url =
    yield `${process.env.REACT_APP_COIN_DETAILS_API}/${payload}?localization=false&sparkline=true`;
  try {
    const request = yield call(axios.get, url);
    const data = yield request.data;
    yield put({ type: "coins/setCoinDetailsSuccess", payload: data });
  } catch (error) {
    yield put({ type: "coins/setCoinDetailsFailed", payload: error });
  }
}

export function* onSetCoinStart() {
  yield takeLatest("coins/setCoinListStart", fetchCoinList);
}

export function* onSetCoinDetailsStart() {
  yield takeLatest("coins/setCoinDetailsStart", fetchCoinDetails);
}

export function* coinSagas() {
  yield all([call(onSetCoinStart), call(onSetCoinDetailsStart)]);
}
