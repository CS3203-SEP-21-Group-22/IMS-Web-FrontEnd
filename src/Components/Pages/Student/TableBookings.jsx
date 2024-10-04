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
          <th className="">ITEM MODEL</th>
          <th className=" ">LAB</th>
          <th className=" ">START DATE</th>
          <th className=" ">END DATE</th>
          <th className=" ">STATUS</th>
          <th></th>
        </tr>

        {items.map((item, index) => (
          <ItemRowBookings
            key={index}
            resId={item.reservationId}
            imgsrc={item.imageUrl}
            itmname={item.itemName}
            itmModel={item.itemModel}
            lab={item.labName}
            serial={item.itemSerialNumber}
            startDate={item.startDate}
            endDate={item.endDate}
            status={item.status}
          />
        ))}
      </table>
    </div>
  );
};

export default TableBookings;
