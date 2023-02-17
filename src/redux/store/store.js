import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middleWares = [logger, sagaMiddleware];
const store = configureStore({
  reducer: rootReducer,
  middleware: middleWares,
});

sagaMiddleware.run(rootSaga);

export default store;
