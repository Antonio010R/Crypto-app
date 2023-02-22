import { all, call } from "redux-saga/effects";
import { coinSagas } from "../sagas/coins.saga";
import { trendingSagas } from "../sagas/trending.saga";
import { userSagas } from "../sagas/user.saga";

export function* rootSaga() {
  yield all([call(coinSagas), call(trendingSagas), call(userSagas)]);
}
