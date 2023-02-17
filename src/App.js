import "./App.css";
import { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Navbar } from "./components";
import { Account, Home, SignIn, SignUp } from "./routes";

import { selectTheme, setTheme } from "./redux/reducers/themes.reducer";
import { getInitialTheme } from "./utils/themes";
import { Route, Routes } from "react-router";
import {
  selectCoinsList,
  setCoinListStart,
} from "./redux/reducers/coins.reducer";

function App() {
  const dispatch = useDispatch();
  // const [coins, setCoins] = useState([]);
  const getTheme = useSelector(selectTheme);
  const isTheme = getTheme ? getTheme : getInitialTheme();
  const getCoins = useSelector(selectCoinsList);


  useEffect(() => {
    dispatch(setTheme(isTheme));
  }, [isTheme, dispatch]);

  useEffect(() => {
    dispatch(setCoinListStart());
  }, []);

  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home coins={getCoins} />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Fragment>
  );
}

export default App;
