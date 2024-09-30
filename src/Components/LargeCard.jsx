import React, { Children, useState } from "react";
import TableHeaders from "./TableHeaders";

function Card({ onClick, Children, columns }) {
  return (
    <div className="w-[900px] h-[498px] bg-[#B3C3E3] rounded-[60px] mx-6 flex flex-col justify-center items-center relative cursor-pointer transition duration-200 ease-in-out">
      <button
        className="right-8 bg-[#D4E5F6] top-12 absolute rounded-lg  text-[14px] font-josefin-sans font-normal p-1 shadow-lg"
        onClick={onClick}
      >
        &lt;BACK
      </button>

      <TableHeaders columns={columns} top="105px" width="650px" left="172px" />
      <div className="mt-10">{Children}</div>
    </div>
  );
}

export default Card;
