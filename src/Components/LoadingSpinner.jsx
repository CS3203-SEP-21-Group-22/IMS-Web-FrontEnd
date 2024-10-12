import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center relative flex-col">
      <span className="loading loading-spinner text-info w-12 h-12"></span>
      <p className="text-[30px] font-semibold text-white p-2">Loading</p>
    </div>
  );
};

export default LoadingSpinner;
