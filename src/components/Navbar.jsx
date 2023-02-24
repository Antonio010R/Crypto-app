import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeButton from "./ThemeButton";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { selectUserCredentials } from "../redux/reducers/user.reducer";
import { setSignOutStart } from "../redux/reducers/user.reducer";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const dispatch = useDispatch();
  const userCredential = useSelector(selectUserCredentials);

  const onClickHandleNav = () => {
    // setNav(true)
    setNav(!nav);
  };
  const onClickSignOutHandler = () => {
    dispatch(setSignOutStart());
    setNav(false);
  };
  const onClickCloseHamMenu = () => {
    setNav(false);
  };

  return (
    <div className="rounded-div flex items-center justify-between h-20 font-bold">
      <Link to="/">
        <h1 className="text-2xl">Cryptoscore</h1>
      </Link>

      <div className="flex items-center gap-4">
        {userCredential ? (
          <div className="hidden md:block">
            <button
              onClick={onClickSignOutHandler}
              className="bg-button text-btnText px-5 py-2 ml-2 rounded-lg shadow-lg md:shadow-xl"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="hidden md:block">
            <Link to="/signin" className="p-4 hover:text-accent">
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-button text-btnText px-5 py-2 ml-2 rounded-lg shadow-lg md:shadow-xl"
            >
              Sign Up
            </Link>
          </div>
        )}

        <div className="hidden md:block">
          <ThemeButton />
        </div>
      </div>

      <div
        onClick={onClickHandleNav}
        className="block md:hidden curson-pointer z-10"
      >
        {nav ? (
          <AiOutlineClose className="h-7 w-7" />
        ) : (
          <AiOutlineMenu className="h-7 w-7" />
        )}
      </div>

      <div
        className={`fixed top-20 bg-primary h-[90vh] z-20 flex flex-col items-center justify-between w-full ease-in duration-300 ${
          nav ? "md:hidden left-0 translate-x-0  " : "translate-x-[100%]   "
        } `}
      >
        <ul className="w-full p-4">
          <li className="border-b py-6 px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="border-b py-6 px-4">
            <Link to="/">Account</Link>
          </li>
          <li className="border-b py-6 px-4">
            <ThemeButton />
          </li>
        </ul>

        {userCredential ? (
          <div className="w-full px-6 flex items-center justify-center">
            <button
              onClick={onClickSignOutHandler}
              className="w-full mx-auto my-2 p-3 bg-button text-btnText rounded-xl shadow-xl sm:w-3/4"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="flex flex-col w-full xs:flex-row xs:items-center xs:justify-center xs:gap-4 p-4 ">
            <Link to="/signin" className="w-full">
              <button
                onClick={onClickCloseHamMenu}
                className="w-full my-2 p-3 bg-primary text-primary border border-secondary rounded-xl shadow-xl"
              >
                Sign In
              </button>
            </Link>
            <Link to="/signup" className="w-full">
              <button
                onClick={onClickCloseHamMenu}
                className="w-full my-2 p-3 bg-button text-btnText rounded-xl shadow-xl"
              >
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
