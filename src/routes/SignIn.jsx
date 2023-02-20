import React from "react";
import { Link } from "react-router-dom";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";

const SignIn = () => {
  return (
    <div>
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
        <h2 className="text-2xl font-bold">Sign In</h2>
        <form>
          <div className="my-4">
            <label>Email</label>

            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
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
                className="w-full p-2 bg-primary border border-input rounded-lg "
                type="password"
              />
              <AiFillLock className="absolute text-slate-500 right-2 top-3 " />
            </div>
          </div>
          <button className="w-full my-2 p-3 bg-button text-btnText rounded-lg shadow-xl">
            Sign In
          </button>
        </form>
        <p className="my-4">
          Don't have an account ?{" "}
          <Link className="text-accent" to="/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
