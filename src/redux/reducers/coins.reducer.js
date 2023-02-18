import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coinList: [],
  isLoading: false,
  error: null,
};

const coinSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    setCoinListStart: (state, action) => {
      // console.log("going to sagas");
      state.isLoading = true;
    },
    setCoinListSuccess: (state, action) => {
      state.coinList = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setCoinListFailed: (state, action) => {
      state.coinList = [];
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setCoinListStart, setCoinListSuccess, setCoinListFailed } =
  coinSlice.actions;

export const selectCoinsList = (state) => state.coins.coinList;
export const selectCoinsIsLoading = (state) => state.coins.isLoading;
export const selectCoinsError = (state) => state.coins.error;
export default coinSlice.reducer;
