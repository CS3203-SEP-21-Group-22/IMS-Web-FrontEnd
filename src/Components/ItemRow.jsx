import React from "react";

const ItemRow = ({ serial, lab, itmname }) => {
  return (
    <div>
      <tr className="bg-[#6D7AA4] border-[#3C4D71] border-[2px] text-center">
        <td className="flex flex-row items-center justify-center h-full ">
          <img src={laptop} className="h-[60px] w-[60px]" alt="item-pic" />
          <p>{itmname}</p>
        </td>
        <td className=" ">{serial}</td>
        <td className=" ">{lab}</td>
        <td className=" ">
          <div className="flex justify-center items-center">
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="w-[140px] h-[35px] bg-[#3C4D71] text-center"
            />
          </div>
        </td>
        <td className=" ">
          <button className="bg-[#03ADE5] text-white rounded-md p-1 shadow-sm" onClick={handleRequest}>
            PICK
          </button>
        </td>
      </tr>
    </div>
  );
};

export default ItemRow;
