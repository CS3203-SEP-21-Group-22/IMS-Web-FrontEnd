import React from "react";
import Column from "./Column";

const ApproveRequest = ({ reqimg, itmname, serial, lab, datereq, description }) => {
  return (
    <div className="w-[1044px] h-20 bg-[#03ADE5] rounded-[10px] shadow-sm flex flex-row justify-evenly items-center my-2">
      <div className="flex justify-center items-center mr-12 w-[67px] ">
        <img className="h-14 w-14 ml-4 " src={reqimg} alt="router" />
      </div>
      <Column textContent={itmname} />
      <Column textContent={serial} />
      <Column textContent={lab} />
      <Column textContent={datereq} />
      <Column textContent={description} />
      <button className="w-[90px] h-[47px] bg-[#B3C3E3] shadow rounded-[10px] text-[#202652] font-josefin-sans font-[500] ml-5 mr-2 ">
        ACCEPT
      </button>
      <button className="w-[90px] h-[47px] bg-[#B3C3E3] shadow rounded-[10px] text-[#202652] font-josefin-sans font-[500] ml-5 mr-2 ">
        REJECT
      </button>
    </div>
  );
};

export default ApproveRequest;
