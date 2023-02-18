import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trendingList: [],
  isLoading: false,
  error: null,
};

const trendingSlice = createSlice({
  name: "trending",
  initialState,
  reducers: {
    setTrendingListStart: (state, action) => {
      state.trendingList = [];
      state.isLoading = true;
      state.error = null;
    },
    setTrendingListSuccess: (state, action) => {
      state.trendingList = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setTrendingListFailed: (state, action) => {
      state.trendingList = [];
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setTrendingListStart,
  setTrendingListSuccess,
  setTrendingListFailed,
} = trendingSlice.actions;

export const selectTrendingList = (state) => state.trending.trendingList;
export const selectTrendingIsLoading = (state) => state.trending.isLoading;
export const selectTrendingError = (state) => state.trending.error;

export default trendingSlice.reducer;
