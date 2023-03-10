import "./App.css";
import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Footer, Navbar } from "./components";
import { Account, CoinPage, Home, SignIn, SignUp } from "./routes";

import { selectTheme, setTheme } from "./redux/reducers/themes.reducer";
import { getInitialTheme } from "./utils/themes";
import { Navigate, Route, Routes } from "react-router";
import {
  selectCoinsList,
  setCoinListStart,
} from "./redux/reducers/coins.reducer";
import {
  checkAuthStateChangeStart,
  selectUserCredentials,
} from "./redux/reducers/user.reducer";

function App() {
  const dispatch = useDispatch();
  const getTheme = useSelector(selectTheme);
  const isTheme = getTheme ? getTheme : getInitialTheme();
  const getCoins = useSelector(selectCoinsList);
  const userCredential = useSelector(selectUserCredentials);

  useEffect(() => {
    dispatch(setTheme(isTheme));
  }, [isTheme, dispatch]);

  useEffect(() => {
    dispatch(setCoinListStart());
    dispatch(checkAuthStateChangeStart());
  }, []);

  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home coins={getCoins} />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {userCredential ? <Route path="/account" element={<Account />} /> : ""}
        <Route path="/coin/:coinId" element={<CoinPage />}>
          <Route path=":coinId" />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
