import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coinList: [],
  coinDetails: {},
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

    setCoinDetailsStart: (state, action) => {
      state.coinDetails = {};
      state.error = null;
      state.isLoading = true;
    },
    setCoinDetailsSuccess: (state, action) => {
      state.coinDetails = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setCoinDetailsFailed: (state, action) => {
      state.coinDetails = {};
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setCoinListStart,
  setCoinListSuccess,
  setCoinListFailed,
  setCoinDetailsStart,
  setCoinDetailsSuccess,
  setCoinDetailsFailed,
} = coinSlice.actions;

export const selectCoinsList = (state) => state.coins.coinList;
export const selectCoinDetails = (state) => state.coins.coinDetails;
export const selectCoinsIsLoading = (state) => state.coins.isLoading;
export const selectCoinsError = (state) => state.coins.error;
export default coinSlice.reducer;
