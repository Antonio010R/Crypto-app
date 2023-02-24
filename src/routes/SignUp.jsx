import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible, AiOutlineMail } from "react-icons/ai";
import Google from "../assets/google.png";
import Facebook from "../assets/facebook.png";
import { useDispatch } from "react-redux";
import { setEmailSignUpStart } from "../redux/reducers/user.reducer";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [view, setView] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onChangeHandlerEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeHandlerPassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitSignUpHandler = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(setEmailSignUpStart({ email, password }));
      navigate("/");
    }
  };
  const onClickHandlerView = () => {
    setView(!view);
  };

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
          <label>Password</label>
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
        <button className="w-full my-2 p-3 bg-button text-btnText rounded-lg shadow-xl">
          Sign Up
        </button>
      </form>

      <div className="flex flex-col items-center pt-5 border-t mt-7 border-slate-400">
        <p className="text-sm text-slate-400">or sign up with</p>
        <div className="flex mt-5 flex-col w-full items-center justify-between gap-3 md:flex-row">
          <button className="w-full flex  items-center justify-center gap-10 border border-slate-400 px-7 py-3 md:w-1/2 md:gap-4 rounded-lg shadow-xl">
            <img src={Google} alt="img/google" className="w-10 h-10" />
            Google
          </button>
          <button className="w-full flex items-center justify-center gap-8 border border-slate-400 px-7 py-2 md:w-1/2  md:gap-4 rounded-lg shadow-xl ">
            <img src={Facebook} alt="img/google" className="w-12 h-12" />
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
};

export default SignUp;
