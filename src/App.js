import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTheme,
  setTheme,
  setLightTheme,
  setDarkTheme,
} from "./redux/reducers/themes.reducer";
import { useEffect } from "react";
import { getInitialTheme } from "./utils/themes";

function App() {
  const dispatch = useDispatch();
  const getTheme = useSelector(selectTheme);
  const isTheme = getTheme ? getTheme : getInitialTheme();

  useEffect(() => {
    console.log("hello");
    dispatch(setTheme(isTheme));
  }, [isTheme]);

  return (
    <div className="bg-primary h-screen text-lg">
      {isTheme}Hello
      <button
        onClick={() => {
          dispatch(setDarkTheme());
        }}
      >
        click
      </button>
    </div>
  );
}

export default App;
