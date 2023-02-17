import React from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import {
  selectTheme,
  setDarkTheme,
  setLightTheme,
} from "../redux/reducers/themes.reducer";

const ThemeButton = () => {
  const dispatch = useDispatch();
  const isTheme = useSelector(selectTheme);

  const onClickHandler = (e) => {
    if (e.target.classList.contains("dark-mode")) {
      e.target.classList.remove("dark-mode");
      dispatch(setLightTheme());
    } else {
      e.target.classList.add("dark-mode");
      dispatch(setDarkTheme());
    }
    // console.log(e.target.classList);
  };

  return (
    <div className="flex items-center justify-between">
        <span className="md:hidden capitalize">{isTheme} mode</span>
      <div className="md:m-1 md:p-1 ">
        <div
          onClick={onClickHandler}
          className={`flex items-center justify-between switch ${
            isTheme === "dark" ? "dark-mode" : ""
          }`}
        >
          <HiSun className="sun" />
          <div className="flicker"></div>
          <HiMoon className="moon" />
        </div>
      </div>
    </div>
  );
};

export default ThemeButton;
