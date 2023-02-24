import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userCredential: {},
  userAuth: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setEmailSignUpStart: (state, action) => {
      state.userCredential = null;
      state.isLoading = true;
      state.error = null;
      state.userAuth = null;
    },
    setEmailSignUpSuccess: (state, action) => {
      state.userCredential = action.payload.userCredential;
      state.userAuth = action.payload.userAuth;
      state.isLoading = false;
      state.error = null;
    },
    setEmailSignUpFailed: (state, action) => {
      state.userCredential = null;
      state.userAuth = null;
      state.isLoading = false;
      state.error = action.payload;
    },
    setEmailSignInStart: (state, action) => {
      state.isLoading = true;
      state.error = null;
      state.userAuth = null;
      state.userCredential = null;
    },
    setEmailSignInSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.userAuth = action.payload.userAuth;
      state.userCredential = action.payload.userCredential;
    },
    setEmailSignInFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.userAuth = null;
      state.userCredential = null;
    },
    setSignOutStart: (state, action) => {
      state.isLoading = true;
      state.error = null;
      state.userAuth = null;
      state.userCredential = null;
    },
    setSignOutSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.userAuth = null;
      state.userCredential = null;
    },
    setSignOutFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.userAuth = null;
      state.userCredential = null;
    },
    checkAuthStateChangeStart: (state, action) => {
      state.isLoading = true;
      state.error = null;
      state.userAuth = null;
      state.userCredential = null;
    },
    checkAuthStateChangeSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.userAuth = action.payload.userAuth;
      state.userCredential = action.payload.userCredential;
    },
    checkAuthStateChangeFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.userAuth = null;
      state.userCredential = null;
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
  checkAuthStateChangeStart,
  checkAuthStateChangeSuccess,
  checkAuthStateChangeFailed,
} = userSlice.actions;

export const selectUserCredentials = (state) => state.user.userCredential;
export const selectUserAuth = (state) => state.user.userAuth;
export const selectUserIsLoading = (state) => state.user.isLoading;
export const selectUserError = (state) => state.user.error;

export default userSlice.reducer;
