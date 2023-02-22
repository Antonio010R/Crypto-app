import { takeLatest, all, call, put } from "redux-saga/effects";


export function* fetchSignUp(){

}

export function* onSetSignUpStart(){
    yield takeLatest("user/setSignUpStart",fetchSignUp)
}

export function* userSagas(){
    yield all([call(onSetSignUpStart)])
}