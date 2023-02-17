import { combineReducers } from "@reduxjs/toolkit";
import themeSlice from "../reducers/themes.reducer";
import coinSlice from "../reducers/coins.reducer"

const rootReducer = combineReducers({
  themes: themeSlice,
  coins: coinSlice,
});
export default rootReducer;
