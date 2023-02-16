import { combineReducers } from "@reduxjs/toolkit";
import themeSlice from "../reducers/themes.reducer";

const rootReducer = combineReducers({
  themes: themeSlice,
});
export default rootReducer;
