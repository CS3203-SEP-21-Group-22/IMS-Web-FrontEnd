import React from "react";

import ItemRowBookings from "./ItemRowBookings";

const TableBookings = ({ onClick, items }) => {
  return (
    <div className="w-[999px] h-[496px] bg-[#3C4D71] flex-row flex items-center justify-center gap-4 mt-10 text-white relative rounded-[60px]">
      <p></p>
      <button className="absolute right-8 top-8 p-2 bg-[#03ADE5] rounded-md" onClick={onClick}>
        BACK
      </button>
      <table className="table-auto w-[744px]  border-collapse">
        <tr className="bg-[#6D7AA4] shadow-lg border-[#3C4D71] border-[1px] text-center h-[50px]">
          <th className="">ITEM NAME</th>

          <th className="">SERIAL NO</th>
          <th className=" ">LAB</th>
          <th className=" ">DATE REQUESTED</th>
          <th></th>
        </tr>

        {items.map((item, index) => (
          <ItemRowBookings
            key={index}
            imgsrc={item.imageUrl}
            itmname={item.itemName}
            lab={item.labName}
            serial={item.itemSerialNumber}
            date={item.startDate}
          />
        ))}
      </table>
    </div>
  );
};

export default TableBookings;
