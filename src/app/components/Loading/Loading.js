import React from "react";

const LoadingAnimation = () => {
  const delays = ["0s", "0.1s", "0.2s", "0.3s", "0.4s"];
  console.log("loadingAnimation...");

  return (
    <div className="flex items-end justify-center gap-1 h-12 w-52">
      loading...
      {/* {delays.map((delay, idx) => (
        <div
          key={idx}
          className="w-1.5 bg-purple-700 h-5"
          //   style={{ animationDelay: delay }}
        ></div>
      ))} */}
    </div>
  );
};

export default LoadingAnimation;
