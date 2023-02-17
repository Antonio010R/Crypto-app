import { all, call } from "redux-saga/effects";
import { coinSagas } from "../sagas/coins.saga";

export function* rootSaga() {
  yield all([call(coinSagas)]);
}
