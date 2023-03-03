import React from "react";
import { SavedCoinList } from "../components";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserCredentials,
  setSignOutStart,
} from "../redux/reducers/user.reducer";
import { Navigate } from "react-router";

const Account = () => {
  const dispatch = useDispatch();
  const userCredential = useSelector(selectUserCredentials);

  const onClickSignOutHandler = () => {
    dispatch(setSignOutStart());
  };
  if (!userCredential) {
    return <Navigate to="/" />;
  }
  return (
    <div className="max-w-[1440px] mx-auto">
      {console.log(userCredential)}
      <div className="rounded-div flex justify-between items-center my-12 py-8">
        <div>
          <h1 className="text-2xl font-bold">Account</h1>
          <div>
            <p>
              Welcome,{" "}
              {!userCredential?.displayName
                ? userCredential?.user?.email
                : userCredential?.displayName}
            </p>
          </div>
        </div>
        <div>
          <button
            onClick={onClickSignOutHandler}
            className="border font-medium px-6 py-2 rounded-lg shadow-xl hover:shadow-2xl"
          >
            Sign Out
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center my-12 py-8 rounded-div">
        <div className="w-full min-h-[300px]">
          <h1 className="text-2xl font-bold">Watch List</h1>
          <SavedCoinList />
        </div>
      </div>
    </div>
  );
};

export default Account;
