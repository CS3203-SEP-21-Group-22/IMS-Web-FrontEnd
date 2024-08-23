import React from "react";

const TableHeaders = ({ columns, width, left, top }) => {
  return (
    <div
      className=" h-[29px] rounded-[10px] shadow absolute bg-[#03ADE5] flex flex-row items-center"
      style={{ width: width, top: top, left: left }}
    >
      {columns.map((column, index) => (
        <p
          key={index}
          className="font-josefin-sans font-normal text-[15px] text-white leading-[20px] tracking-[0.06em] w-[200px]"
        >
          {column.toUpperCase()}
        </p>
      ))}
    </div>
  );
};

export default TableHeaders;