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
    setEmailSignUpStart: (state, action) => {
      state.isLoading = true;
      state.error = null;
      state.userAuth = null;
    },
    setEmailSignUpSuccess: (state, action) => {
      state.userAuth = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setEmailSignUpFailed: (state, action) => {
      state.userAuth = null;
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  setEmailSignUpStart,
  setEmailSignUpSuccess,
  setEmailSignUpFailed,
} = userSlice.actions;

export default userSlice.reducer;
