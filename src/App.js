import "./App.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Navbar } from "./components";

import {
  selectTheme,
  setTheme,
} from "./redux/reducers/themes.reducer";
import { getInitialTheme } from "./utils/themes";

function App() {
  const dispatch = useDispatch();
  const getTheme = useSelector(selectTheme);
  const isTheme = getTheme ? getTheme : getInitialTheme();

  useEffect(() => {
    dispatch(setTheme(isTheme));
  }, [isTheme, dispatch]);

  return (
    <div className="">
      <Navbar />
    </div>
  );
}

export default App;
