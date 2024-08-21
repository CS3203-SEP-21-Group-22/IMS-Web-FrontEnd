import React from "react";

const Column = ({ textContent }) => {
  return (
    <div className="flex flex-row items-center justify-center w-[200px] border-x border-white h-[70px]  ">
      <p className="font-istok-web font-normal text-[11px] text-white leading-[16px]  ">{textContent}</p>
    </div>
  );
};

export default Column;
