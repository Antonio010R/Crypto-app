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
    setEmailSignInStart: (state, action) => {
      state.isLoading = true;
      state.error = null;
      state.userAuth = null;
    },
    setEmailSignInSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.userAuth = null;
    },
    setEmailSignInFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.userAuth = null;
    },
    setSignOutStart: (state, action) => {
      state.isLoading = true;
      state.error = null;
      state.userAuth = null;
    },
    setSignOutSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.userAuth = null;
    },
    setSignOutFailed: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.userAuth = null;
    },
  },
});

export const {
  setEmailSignUpStart,
  setEmailSignUpSuccess,
  setEmailSignUpFailed,
  setEmailSignInStart,
  setEmailSignInSuccess,
  setEmailSignInFailed,
  setSignOutStart,
  setSignOutSuccess,
  setSignOutFailed,
} = userSlice.actions;

export default userSlice.reducer;
