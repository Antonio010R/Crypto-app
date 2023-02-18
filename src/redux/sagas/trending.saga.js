import { takeLatest, all, call, put } from "redux-saga/effects";
import axios from "axios";

export function* fetchTrendingList() {
  const url = "https://api.coingecko.com/api/v3/search/trending";
  try {
    const request = yield call(axios.get, url);
    const trendingList = request.data.coins;
    yield put({type:"trending/setTrendingListSuccess",payload: trendingList});
  } catch (error) {
    yield put({type:"trending/setTrendingListFailed",payload: error});

  }
}

export function* onSetTrendingListStart() {
  yield takeLatest("trending/setTrendingListStart", fetchTrendingList);
}

export function* trendingSagas() {
  yield all([call(onSetTrendingListStart)]);
}
