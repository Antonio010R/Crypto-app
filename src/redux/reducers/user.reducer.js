import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userAuth: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSignUpStart: (state, action) => {
      state.isLoading = true;
      state.error = null;
      state.userAuth = null;
    },
    setSignUpSuccess: (state, action) => {
      state.userAuth = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setSignUpFailed: (state, action) => {
      state.userAuth = null;
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { setSignUpStart, setSignUpSuccess, setSignUpFailed } =
  userSlice.actions;

export default userSlice.reducer;
