import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiFillLock,
  AiOutlineMail,
} from "react-icons/ai";
import Google from "../assets/google.png";
import Facebook from "../assets/facebook.png";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserCredentials,
  selectUserError,
  setEmailSignUpFailed,
  setEmailSignUpStart,
  setFacebookSignInStart,
  setGoogleSignInStart,
} from "../redux/reducers/user.reducer";

const SignUp = () => {
  const dispatch = useDispatch();
  const [view, setView] = useState(false); //toggle view for password
  const [email, setEmail] = useState(""); //state for email
  const [password, setPassword] = useState(""); //state for password
  const [rePassword, setRePassword] = useState(""); //state for re-enter password
  const errorCode = useSelector(selectUserError)?.code; //error code from store
  const userCredential = useSelector(selectUserCredentials);
  let error = ""; //error message display message

  const onChangeHandlerEmail = (e) => {
    setTimeout(() => setEmail(e.target.value), 1500);
  };

  const onChangeHandlerPassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeHandlerRePassword = (e) => {
    setRePassword(e.target.value);
  };

  const onSubmitSignUpHandler = (e) => {
    e.preventDefault();
    if (email && password && password === rePassword) {
      dispatch(setEmailSignUpStart({ email, password }));
    } else if (!email && !password && !rePassword) {
      dispatch(setEmailSignUpFailed({ code: "auth/no-email-pwd-repwd" }));
    } else if (!email) {
      dispatch(setEmailSignUpFailed({ code: "auth/no-email" }));
    } else if (!password && !rePassword) {
      dispatch(setEmailSignUpFailed({ code: "auth/no-pwd-repwd" }));
    } else if (!password) {
      dispatch(setEmailSignUpFailed({ code: "auth/no-pwd" }));
    } else if (!rePassword) {
      dispatch(setEmailSignUpFailed({ code: "auth/no-repwd" }));
    } else {
      dispatch(setEmailSignUpFailed({ code: "auth/password-not-same" }));
    }
  };

  const onClickHandlerView = () => {
    setView(!view);
  };

  const onClickGoogleSignUp = () => {
    dispatch(setGoogleSignInStart());
  };

  const onClickFacebookSignUp = () => {
    dispatch(setFacebookSignInStart());
  };

  if (errorCode === "auth/email-already-in-use") {
    error = "*Email already in use";
  } else if (errorCode === "auth/password-not-same") {
    error = "*Password not same";
  } else if (errorCode === "auth/weak-password") {
    error = "*Password is weak";
  } else if (
    errorCode === "auth/no-email-pwd-repwd" ||
    errorCode === "auth/no-email-pwd"
  ) {
    error = "*Enter the details";
  } else if (errorCode === "auth/no-email") {
    error = "*Enter email";
  } else if (errorCode === "auth/no-pwd") {
    error = "*Enter password";
  } else if (errorCode === "auth/no-pwd-repwd") {
    error = "*Enter password and confirmation password";
  } else if (errorCode === "auth/no-repwd") {
    error = "*Enter confirmation password";
  }

  console.log(errorCode);

  useEffect(() => {
    dispatch(setEmailSignUpFailed(null));
  }, []);

  if (userCredential) {
    return <Navigate to="/account" />;
  } else {
    return (
      <div className="flex flex-col max-w-[400px] mx-auto min-h-[600px] px-4 py-12">
        <h2 className="text-2xl font-bold">Sign Up</h2>

        <form onSubmit={onSubmitSignUpHandler}>
          <div className="my-4">
            <label>Email</label>

            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                onChange={onChangeHandlerEmail}
                className="w-full p-2 bg-primary border border-input rounded-lg "
                type="email"
              />
              <AiOutlineMail className="absolute text-slate-500 right-2 top-3 " />
            </div>
          </div>
          <div className="my-4">
            <label>Set Password</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                onChange={onChangeHandlerPassword}
                className="w-full p-2 bg-primary border border-input rounded-lg "
                type={`${view ? "text" : "password"}`}
              />

              {view ? (
                <AiFillEyeInvisible
                  onClick={onClickHandlerView}
                  className="cursor-pointer absolute text-slate-500 right-2 top-3 "
                />
              ) : (
                <AiFillEye
                  onClick={onClickHandlerView}
                  className="cursor-pointer absolute text-slate-500 right-2 top-3 "
                />
              )}
            </div>
          </div>
          <div className="my-4">
            <label>Re-enter Password</label>
            <div className="relative">
              <div className="my-2 w-full relative rounded-2xl shadow-xl">
                <input
                  onChange={onChangeHandlerRePassword}
                  className="w-full p-2 bg-primary border border-input rounded-lg "
                  type="password"
                />

                <AiFillLock className="cursor-pointer absolute text-slate-500 right-2 top-3 " />
              </div>
              {error ? (
                <p className="absolute text-xs text-red-500 left-1 top-11">
                  {error}
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
          <button className="w-full mb-2 mt-3 p-3 bg-button text-btnText rounded-lg shadow-xl">
            Sign Up
          </button>
        </form>

        <div className="flex flex-col items-center pt-5 border-t mt-7 border-slate-400">
          <p className="text-sm text-slate-400">or sign up with</p>
          <div className="flex mt-5 flex-col w-full items-center justify-between gap-3 md:flex-row">
            <button
              onClick={onClickGoogleSignUp}
              className="w-full flex  items-center justify-center gap-10 border border-slate-400 px-7 py-3 md:w-1/2 md:gap-4 rounded-lg shadow-xl"
            >
              <img src={Google} alt="img/google" className="w-8 h-8" />
              Google
            </button>
            <button
              onClick={onClickFacebookSignUp}
              className="w-full flex items-center justify-center gap-8 border border-slate-400 px-7 py-2 md:w-1/2  md:gap-4 rounded-lg shadow-xl "
            >
              <img src={Facebook} alt="img/google" className="w-10 h-10" />
              Facebook
            </button>
          </div>
        </div>
        <p className="my-4 mt-6">
          Don't have an account ?{" "}
          <Link className="text-accent" to="/signin">
            Sign In
          </Link>
        </p>
      </div>
    );
  }
};

export default SignUp;
