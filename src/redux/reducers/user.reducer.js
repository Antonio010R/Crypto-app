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
    //sign in with email and password

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

    //sign in with email and password

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

    // google sign up

    setGoogleSignUpStart: (state, action) => {
      state.isLoading = true;
      state.error = null;
      state.userAuth = null;
      state.userCredential = null;
    },
    setGoogleSignUpSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.userAuth = action.payload.userAuth;
      state.userCredential = action.payload.userCredential;
    },
    setGoogleSignUpFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.userAuth = null;
      state.userCredential = null;
    },

    //google sign in
    setGoogleSignInStart: (state, action) => {
      state.isLoading = true;
      state.error = null;
      state.userAuth = null;
      state.userCredential = null;
    },
    setGoogleSignInSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.userAuth = action.payload.userAuth;
      state.userCredential = action.payload.userCredential;
    },
    setGoogleSignInFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.userAuth = null;
      state.userCredential = null;
    },
    //facebook sign up

    //facebook sign in

    //sign out

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

    //getting current user logged in

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
  setGoogleSignUpStart,
  setGoogleSignUpSuccess,
  setGoogleSignUpFailed,
  setGoogleSignInStart,
  setGoogleSignInSuccess,
  setGoogleSignInFailed,
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
