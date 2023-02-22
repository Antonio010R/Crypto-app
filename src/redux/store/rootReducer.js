import { combineReducers } from "@reduxjs/toolkit";
import themeSlice from "../reducers/themes.reducer";
import coinSlice from "../reducers/coins.reducer";
import trendingSlice from "../reducers/trending.reducer";
import userSlice from "../reducers/user.reducer"

const rootReducer = combineReducers({
  themes: themeSlice,
  coins: coinSlice,
  trending: trendingSlice,
  user:userSlice
});
export default rootReducer;
