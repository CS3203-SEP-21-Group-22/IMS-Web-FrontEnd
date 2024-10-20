import React from "react";

export const SamplePage = () => {
  return (
    <div className="h-[800px] w-full bg-[#202652] flex justify-center items-center relative flex-col ">
      <span className="loading loading-spinner text-info w-12 h-12"></span>
      <p className="text-[30px] font-semibold text-white p-2">Loading</p>
    </div>
  );
};
