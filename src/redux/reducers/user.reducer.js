import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userCredential: {},
  userAuth: null,
  isLoading: false,
  error: null,
  watchList: [],
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
      state.watchList = [];
    },
    setEmailSignUpSuccess: (state, action) => {
      state.userCredential = action.payload.userCredential;
      state.userAuth = action.payload.userAuth;
      state.isLoading = false;
      state.error = null;
      state.watchList = [];
    },
    setEmailSignUpFailed: (state, action) => {
      state.userCredential = null;
      state.userAuth = null;
      state.isLoading = false;
      state.error = action.payload;
      state.watchList = [];
    },

    //sign in with email and password

    setEmailSignInStart: (state, action) => {
      state.isLoading = true;
      state.error = null;
      state.userAuth = null;
      state.userCredential = null;
      state.watchList = [];
    },
    setEmailSignInSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.userAuth = action.payload.userAuth;
      state.userCredential = action.payload.userCredential;
      state.watchList = action.payload.watchList;
    },
    setEmailSignInFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //google sign in
    setGoogleSignInStart: (state, action) => {
      state.isLoading = true;
      state.error = null;
      state.userAuth = null;
      state.userCredential = null;
      state.watchList = [];
    },
    setGoogleSignInSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.userAuth = action.payload.userAuth;
      state.userCredential = action.payload.userCredential;
      state.watchList = action.payload.watchList;
    },
    setGoogleSignInFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //facebook sign in
    setFacebookSignInStart: (state, action) => {
      state.isLoading = true;
      state.error = null;
      state.userAuth = null;
      state.userCredential = null;
      state.watchList = [];
    },
    setFacebookSignInSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.userAuth = action.payload.userAuth;
      state.userCredential = action.payload.userCredential;
      state.watchList = action.payload.watchList;
    },
    setFacebookSignInFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    //sign out

    setSignOutStart: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    setSignOutSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.userAuth = null;
      state.userCredential = null;
      state.watchList = [];
    },
    setSignOutFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //getting current user logged in

    checkAuthStateChangeStart: (state, action) => {
      state.isLoading = true;
      state.error = null;
      state.userAuth = null;
      state.userCredential = null;
      state.watchList = [];
    },
    checkAuthStateChangeSuccess: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.userAuth = action.payload.userAuth;
      state.userCredential = action.payload.userCredential;
      state.watchList = action.payload.watchList;
    },
    checkAuthStateChangeFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },

    //adding coin to watchlist
    setAddCoinToListStart: (state, action) => {
      state.watchList = null;
    },
    setAddCoinToListSuccess: (state, action) => {
      state.watchList = action.payload;
    },
    setAddCoinToListFailed: (state, action) => {
      state.error = action.payload;
    },
    setRemoveCoinFromListStart: (state, action) => {
      state.watchList = null;
    },
    setRemoveCoinFromListSuccess: (state, action) => {
      state.watchList = action.payload;
    },
    setRemoveCoinFromListFailed: (state, action) => {
      state.error = action.payload;
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
  setGoogleSignInStart,
  setGoogleSignInSuccess,
  setGoogleSignInFailed,
  setFacebookSignInStart,
  setFacebookSignInSuccess,
  setFacebookSignInFailed,
  setSignOutStart,
  setSignOutSuccess,
  setSignOutFailed,
  checkAuthStateChangeStart,
  checkAuthStateChangeSuccess,
  checkAuthStateChangeFailed,
  setAddCoinToListStart,
  setAddCoinToListSuccess,
  setAddCoinToListFailed,
  setRemoveCoinFromListStart,
  setRemoveCoinFromListSuccess,
  setRemoveCoinFromListFailed,
} = userSlice.actions;

export const selectUserCredentials = (state) => state.user.userCredential;
export const selectUserAuth = (state) => state.user.userAuth;
export const selectUserIsLoading = (state) => state.user.isLoading;
export const selectUserError = (state) => state.user.error;
export const selectUserWatchList = (state) => state.user.watchList;

export default userSlice.reducer;
