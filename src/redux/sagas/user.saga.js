import { takeLatest, all, call, put } from "redux-saga/effects";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, db } from "../../firebase/firebase";

import { doc, setDoc } from "firebase/firestore";

export function* fetchEmailSignUp({ payload: { email, password } }) {
  try {
    const userCredential = yield call(
      createUserWithEmailAndPassword,
      auth,
      email,
      password
    );
    const uid = yield userCredential.user.uid;
    const userObj = yield { email, password, uid, watchlist: [] };
    const createDoc = yield call(doc, db, "userList", email);
    yield call(setDoc, createDoc, userObj);
    console.log(userCredential.user.uid);
    yield put({ type: "user/setEmailSignUpSuccess", payload: uid });
  } catch (error) {
    yield put({ type: "user/setEmailSignUpFailed", payload: error });
  }
}

export function* onSetEmailSignUpStart() {
  yield takeLatest("user/setEmailSignUpStart", fetchEmailSignUp);
}

export function* userSagas() {
  yield all([call(onSetEmailSignUpStart)]);
}
