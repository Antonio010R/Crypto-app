import React from "react";
import { SavedCoinList } from "../components";
import { useDispatch } from "react-redux";
import { setSignOutStart } from "../redux/reducers/user.reducer";

const Account = () => {
  const dispatch = useDispatch();
  const onClickSignOutHandler = () => {
    dispatch(setSignOutStart());
  };
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="rounded-div flex justify-between items-center my-12 py-8">
        <div>
          <h1 className="text-2xl font-bold">Account</h1>
          <div>
            <p>Welcome, User</p>
          </div>
        </div>
        <div>
          <button
            onClick={onClickSignOutHandler}
            className="border px-6 py-2 rounded-lg shadow-xl hover:shaddow-2xl"
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
