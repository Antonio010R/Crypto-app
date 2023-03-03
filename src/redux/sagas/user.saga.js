import { takeLatest, select, all, call, put } from "redux-saga/effects";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  auth,
  db,
  facebookProvider,
  getIsUserAuthenticated,
  googleProvider,
} from "../../firebase/firebase";

import { doc, getDoc, setDoc, arrayUnion, updateDoc } from "firebase/firestore";

//Function generator for sign up with email and password

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
    yield put({
      type: "user/setEmailSignUpSuccess",
      payload: { userAuth, userCredential },
    });
  } catch (error) {
    yield put({ type: "user/setEmailSignUpFailed", payload: error });
  }
}

//Function generator for sign in with email and password

export function* fetchEmailSignIn({ payload: { email, password } }) {
  try {
    const userCredential = yield call(
      signInWithEmailAndPassword,
      auth,
      email,
      password
    );
    const userAuth = yield userCredential.user.uid;
    const docRef = yield call(doc, db, "userList", userAuth);
    const docSnap = yield call(getDoc, docRef);
    const watchList = yield docSnap.data().watchlist;
    yield put({
      type: "user/setEmailSignInSuccess",
      payload: { userCredential, userAuth: userCredential.user.uid, watchList },
    });
  } catch (error) {
    yield put({ type: "user/setEmailSignInFailed", payload: error });
  }
}

//Function generator for Google sign in

export function* fetchGoogleSignIn() {
  try {
    const userCredential = yield call(signInWithPopup, auth, googleProvider);
    const userAuth = yield userCredential.user.uid;
    const email = yield userCredential.user.email;
    const createDoc = yield call(doc, db, "userList", userAuth);
    const docSnap = yield call(getDoc, createDoc);
    if (docSnap.exists()) {
      console.log("doc snap exists");
      const watchList = yield docSnap.data().watchlist;
      yield put({
        type: "user/setGoogleSignInSuccess",
        payload: { userCredential, userAuth, watchList },
      });
    } else {
      console.log("it doesnt exist");
      const userObj = { email, userAuth, watchlist: [] };
      yield call(setDoc, createDoc, userObj);
      yield put({
        type: "user/setGoogleSignInSuccess",
        payload: { userCredential, userAuth, watchList: [] },
      });
    }
  } catch (error) {
    yield put({ type: "user/setGoogleSignInFailed", payload: error });
  }
}

//Function generator for Facebook sign in

export function* fetchFacebookSignIn() {
  try {
    const userCredential = yield call(signInWithPopup, auth, facebookProvider);
    const userAuth = yield userCredential.user.uid;
    const email = yield userCredential.user.email;
    const createDoc = yield call(doc, db, "userList", userAuth);
    const docSnap = yield call(getDoc, createDoc);

    if (docSnap.exists()) {
      console.log("doc snap exists");
      const watchList = yield docSnap.data().watchlist;
      yield put({
        type: "user/setFacebookSignInSuccess",
        payload: { userCredential, userAuth, watchList },
      });
    } else {
      console.log("it doesnt exist");
      const userObj = { email, userAuth, watchlist: [] };
      yield call(setDoc, createDoc, userObj);
      yield put({
        type: "user/setFacebookSignInSuccess",
        payload: { userCredential, userAuth, watchList: [] },
      });
    }
  } catch (error) {
    yield put({ type: "user/setFacebookSignInFailed", payload: error });
  }
}

//Function generator for  sign out

export function* fetchSignOutStart() {
  try {
    const userCredential = yield call(signOut, auth);
    console.log("userCredential ", userCredential);
    yield put({ type: "user/setSignOutSuccess" });
  } catch (error) {
    yield put({ type: "user/setSignOutFailed", payload: error });
  }
}

//function generator for onauthstatechanged

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
    const userAuth = yield userCredential.uid || userCredential.user.uid;

    const docRef = yield call(doc, db, "userList", userAuth);
    const docSnap = yield call(getDoc, docRef, userAuth);
    const watchList = yield docSnap.data().watchlist;

    yield put({
      type: "user/checkAuthStateChangeSuccess",
      payload: { userCredential, userAuth, watchList },
    });
  } catch (error) {
    yield put({
      type: "user/checkAuthStateChangeFailed",
      payload: "No user signed in",
    });
  }
}

//function generator to add coin to watchlist in Firetore

export function* addCoinToListStart({ payload }) {
  try {
    const userCredential = yield select((state) => state.user.userCredential);
    if (userCredential) {
      const userAuth = yield userCredential.uid || userCredential.user.uid;
      const docRef = yield call(doc, db, "userList", userAuth);
      yield call(updateDoc, docRef, {
        watchlist: yield call(arrayUnion, payload),
      });
      const docSnap = yield call(getDoc, docRef);
      const watchList = yield docSnap.data().watchlist;
      yield put({ type: "user/setAddCoinToListSuccess", payload: watchList });
    } else {
      throw new Error("User not signed in");
    }
  } catch (error) {
    yield put({
      type: "user/setAddCoinToListFailed",
      payload: error,
    });
  }
}

export function* onSetEmailSignUpStart() {
  yield takeLatest("user/setEmailSignUpStart", fetchEmailSignUp);
}

export function* onSetEmailSignInStart() {
  yield takeLatest("user/setEmailSignInStart", fetchEmailSignIn);
}

export function* onSetGoogleSignIn() {
  yield takeLatest("user/setGoogleSignInStart", fetchGoogleSignIn);
}

export function* onSetFacebookSignIn() {
  yield takeLatest("user/setFacebookSignInStart", fetchFacebookSignIn);
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

export function* onSetAddCoinToList() {
  yield takeLatest("user/setAddCoinToListStart", addCoinToListStart);
}

export function* userSagas() {
  yield all([
    call(onSetEmailSignUpStart),
    call(onSetEmailSignInStart),
    call(onSetSignOutStart),
    call(onCheckAuthStateChangeStart),
    call(onSetGoogleSignIn),
    call(onSetFacebookSignIn),
    call(onSetAddCoinToList),
  ]);
}
