import { takeLatest, all, call, put } from "redux-saga/effects";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db, getIsUserAuthenticated } from "../../firebase/firebase";

import { doc, setDoc } from "firebase/firestore";

export function* fetchEmailSignUp({ payload: { email, password } }) {
  try {
    const userCredential = yield call(
      createUserWithEmailAndPassword,
      auth,
      email,
      password
    );
    const userAuth = yield userCredential.user.uid;
    const userObj = yield { email, password, userAuth, watchlist: [] };
    const createDoc = yield call(doc, db, "userList", userAuth);
    yield call(setDoc, createDoc, userObj);
    console.log(userCredential.user.uid);
    yield put({
      type: "user/setEmailSignUpSuccess",
      payload: { userAuth, userCredential },
    });
  } catch (error) {
    yield put({ type: "user/setEmailSignUpFailed", payload: error });
  }
}

export function* fetchEmailSignIn({ payload: { email, password } }) {
  try {
    const userCredential = yield call(
      signInWithEmailAndPassword,
      auth,
      email,
      password
    );
    console.log(userCredential);
    yield put({
      type: "user/setEmailSignInSuccess",
      payload: { userCredential, userAuth: userCredential.user.uid },
    });
  } catch (error) {
    yield put({ type: "user/setEmailSignInFailed", payload: error });
  }
}

export function* fetchSignOutStart() {
  try {
    yield console.log("auth", auth);
    const userCredential = yield call(signOut, auth);
    console.log("userCredential ", userCredential);
    yield put({ type: "user/setSignOutSuccess" });
  } catch (error) {
    yield put({ type: "user/setSignOutFailed", payload: error });
  }
}

export function* fetchCheckAuthStateChangeStart() {
  try {
    // const unsubscribe = yield call(onAuthStateChanged, auth, (user) => {
    //   if (user) {
    //     unsubscribe();
    //     console.log(user);
    //     return user.uid;
    //   }
    //   return null;
    // });
    const userCredential = yield call(getIsUserAuthenticated);
    const userAuth = yield userCredential.uid;
    console.log(userAuth);
    yield put({
      type: "user/checkAuthStateChangeSuccess",
      payload: { userCredential, userAuth },
    });
  } catch (error) {
    yield put({ type: "user/checkAuthStateChangeFailed", payload: error });
  }
}

export function* onSetEmailSignUpStart() {
  yield takeLatest("user/setEmailSignUpStart", fetchEmailSignUp);
}

export function* onSetEmailSignInStart() {
  yield takeLatest("user/setEmailSignInStart", fetchEmailSignIn);
}

export function* onSetSignOutStart() {
  yield takeLatest("user/setSignOutStart", fetchSignOutStart);
}

export function* onCheckAuthStateChangeStart() {
  yield takeLatest(
    "user/checkAuthStateChangeStart",
    fetchCheckAuthStateChangeStart
  );
}

export function* userSagas() {
  yield all([
    call(onSetEmailSignUpStart),
    call(onSetEmailSignInStart),
    call(onSetSignOutStart),
    call(onCheckAuthStateChangeStart),
  ]);
}
