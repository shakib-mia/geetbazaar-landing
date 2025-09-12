import React from "react";
import LoadingAnimation from "./components/Loading/Loading";

const Loading = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <LoadingAnimation />
    </div>
  );
};

export default Loading;
