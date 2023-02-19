import React from "react";
import { Audio, FidgetSpinner, MagnifyingGlass } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="h-screen w-screen bg-white flex items-center justify-center">
      <MagnifyingGlass
        visible={true}
        height="160"
        width="160"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </div>
  );
};

export default Loader;
